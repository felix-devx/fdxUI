(function () {
  const styles = `
    :root {
      --fdx-tab-border-color: #d1d5db;
      --fdx-tab-active-border-color: #4f46e5;
      --fdx-tab-bg-hover: #f3f4f6;
      --fdx-tab-padding: 0.75rem 1.25rem;
      --fdx-tab-radius: 0.375rem;
      --fdx-tab-content-padding: 1rem;
      --fdx-tab-content-bg: #ffffff;
    }

    .fdx-tabs {
      display: flex;
      flex-direction: column;
    }

    .fdx-tab-nav {
      display: flex;
      border-bottom: 1px solid var(--fdx-tab-border-color);
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }

    .fdx-tab-nav-item {
      padding: var(--fdx-tab-padding);
      cursor: pointer;
      border: 1px solid transparent;
      border-bottom: none;
      border-top-left-radius: var(--fdx-tab-radius);
      border-top-right-radius: var(--fdx-tab-radius);
      margin-bottom: -1px; /* Overlap with border-bottom of .fdx-tab-nav */
      transition: background 0.2s ease, border-color 0.2s ease;
      color: #374151; /* Default text color */
    }

    .fdx-tab-nav-item:hover:not(.active) {
      background-color: var(--fdx-tab-bg-hover);
    }

    .fdx-tab-nav-item.active {
      border-color: var(--fdx-tab-border-color);
      border-bottom-color: var(--fdx-tab-content-bg); /* Match content background */
      background-color: var(--fdx-tab-content-bg);
      color: var(--fdx-tab-active-border-color);
      font-weight: 500;
    }

    .fdx-tab-content {
      display: none;
      padding: var(--fdx-tab-content-padding);
      background-color: var(--fdx-tab-content-bg);
      border: 1px solid var(--fdx-tab-border-color);
      border-radius: var(--fdx-tab-radius);
      border-top-left-radius: 0; /* Align with active tab */
    }

    .fdx-tab-content.active {
      display: block;
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fdx-tabs").forEach((tabsContainer) => {
      const tabNavItems = tabsContainer.querySelectorAll(".fdx-tab-nav-item");
      const tabContents = tabsContainer.querySelectorAll(".fdx-tab-content");

      tabNavItems.forEach((item, index) => {
        item.addEventListener("click", () => {
          // Remove active class from all nav items and contents
          tabNavItems.forEach((nav) => nav.classList.remove("active"));
          tabContents.forEach((content) => content.classList.remove("active"));

          // Add active class to clicked nav item and corresponding content
          item.classList.add("active");
          tabContents[index].classList.add("active");
        });

        // Activate the first tab by default if none are active
        if (index === 0 && !tabsContainer.querySelector(".fdx-tab-nav-item.active")) {
          item.classList.add("active");
          tabContents[index].classList.add("active");
        }
      });
    });
  });
})();
