// src/components/modal.js

(function () {
  const styles = `
    :root {
      --fdx-modal-overlay: rgba(0,0,0,0.5);
      --fdx-modal-bg: #ffffff;
      --fdx-modal-radius: 0.5rem;
      --fdx-modal-width: 28rem;
      --fdx-modal-padding: 1.5rem;
      --fdx-modal-z: 10000;
    }

    .fdx-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: var(--fdx-modal-overlay);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      z-index: var(--fdx-modal-z);
    }

    .fdx-modal-overlay.show {
      opacity: 1;
      pointer-events: auto;
    }

    .fdx-modal {
      background: var(--fdx-modal-bg);
      border-radius: var(--fdx-modal-radius);
      width: var(--fdx-modal-width);
      max-width: 90%;
      padding: var(--fdx-modal-padding);
      transform: translateY(-20px);
      transition: transform 0.3s ease;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .fdx-modal-overlay.show .fdx-modal {
      transform: translateY(0);
    }

    .fdx-modal-header {
      font-weight: bold;
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }

    .fdx-modal-body {
      margin-bottom: 1rem;
    }

    .fdx-modal-footer {
      text-align: right;
    }

    .fdx-modal-close {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: transparent;
      border: none;
      font-size: 1.25rem;
      cursor: pointer;
    }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  // fdxUI modal namespace
  window.fdxUI = window.fdxUI || {};
  window.fdxUI.modal = {
    open: function (id) {
      const modal = document.getElementById(id);
      if (!modal) return;
      modal.classList.add("show");
    },
    close: function (id) {
      const modal = document.getElementById(id);
      if (!modal) return;
      modal.classList.remove("show");
    },
  };

  // Click outside to close
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("fdx-modal-overlay")) {
      e.target.classList.remove("show");
    }
    if (e.target.classList.contains("fdx-modal-close")) {
      e.target.closest(".fdx-modal-overlay").classList.remove("show");
    }
  });
})();
