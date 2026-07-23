(() => {
  const tree = [
    {
      key: "inicio",
      label: "Inicio",
      href: "index.html",
      before: "Nada: esta es la puerta de entrada.",
      after: "Seguís con la Ruta.",
    },
    {
      key: "ruta",
      label: "Ruta",
      href: "roadmap.html",
      before: "Antes conviene mirar Inicio.",
      after: "Elegís Track 1, Track 2 o Track 3.",
    },
    {
      key: "track1",
      label: "Track 1: Módulo 1",
      href: "module-1.html",
      before: "Antes necesitás ubicarte en la Ruta.",
      after: "Después practicás con el notebook principal.",
    },
    {
      key: "track2",
      label: "Track 2: Ruta Purista",
      href: "track-2.html",
      before: "Antes conviene tener claro el objetivo del Track 1.",
      after: "Después seguís con notebooks curados de adquisición y preparación de texto.",
    },
    {
      key: "track3",
      label: "Track 3: RAG básico",
      href: "track-3.html",
      before: "Antes ayuda entender texto, chunks y embeddings.",
      after: "Después podés conectar una fuente web a un vector store.",
    },
    {
      key: "feedback",
      label: "Reflexión y feedback",
      href: "feedback.html",
      before: "Antes cerrá una práctica o una clase.",
      after: "Después revisás Progreso y feedback.",
    },
    {
      key: "tracking",
      label: "Progreso y feedback",
      href: "tracking.html",
      before: "Antes necesitás registrar reflexión o avance.",
      after: "Después decidís el próximo paso de la ruta.",
    },
  ];

  const extras = [
    { label: "Notebook principal", href: "https://colab.research.google.com/github/HaroldSthid/blueprint_NLP_and_babysteps_LLMs/blob/main/NLP_LLMs_babysteps.ipynb" },
    { label: "Repo Track 3 RAG", href: "https://github.com/HaroldSthid/RAG_blueprint_babysteps/tree/main" },
    { label: "README", href: "https://github.com/HaroldSthid/blueprint_NLP_and_babysteps_LLMs/blob/main/README.md" },
  ];

  const body = document.body;
  if (!body || body.querySelector(".site-map")) return;

  const currentKey = body.dataset.siteKey || inferKeyFromPath(window.location.pathname);
  const currentPage = tree.find((item) => item.key === currentKey) || tree[0];

  const siteMap = document.createElement("div");
  siteMap.className = "site-map";
  siteMap.dataset.open = "false";
  siteMap.innerHTML = `
    <button type="button" class="site-map__toggle" aria-controls="site-map-drawer" aria-expanded="false" aria-label="Abrir mapa lateral de aprendizaje">Mapa</button>
    <div class="site-map__overlay" hidden></div>
    <aside id="site-map-drawer" class="site-map__drawer" aria-hidden="true" aria-label="Mapa lateral de aprendizaje">
      <div class="site-map__panel" role="document">
        <header class="site-map__header">
          <div>
            <p class="site-map__eyebrow">Mapa lateral</p>
            <h2 class="site-map__title">Ruta de aprendizaje</h2>
          </div>
          <button type="button" class="site-map__close" aria-label="Cerrar mapa lateral de aprendizaje">Cerrar</button>
        </header>
        <section class="site-map__current" aria-label="Contexto actual">
          <p class="site-map__current-label">Estás acá</p>
          <h3 class="site-map__current-name">${escapeHtml(currentPage.label)}</h3>
          <p class="site-map__context"><strong>Antes necesitás…</strong> ${escapeHtml(currentPage.before)}</p>
          <p class="site-map__context"><strong>Después seguís con…</strong> ${escapeHtml(currentPage.after)}</p>
        </section>
        <nav class="site-map__tree" aria-label="Ruta principal">
          <ul class="site-map__tree-list">
            ${tree.map(renderTreeItem).join("")}
          </ul>
        </nav>
        <section class="site-map__secondary" aria-label="Apoyos secundarios">
          <h3 class="site-map__secondary-title">Apoyos secundarios</h3>
          <div class="site-map__secondary-links">
            ${extras.map(renderExtra).join("")}
          </div>
        </section>
      </div>
    </aside>
  `;

  body.appendChild(siteMap);

  const toggle = siteMap.querySelector(".site-map__toggle");
  const drawer = siteMap.querySelector(".site-map__drawer");
  const overlay = siteMap.querySelector(".site-map__overlay");
  const closeButton = siteMap.querySelector(".site-map__close");
  const focusableSelector = [
    "a[href]",
    "button:not([disabled])",
    "summary",
    "[tabindex]:not([tabindex='-1'])",
  ].join(", ");
  const managedTabindex = new Map();

  lockDrawerFocus();

  const open = () => {
    siteMap.dataset.open = "true";
    overlay.hidden = false;
    drawer.setAttribute("aria-hidden", "false");
    unlockDrawerFocus();
    toggle.setAttribute("aria-expanded", "true");
    closeButton.focus();
  };

  const close = () => {
    siteMap.dataset.open = "false";
    overlay.hidden = true;
    drawer.setAttribute("aria-hidden", "true");
    lockDrawerFocus();
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  };

  toggle.addEventListener("click", () => (siteMap.dataset.open === "true" ? close() : open()));
  closeButton.addEventListener("click", close);
  overlay.addEventListener("click", close);
  document.addEventListener("keydown", (event) => {
    if (siteMap.dataset.open !== "true") return;

    if (event.key === "Escape") {
      close();
      return;
    }

    if (event.key !== "Tab") return;

    const focusables = getDrawerFocusables();
    if (focusables.length === 0) {
      event.preventDefault();
      closeButton.focus();
      return;
    }

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;

    if (!drawer.contains(active)) {
      event.preventDefault();
      first.focus();
      return;
    }

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  });

  function renderTreeItem(item) {
    const isCurrent = item.key === currentKey;
    return `
      <li class="site-map__tree-item${isCurrent ? " site-map__tree-item--current" : ""}">
        <div class="site-map__tree-main">
          <a class="site-map__link" href="${escapeAttribute(item.href)}">
            <span>${escapeHtml(item.label)}</span>
            ${isCurrent ? '<span class="site-map__badge">Estás acá</span>' : ""}
          </a>
          <details class="site-map__details">
            <summary>Ver detalle</summary>
            <div class="site-map__details-body">
              <p><strong>Antes necesitás…</strong> ${escapeHtml(item.before)}</p>
              <p><strong>Después seguís con…</strong> ${escapeHtml(item.after)}</p>
            </div>
          </details>
        </div>
      </li>
    `;
  }

  function renderExtra(item) {
    return `<a href="${escapeAttribute(item.href)}">${escapeHtml(item.label)} ↗</a>`;
  }

  function lockDrawerFocus() {
    for (const element of drawer.querySelectorAll(focusableSelector)) {
      if (!managedTabindex.has(element)) {
        managedTabindex.set(element, element.getAttribute("tabindex"));
      }
      element.setAttribute("tabindex", "-1");
    }
  }

  function unlockDrawerFocus() {
    for (const [element, previousTabIndex] of managedTabindex.entries()) {
      if (previousTabIndex === null) {
        element.removeAttribute("tabindex");
      } else {
        element.setAttribute("tabindex", previousTabIndex);
      }
    }
    managedTabindex.clear();
  }

  function getDrawerFocusables() {
    return Array.from(drawer.querySelectorAll(focusableSelector)).filter(
      (element) => element.getAttribute("tabindex") !== "-1"
    );
  }

  function inferKeyFromPath(pathname) {
    const filename = pathname.split("/").pop() || "index.html";
    const byFile = {
      "index.html": "inicio",
      "roadmap.html": "ruta",
      "module-1.html": "track1",
      "track-2.html": "track2",
      "track-3.html": "track3",
      "feedback.html": "feedback",
      "tracking.html": "tracking",
    };
    return byFile[filename] || "inicio";
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
  }

  function escapeAttribute(value) {
    return escapeHtml(value);
  }
})();
