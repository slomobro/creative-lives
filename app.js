// Creative Lives — render categories and cards from data.js.

const chipsEl = document.getElementById("chips") || document.querySelector(".chips");
const contentEl = document.getElementById("content");

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

function renderCard(p) {
  const card = el("article", "card");

  const top = el("div", "card-top");
  top.appendChild(el("h3", null, p.name));
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
    cat.platforms.forEach((p) => cards.appendChild(renderCard(p)));
    section.appendChild(cards);

    contentEl.appendChild(section);
  });
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
