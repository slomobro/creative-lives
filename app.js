// Deep Travel — render categories and cards from data.js.

const chipsEl = document.getElementById("chips") || document.querySelector(".chips");
const contentEl = document.getElementById("content");

// Every rendered card, so the "Surprise me" button can jump to a random one.
const allCards = [];

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html != null) node.innerHTML = html;
  return node;
}

function renderChips() {
  CATEGORIES.forEach((cat, i) => {
    const chip = el("button", "chip" + (i === 0 ? " active" : ""));
    chip.textContent = `${cat.emoji} ${cat.title}`;
    chip.dataset.target = cat.id;
    chip.addEventListener("click", () => {
      document.getElementById(cat.id).scrollIntoView({ behavior: "smooth" });
    });
    chipsEl.appendChild(chip);
  });
}

// Pull a platform's logo from its own domain's favicon — no image files to manage.
function logoFor(url) {
  try {
    const host = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${host}&sz=64`;
  } catch (e) {
    return null;
  }
}

function renderCard(p) {
  const card = el("article", "card");

  const top = el("div", "card-top");

  const heading = el("div", "card-heading");
  const logoSrc = p.url ? logoFor(p.url) : null;
  if (logoSrc) {
    const logo = document.createElement("img");
    logo.className = "logo";
    logo.src = logoSrc;
    logo.alt = "";
    logo.loading = "lazy";
    // If a favicon fails to load, hide it gracefully rather than show a broken icon.
    logo.addEventListener("error", () => logo.remove());
    heading.appendChild(logo);
  }
  heading.appendChild(el("h3", null, p.name));
  top.appendChild(heading);

  if (p.cost) top.appendChild(el("span", "cost", p.cost));
  card.appendChild(top);

  card.appendChild(el("p", "summary", p.summary));
  card.appendChild(el("p", "details", p.details));

  if (p.url) {
    const link = el("a", "card-link");
    link.href = p.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Visit site →";
    card.appendChild(link);
  } else {
    card.appendChild(el("span", "card-link disabled", "No website — just reach out"));
  }
  return card;
}

function renderSections() {
  CATEGORIES.forEach((cat) => {
    const section = el("section", "section");
    section.id = cat.id;

    const head = el("div", "section-head");
    head.appendChild(el("span", "section-emoji", cat.emoji));
    head.appendChild(el("h2", null, cat.title));
    head.appendChild(el("p", "tagline", cat.tagline));
    head.appendChild(el("p", "blurb", cat.blurb));
    section.appendChild(head);

    const cards = el("div", "cards");
    cat.platforms.forEach((p) => {
      const card = renderCard(p);
      allCards.push(card);
      cards.appendChild(card);
    });
    section.appendChild(cards);

    contentEl.appendChild(section);
  });
}

// ---------- Surprise me ----------
function surpriseMe() {
  if (!allCards.length) return;
  const card = allCards[Math.floor(Math.random() * allCards.length)];
  card.scrollIntoView({ behavior: "smooth", block: "center" });
  allCards.forEach((c) => c.classList.remove("flash"));
  // Re-trigger the animation reliably.
  void card.offsetWidth;
  card.classList.add("flash");
}

// ---------- Quiz ----------
const quizModal = document.getElementById("quizModal");
const quizBody = document.getElementById("quizBody");
const quizAnswers = [];

function openQuiz() {
  quizAnswers.length = 0;
  renderQuestion(0);
  quizModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeQuiz() {
  quizModal.hidden = true;
  document.body.style.overflow = "";
}

function renderQuestion(i) {
  const q = QUIZ[i];
  quizBody.innerHTML = "";

  quizBody.appendChild(
    el("p", "quiz-progress", `Question ${i + 1} of ${QUIZ.length}`)
  );
  quizBody.appendChild(el("h2", "quiz-question", q.question));

  const opts = el("div", "quiz-options");
  q.options.forEach((opt) => {
    const btn = el("button", "quiz-option");
    btn.textContent = opt.label;
    btn.addEventListener("click", () => {
      quizAnswers[i] = opt.scores;
      if (i + 1 < QUIZ.length) renderQuestion(i + 1);
      else showResults();
    });
    opts.appendChild(btn);
  });
  quizBody.appendChild(opts);

  if (i > 0) {
    const back = el("button", "quiz-back", "← Back");
    back.addEventListener("click", () => renderQuestion(i - 1));
    quizBody.appendChild(back);
  }
}

function showResults() {
  const totals = {};
  quizAnswers.forEach((scores) => {
    for (const id in scores) totals[id] = (totals[id] || 0) + scores[id];
  });

  const ranked = Object.keys(totals)
    .sort((a, b) => totals[b] - totals[a])
    .slice(0, 3)
    .map((id) => CATEGORIES.find((c) => c.id === id))
    .filter(Boolean);

  quizBody.innerHTML = "";
  quizBody.appendChild(el("p", "quiz-progress", "Your matches"));
  quizBody.appendChild(el("h2", "quiz-question", "Paths that fit you ✦"));

  const list = el("div", "quiz-results");
  ranked.forEach((cat, idx) => {
    const item = el("button", "quiz-result");
    item.innerHTML =
      `<span class="quiz-result-rank">${idx + 1}</span>` +
      `<span class="quiz-result-emoji">${cat.emoji}</span>` +
      `<span class="quiz-result-text"><strong>${cat.title}</strong>` +
      `<small>${cat.tagline}</small></span>` +
      `<span class="quiz-result-go">View →</span>`;
    item.addEventListener("click", () => {
      closeQuiz();
      document.getElementById(cat.id).scrollIntoView({ behavior: "smooth" });
    });
    list.appendChild(item);
  });
  quizBody.appendChild(list);

  const retake = el("button", "quiz-back", "↻ Retake the quiz");
  retake.addEventListener("click", openQuiz);
  quizBody.appendChild(retake);
}

// Highlight the active chip as you scroll through sections.
function setupScrollSpy() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".chip").forEach((c) => {
            c.classList.toggle("active", c.dataset.target === entry.target.id);
          });
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );
  document.querySelectorAll(".section").forEach((s) => observer.observe(s));
}

renderChips();
renderSections();
setupScrollSpy();

// Wire up the hero buttons and quiz controls.
document.getElementById("randomBtn").addEventListener("click", surpriseMe);
document.getElementById("quizBtn").addEventListener("click", openQuiz);
document.getElementById("quizClose").addEventListener("click", closeQuiz);
quizModal.addEventListener("click", (e) => {
  if (e.target === quizModal) closeQuiz();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !quizModal.hidden) closeQuiz();
});
