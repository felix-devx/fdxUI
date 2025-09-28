// src/components/fab.js

(function () {
  const styles = `
    :root {
      --fdx-fab-size: 3.5rem;
      --fdx-fab-bg: #4f46e5;
      --fdx-fab-hover: rgba(255,255,255,0.3);
      --fdx-fab-bottom: 2rem;
      --fdx-fab-right: 2rem;
      --fdx-fab-shadow: 0 4px 6px rgba(0,0,0,0.2);
    }

    .fdx-fab {
      position: fixed;
      bottom: var(--fdx-fab-bottom);
      right: var(--fdx-fab-right);
      width: var(--fdx-fab-size);
      height: var(--fdx-fab-size);
      border-radius: 50%;
      background: var(--fdx-fab-bg);
      box-shadow: var(--fdx-fab-shadow);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
      outline: none;
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      z-index: 999;
    }

    .fdx-fab:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 10px rgba(0,0,0,0.25);
    }

    /* Hover Circle Effect */
    .fdx-fab::before {
      content: "";
      position: absolute;
      width: calc(var(--fdx-fab-size) * 1.2);
      height: calc(var(--fdx-fab-size) * 1.2);
      background: var(--fdx-fab-hover);
      border-radius: 50%;
      top: 50%;
      left: -150%;
      transform: translateY(-50%);
      transition: left 0.4s ease-in-out;
      z-index: 1;
    }

    .fdx-fab:hover::before {
      left: 50%;
    }

    .fdx-fab > * {
      position: relative;
      z-index: 2;
      color: white;
      font-size: 1.5rem;
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
})();
