(function () {
  const styles = `
    :root {
      /* General Button Variables */
      --fdx-btn-radius: 9999px; /* Pill shape */
      --fdx-btn-font-size: 1rem;
      --fdx-btn-padding-y: 0.6rem;
      --fdx-btn-padding-x: 1.2rem;

      /* Primary Color Reference - Assuming it's defined in var.js or a default */
      /* If --fdx-color-primary is not globally defined, it should be set here or in var.js */
      --fdx-color-primary: #4f46e5;
      --fdx-color-primary-light-hover: hsl(244, 78%, 70%); /* A slightly lighter shade of #4f46e5 */
    }

    .fdx-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--fdx-btn-padding-y) var(--fdx-btn-padding-x);
      border-radius: var(--fdx-btn-radius);
      font-size: var(--fdx-btn-font-size);
      font-family: system-ui, sans-serif;
      cursor: pointer;
      border: 1px solid transparent; /* Default transparent border */
      transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
      text-decoration: none; /* Ensure no underline for anchor buttons */
    }

    /* Primary Button */
    .fdx-btn-primary {
      background-color: var(--fdx-color-primary);
      border-color: var(--fdx-color-primary);
      color: white; /* Text is always white for primary button */
    }

    .fdx-btn-primary:hover {
      background-color: var(--fdx-color-primary-light-hover);
      border-color: var(--fdx-color-primary-light-hover);
      color: white; /* Ensure text remains white on hover */
    }

    /* Outline Button */
    .fdx-btn-outline {
      background: transparent;
      border-color: var(--fdx-color-primary);
      color: var(--fdx-color-primary);
    }

    .fdx-btn-outline:hover {
      background: var(--fdx-color-primary);
      color: white;
    }

    /* Ghost Button */
    .fdx-btn-ghost {
      background: transparent;
      border-color: transparent; /* No border for ghost button */
      color: var(--fdx-color-primary);
    }

    .fdx-btn-ghost:hover {
      background: rgba(79, 70, 229, 0.05); /* A very light, transparent hover effect */
      border-color: transparent;
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
})();
