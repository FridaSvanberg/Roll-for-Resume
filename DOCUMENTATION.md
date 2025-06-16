# 📚 Developer Documentation

## 🧝🏾‍♂️ Frida Svanberg – Front-End Developer (Level 7)

This document provides an in-depth look at the architecture, accessibility considerations, and future development plans for this Dungeons & Dragons–inspired portfolio CV. It's built with React, TypeScript, Tailwind CSS, and hosted on the decentralized web.

---

## 🏗️ Project Structure

```bash
rollforresume/
├── src/               # Main source code
│   ├── assets/        # Images, icons, and static files
│   ├── components/    # Reusable React components
│   ├── App.tsx        # Main app layout
│   ├── main.tsx       # React app entry point
│   └── index.css      # Global styles & Tailwind config
│
├── public/            # Public files like CV PDFs and favicons
│   └── FridaSvanbergCV.pdf
│   └── FridaSvanbergCoverLetter.pdf
│
├── README.md          # Project overview
├── vite.config.ts     # Vite bundler config
├── tailwind.config.ts # Tailwind CSS config
└── .gitignore         # Git exclusions
```

---

## ⚙️ Technologies Used

- **React** with **TypeScript** for building user interfaces
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development and build tooling
- **React Icons** for scalable vector icons
- **GitHub Pages** for hosting
- **Web3.Storage/Storacha + IPNS**) (optional mirror, not primary host)

---

## ♿ Accessibility Features

- Semantic HTML elements (`<header>`, `<main>`, `<section>`, `<footer>`) for meaningful structure
- ARIA attributes (`aria-labelledby`, `aria-label`) to enhance screen reader support
- Keyboard navigable components with visible focus indicators
- Sufficient color contrast for readability

---

## 🖨️ Print Optimization

Custom print styles are defined in `index.css` to ensure the CV is printer-friendly:

```css
@media print {
  body {
    background: #fff;
    color: #000;
  }

  .no-print {
    display: none;
  }

  a::after {
    content: ' (' attr(href) ')';
  }
}
```

---

## 📄 Updating Downloadable Documents

To update the CV or cover letter:

1. Replace the existing PDF files in the `public/` directory:

- `FridaSvanbergCV.pdf`

- `FridaSvanbergCoverLetter.pdf`

2. Ensure the `DownloadCV.tsx` component references the correct filenames.

---

## 🧠 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production version
npm run build

# Preview production locally
npm run preview
```

---

## 🔮 Future Enhancements

- Interactive Features: Implement components like a D20 dice roller or theme toggles to enhance user engagement.

- Character Sheet Styling: Redesign the layout to mimic a traditional D&D character sheet, enhancing the thematic experience.

- Project Showcase: Introduce a "Spellbook" section to highlight personal projects and achievements.

- Add unit tests with React Testing Library.

- Layout experiment: mimic a character sheet

---

## 📬 Contact Information

- 📧 Email: [svanberg92@gmail.com](mailto:svanberg92@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/frida-svanberg](https://www.linkedin.com/in/frida-svanberg)
- 🐙 GitHub: [github.com/FridaSvanberg](https://github.com/FridaSvanberg)”

---

Feel free to reach out for collaboration, feedback, or inquiries!
