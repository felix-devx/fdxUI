(function () {
  const styles = `
    :root {
      --fdx-btn-animation-speed: 0.5s;
      --fdx-btn-radius: 9999px; /* Pill shape */
      --fdx-btn-font-size: 1rem;
      --fdx-btn-padding-y: 0.6rem;
      --fdx-btn-padding-x: 1.2rem;
    }

    .fdx-btn {
      position: relative;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--fdx-btn-padding-y) var(--fdx-btn-padding-x);
      border-radius: var(--fdx-btn-radius);
      font-size: var(--fdx-btn-font-size);
      font-family: system-ui, sans-serif;
      cursor: pointer;
      border: 1px solid transparent;
      background: var(--fdx-color-primary-light); /* Default background for buttons */
      color: white;
      transition: color 0.3s ease;
      z-index: 0;
    }

    .fdx-btn > * {
      position: relative;
      z-index: 2;
    }



    .fdx-btn-primary {
      background: var(--fdx-color-primary-light); /* Lighter shade */
      border-color: var(--fdx-color-primary, #4f46e5); /* Actual primary color border */
      color: white;
    }

    .fdx-btn-primary::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%; /* Start off-screen */
      width: 100%;
      height: 100%;
      background: var(--fdx-color-primary, #4f46e5); /* The sweeping color */
      border-radius: inherit; /* Inherit button's border-radius for pill shape */
      transition: left var(--fdx-btn-animation-speed) ease-in-out;
      z-index: 1;
    }

    .fdx-btn-primary:hover::before {
      left: 0; /* Sweep across to cover */
    }

    .fdx-btn-primary:hover {
      color: white; /* Keep text white on hover */
    }

    .fdx-btn-outline {
      background: transparent;
      border-color: var(--fdx-color-primary);
      color: var(--fdx-color-primary);
    }

    .fdx-btn-outline:hover {
      background: var(--fdx-color-primary);
      color: white;
    }

    .fdx-btn-ghost {
      background: transparent;
      color: var(--fdx-color-primary);
    }

    .fdx-btn-ghost:hover {
      background: rgba(79, 70, 229, 0.05);
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
})();
