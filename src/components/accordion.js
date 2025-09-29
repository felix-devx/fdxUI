(function () {
  const styles = `
    :root {
      --fdx-accordion-border-color: #d1d5db;
      --fdx-accordion-header-bg: #f9fafb;
      --fdx-accordion-header-hover-bg: #f3f4f6;
      --fdx-accordion-content-bg: #ffffff;
      --fdx-accordion-padding-y: 1rem;
      --fdx-accordion-padding-x: 1.25rem;
      --fdx-accordion-radius: 0.375rem;
    }

    .fdx-accordion {
      border: 1px solid var(--fdx-accordion-border-color);
      border-radius: var(--fdx-accordion-radius);
      overflow: hidden;
      margin-bottom: 1rem; /* Spacing between accordions */
    }

    .fdx-accordion-item:not(:last-child) {
      border-bottom: 1px solid var(--fdx-accordion-border-color);
    }

    .fdx-accordion-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--fdx-accordion-padding-y) var(--fdx-accordion-padding-x);
      background-color: var(--fdx-accordion-header-bg);
      cursor: pointer;
      font-weight: 500;
      color: #374151; /* Default text color */
      transition: background-color 0.2s ease;
    }

    .fdx-accordion-header:hover {
      background-color: var(--fdx-accordion-header-hover-bg);
    }

    .fdx-accordion-header.active {
      background-color: var(--fdx-accordion-content-bg);
      color: #4f46e5; /* Active color */
    }

    .fdx-accordion-icon {
      margin-left: 1rem;
      transition: transform 0.2s ease;
    }

    .fdx-accordion-header.active .fdx-accordion-icon {
      transform: rotate(180deg);
    }

    .fdx-accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out, padding 0.3s ease-out;
      background-color: var(--fdx-accordion-content-bg);
      padding: 0 var(--fdx-accordion-padding-x); /* Horizontal padding always */
    }

    .fdx-accordion-content-inner {
      padding-top: 0; /* Will be set dynamically when open */
      padding-bottom: 0; /* Will be set dynamically when open */
    }

    .fdx-accordion-item.active .fdx-accordion-content {
      max-height: 500px; /* Arbitrary large value to allow content to expand */
      padding-top: var(--fdx-accordion-padding-y);
      padding-bottom: var(--fdx-accordion-padding-y);
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fdx-accordion-header").forEach((header) => {
      header.addEventListener("click", () => {
        const item = header.closest(".fdx-accordion-item");
        if (!item) return;

        const content = item.querySelector(".fdx-accordion-content");
        const isActive = item.classList.contains("active");

        // Close all other accordions in the same group (optional, but common behavior)
        const parentAccordion = header.closest(".fdx-accordion");
        if (parentAccordion) {
          parentAccordion.querySelectorAll(".fdx-accordion-item.active").forEach((activeItem) => {
            if (activeItem !== item) {
              activeItem.classList.remove("active");
              activeItem.querySelector(".fdx-accordion-content").style.maxHeight = "0";
              activeItem.querySelector(".fdx-accordion-content").style.paddingTop = "0";
              activeItem.querySelector(".fdx-accordion-content").style.paddingBottom = "0";
              activeItem.querySelector(".fdx-accordion-header").classList.remove("active");
            }
          });
        }

        if (isActive) {
          item.classList.remove("active");
          content.style.maxHeight = "0";
          content.style.paddingTop = "0";
          content.style.paddingBottom = "0";
          header.classList.remove("active");
        } else {
          item.classList.add("active");
          // Set max-height to a value large enough to fit content
          // In a real scenario, you might calculate this dynamically for smoother animation
          content.style.maxHeight = "500px"; // Example large value
          content.style.paddingTop = "var(--fdx-accordion-padding-y)";
          content.style.paddingBottom = "var(--fdx-accordion-padding-y)";
          header.classList.add("active");
        }
      });
    });
  });
})();
