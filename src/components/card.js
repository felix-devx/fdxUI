// src/components/card.js

(function () {
  const styles = `
    :root {
      --fdx-card-padding: 1rem;
      --fdx-card-radius: 0.5rem;
      --fdx-card-bg: #ffffff;
      --fdx-card-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .fdx-card {
      background: var(--fdx-card-bg);
      border-radius: var(--fdx-card-radius);
      padding: var(--fdx-card-padding);
      box-shadow: var(--fdx-card-shadow);
      display: flex;
      flex-direction: column;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .fdx-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    }

    .fdx-card-header {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .fdx-card-body {
      flex: 1;
      margin-bottom: 0.5rem;
    }

    .fdx-card-footer {
      text-align: right;
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
})();
