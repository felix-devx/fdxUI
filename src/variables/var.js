// src/components/variables.js
(function () {
  const styles = `
    :root {
      --fdx-color-black: #000000;
      --fdx-color-gray-dark: #333333;
      --fdx-color-gray: #666666;
      --fdx-color-gray-light: #999999;
      --fdx-color-gray-lighter: #cccccc;
      --fdx-color-white: #ffffff;

      --fdx-color-primary: #4f46e5;
      --fdx-color-primary-light: #6D63FF; /* A solid, lighter shade of primary */

      --fdx-bg-primary: var(--fdx-color-gray-dark);
      --fdx-bg-secondary: var(--fdx-color-gray);
      --fdx-bg-accent: var(--fdx-color-gray-light);
      --fdx-bg-surface: var(--fdx-color-white);
      --fdx-bg-overlay: rgba(0, 0, 0, 0.5);

      --fdx-text-primary: var(--fdx-color-black);
      --fdx-text-secondary: var(--fdx-color-gray-dark);
      --fdx-text-muted: var(--fdx-color-gray);
      --fdx-text-inverse: var(--fdx-color-white);

      --fdx-border-light: var(--fdx-color-gray-lighter);
      --fdx-border: var(--fdx-color-gray);
      --fdx-shadow-light: 0 2px 4px rgba(0,0,0,0.05);
      --fdx-shadow: 0 4px 6px rgba(0,0,0,0.1);

      --fdx-radius-sm: 0.25rem;
      --fdx-radius-md: 0.5rem;
      --fdx-radius-lg: 0.75rem;

      --fdx-font-sm: 0.875rem;
      --fdx-font-base: 1rem;
      --fdx-font-lg: 1.125rem;
      --fdx-font-xl: 1.25rem;

      --fdx-spacing-xs: 0.25rem;
      --fdx-spacing-sm: 0.5rem;
      --fdx-spacing-md: 1rem;
      --fdx-spacing-lg: 1.5rem;
      --fdx-spacing-xl: 2rem;
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
})();
