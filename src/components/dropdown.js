// src/components/dropdown.js

(function () {
  const styles = `
    :root {
      --fdx-dropdown-width: 12rem;
      --fdx-dropdown-bg: #ffffff;
      --fdx-dropdown-border: #d1d5db;
      --fdx-dropdown-hover: #f3f4f6;
      --fdx-dropdown-radius: 0.4rem;
      --fdx-dropdown-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .fdx-dropdown {
      position: relative;
      display: inline-block;
    }

    .fdx-dropdown-btn {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;
      border-radius: var(--fdx-dropdown-radius);
      border: 1px solid var(--fdx-dropdown-border);
      background: var(--fdx-dropdown-bg);
      transition: background 0.2s ease;
    }

    .fdx-dropdown-btn:hover {
      background: var(--fdx-dropdown-hover);
    }

    .fdx-dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      width: var(--fdx-dropdown-width);
      background: var(--fdx-dropdown-bg);
      border: 1px solid var(--fdx-dropdown-border);
      border-radius: var(--fdx-dropdown-radius);
      box-shadow: var(--fdx-dropdown-shadow);
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.3s ease, opacity 0.3s ease;
      opacity: 0;
      z-index: 1000;
    }

    .fdx-dropdown-menu.show {
      max-height: 500px; /* enough to show all items */
      opacity: 1;
    }

    .fdx-dropdown-item {
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .fdx-dropdown-item:hover {
      background: var(--fdx-dropdown-hover);
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  // ===== JS Dropdown Logic =====
  document.addEventListener("click", function (e) {
    const isDropdownBtn = e.target.closest(".fdx-dropdown-btn");
    const openDropdowns = document.querySelectorAll(".fdx-dropdown-menu.show");

    // Close other open dropdowns
    openDropdowns.forEach((menu) => {
      if (!menu.contains(e.target)) {
        menu.classList.remove("show");
      }
    });

    if (isDropdownBtn) {
      const menu = isDropdownBtn.nextElementSibling;
      if (menu && menu.classList.contains("fdx-dropdown-menu")) {
        menu.classList.toggle("show");
      }
    }
  });
})();
