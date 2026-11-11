
const navLinks = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Bug Files", href: "bug-files.html" },
  { label: "Automation", href: "automation.html" },
  { label: "Resume", href: "resume.html" }
];

const currentPage =
  window.location.pathname.split("/").pop() || "index.html";

const header = document.getElementById("site-header");

if (header) {
  header.innerHTML = `
    <nav class="site-navbar" aria-label="Main navigation">

      <a href="index.html" class="site-brand">
        <span class="site-brand-symbol">𐔌՞ ܸ.ˬ.ܸ՞𐦯</span>
        umirahbkr
      </a>

      <div class="site-nav-links">
        ${navLinks.map(link => `
          <a
            href="${link.href}"
            class="${currentPage === link.href ? "active" : ""}"
            ${currentPage === link.href ? 'aria-current="page"' : ""}
          >
            ${link.label}
          </a>
        `).join("")}
      </div>

      <a
        href="https://github.com/syafiqahumirah"
        class="site-github"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile"
        title="GitHub"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 2.04 3.2 1.44.1-.73.4-1.23.72-1.52-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.14A10.7 10.7 0 0 1 12 6.33c.95 0 1.9.13 2.8.38 2.14-1.45 3.08-1.14 3.08-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.24-5.12 5.52.41.35.77 1.03.77 2.08v2.96c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"/>
        </svg>
      </a>

    </nav>
  `;
}

const footer = document.getElementById("site-footer");

if (footer) {
  footer.innerHTML = `
    <p>Made with curiosity &amp; coffee. ☕️ © 2026 Umirah</p>
  `;
}
