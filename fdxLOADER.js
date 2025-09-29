// fdxUI.js — single loader using full paths
(function () {
  const files = [
    "src/components/var.js",
    "src/components/button.js",
    "src/components/card.js",
    "src/components/fab.js",
    "src/components/dropdown.js",
    "src/components/modal.js",
    "src/components/tabs.js",
    "src/components/accordion.js",
  ];

  files.forEach((file) => {
    const script = document.createElement("script");
    script.src = file;
    script.defer = true;
    document.head.appendChild(script);
  });
})();
