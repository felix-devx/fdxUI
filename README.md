# fdxUI — Lightweight, Framework-Free UI Library

> Build beautiful, responsive interfaces with pure HTML, CSS, and JavaScript — no frameworks required.

**fdxUI** is a minimal, **drop-in UI library** designed for speed, simplicity, and accessibility. Just include a single <link> and <script>, and instantly get access to a set of well-crafted components and utilities — perfect for projects where you don’t want heavy frameworks like React or Vue.

---

## ✨ Features

- **Zero Dependencies** – Works with plain HTML, no build steps.
- **Accessible by Default** – Keyboard navigation and screen reader support baked in.
- **Lightweight** – Under **50KB** total for CSS + JS.
- **Customizable** – Theme with CSS variables for full design control.
- **Modular** – Use only the components you need.
- **Potato-PC Friendly** 🥔 – Optimized for performance, even on low-end hardware.

---

## 🚀 Quick Start

Include fdxUI in your project by adding the following to your <head>:

`html
<link rel="stylesheet" href="https://cdn.fdxui.com/fdxui.min.css">
<script src="https://cdn.fdxui.com/fdxui.min.js" defer></script>
`

Then use components directly in your HTML:

``html
<button class="fdx-btn fdx-btn-primary">Click Me</button>

<div class="fdx-card">
  <h3>Card Title</h3>
  <p>Simple, clean, and responsive.</p>
</div>
``

---

## 📦 Components

| Component     | Purpose                  |
|---------------|--------------------------|
| **Button**    | Core actions & variants |
| **Card**      | Layout + content blocks |
| **Navbar**    | Navigation structures   |
| **Modal**     | Dialogs & overlays      |
| **Dropdown**  | Menus & actions         |

> More coming soon: Tabs, Accordions, Toasts, Forms, and more!

---

## 🎨 Theming

fdxUI uses **CSS variables** for easy customization. For example:

``css
:root {
  --fdx-color-primary: #4f46e5;
  --fdx-color-secondary: #64748b;
  --fdx-color-bg: #ffffff;
  --fdx-color-text: #111827;
}
``

Change the variables to quickly re-theme your entire project.

---

## 💡 Why fdxUI?

Most UI libraries today assume you’re using a framework.  
**fdxUI** goes *back to basics*:

- Pure HTML, CSS, and JS.
- Easy to learn, easy to drop in.
- Ideal for static sites, prototypes, or projects where speed matters.

If you’ve ever wanted **Bootstrap-level simplicity** with **modern, lightweight styling**, fdxUI is for you.

---

## 📚 Documentation

For examples, playgrounds, and a full list of components, visit the (fdxUI Docs)(https://fdxui.com/docs).

---

## 📄 License

fdxUI is open source under the **MIT License**.  
Feel free to use it, modify it, and share it in your projects.

---

### Made with ❤️ by (Your Name)
