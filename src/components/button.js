(function () {
  const styles = `
    :root {
      --fdx-btn-circle-size: 2.5rem;
      --fdx-btn-circle-color: rgba(255, 255, 255, 0.3);
      --fdx-btn-circle-speed: 0.5s;
      --fdx-btn-radius: 0.4rem;
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
      background: #4f46e5;
      color: white;
      transition: color 0.3s ease, background 0.3s ease;
      z-index: 0;
    }

    .fdx-btn > * {
      position: relative;
      z-index: 2;
    }

    .fdx-btn::before {
      content: "";
      position: absolute;
      width: var(--fdx-btn-circle-size);
      height: var(--fdx-btn-circle-size);
      background: var(--fdx-btn-circle-color);
      border-radius: 50%;
      top: 50%;
      left: calc(-1 * var(--fdx-btn-circle-size));
      transform: translateY(-50%);
      transition: left var(--fdx-btn-circle-speed) ease-in-out;
      z-index: 1;
    }

    .fdx-btn:hover::before {
      left: 100%;
    }

    .fdx-btn-primary {
      background: #4f46e5;
      border-color: #4f46e5;
      color: white;
    }

    .fdx-btn-primary:hover {
      color: #e0e7ff;
    }

    .fdx-btn-outline {
      background: transparent;
      border-color: #4f46e5;
      color: #4f46e5;
    }

    .fdx-btn-outline:hover {
      background: #4f46e5;
      color: white;
    }

    .fdx-btn-ghost {
      background: transparent;
      color: #4f46e5;
    }

    .fdx-btn-ghost:hover {
      background: rgba(79, 70, 229, 0.05);
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
})();
