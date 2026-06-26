// Alternative Lives — render categories and cards from data.js.

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
    chip.style.setProperty("--cat", PALETTE[i % PALETTE.length]);
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

// A distinct, harmonious color for each category — keeps sections visually separated and fun.
const PALETTE = [
  "#5a8f4e", // work exchange — green
  "#c2632f", // house sitting — terracotta
  "#d4574e", // hospitality — coral
  "#7a6cae", // contemplative — indigo
  "#cc6699", // au pair — rose
  "#3d7ea6", // sailing — sea blue
  "#4f7cac", // seasonal — slate blue
  "#b8519e", // festivals — magenta
  "#d99022", // slow travel — amber
  "#5566c4", // teach english — blue-violet
  "#4f9d5d", // conservation — leaf green
  "#a06a3f", // intentional communities — earth
  "#7d8a3f", // caretaking — olive
];

function renderSections() {
  CATEGORIES.forEach((cat, i) => {
    const section = el("section", "section");
    section.id = cat.id;
    section.style.setProperty("--cat", PALETTE[i % PALETTE.length]);

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

// Floating particle drift over the hero — subtle depth and motion.
function initHeroParticles() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  const hero = canvas.parentElement;
  let w = 0;
  let h = 0;
  const COUNT = 64;
  let particles = [];

  function resize() {
    w = canvas.width = hero.offsetWidth;
    h = canvas.height = hero.offsetHeight;
  }
  function seed() {
    particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.2 + 0.6,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.5 + 0.15,
    }));
  }
  function tick() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      else if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      else if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.a})`;
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }

  resize();
  seed();
  tick();
  window.addEventListener("resize", resize);
}

// Reveal sections as they scroll into view (no-JS users see everything by default).
function initReveal() {
  document.documentElement.classList.add("reveal-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px" }
  );
  document.querySelectorAll(".section").forEach((s) => observer.observe(s));
}

renderChips();
renderSections();
setupScrollSpy();
initHeroParticles();
initReveal();
