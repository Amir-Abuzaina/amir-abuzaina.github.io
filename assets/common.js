
(function () {
  const S = window.SITE;
  const here = location.pathname.split("/").pop() || "index.html";
  const [first, ...rest] = S.name.split(" ");

  const top = document.createElement("header");
  top.className = "top";
  top.innerHTML = `
    <a class="brand" href="index.html">
      <div class="name">${first.toUpperCase()} <b>${rest.join(" ").toUpperCase()}</b></div>
      <div class="tag">${S.tagline}</div>
    </a>
    <nav class="nav">
      <a href="portfolio.html" class="${here.startsWith("portfolio") || here.startsWith("project") ? "active" : ""}">Portfolio</a>
      <a href="experience.html" class="${here.startsWith("experience") ? "active" : ""}">Experience</a>
    </nav>`;
  document.body.prepend(top);

  const icons = {
    linkedin: '<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>',
    artstation: '<path d="M0 17.72l2.03 3.5A2.43 2.43 0 0 0 4.2 22.5h13.5l-2.8-4.78H0zM24 17.75c0-.48-.14-.93-.39-1.31L15.7 2.72a2.42 2.42 0 0 0-2.14-1.22H9.38L21.55 22.6l1.92-3.32c.37-.63.53-.99.53-1.53zM12.86 14.4L7.4 5 1.95 14.4h10.9z"/>',
  };
  const social = document.createElement("div");
  social.className = "social";
  social.innerHTML = Object.entries(S.links)
    .map(([k, url]) => `<a href="${url}" target="_blank" rel="noopener" aria-label="${k}" class="s-${k}"><svg viewBox="0 0 24 24">${icons[k] || ""}</svg></a>`)
    .join("");
  document.body.append(social);
})();


const vsrc = (v, size) => v && v.startsWith("assets/media/") ? v.replace("assets/media/", `assets/media/${size}/`) : v;

const isrc = (u, size) => u && u.includes("artstation.com") ? u.replace("/large/", `/${size}/`) : u;
const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
const CATEGORIES = { art: "art", shaders: "technical", pipeline: "pipeline & production" };


function mediaHTML(p, full) {
  if (p.video) {
    return `<video src="${full ? p.video : vsrc(p.card || p.video, "sm")}" ${p.poster ? `poster="${p.poster}"` : ""} muted loop playsinline preload="metadata"></video>`;
  }
  if (p.poster) return `<img src="${p.poster}" alt="${p.title}" loading="lazy">`;
  return `<div class="ph">[ VIDEO LOOP ]</div>`;
}


function autoplayInView(root) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.play().catch(() => {}); else e.target.pause();
  }), { threshold: 0.25 });
  (root || document).querySelectorAll("video").forEach(v => io.observe(v));
}
