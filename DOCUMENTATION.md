# 📚 Developer Documentation

## 🧝🏾‍♂️ Frida Svanberg – Front-End Developer (Level 7)

This document provides an in-depth look at the architecture, accessibility considerations, and future development plans for this Dungeons & Dragons–inspired portfolio CV.

---

## 🏗️ Project Structure

```bash
src/
├── assets/ # Images, icons, and other static assets
├── components/ # Reusable React components
│ ├── Header.tsx
│ ├── Traits.tsx
│ ├── Proficiencies.tsx
│ ├── CampaignLog.tsx
│ ├── Contact.tsx
│ └── DownloadCV.tsx
├── App.tsx # Main application component
├── main.tsx # Entry point for the React application
├── index.css # Global styles and Tailwind CSS directives
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.ts # Vite configuration
```

---

## ⚙️ Technologies Used

- **React** with **TypeScript** for building user interfaces
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development and build tooling
- **React Icons** for scalable vector icons

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

To update the CV or personal letter:

1. Replace the existing PDF files in the `public/` directory:

- `FridaSvanbergCV.pdf`

- `FridaSvanbergPersonalLetter.pdf`

2. Ensure the `DownloadCV.tsx` component references the correct filenames.

---

## 🚀 Development Commands

```bash
# Install dependencies

npm install

# Start development server

npm run dev

# Build for production

npm run build

# Preview the production build

npm run preview
```

---

## 🔮 Future Enhancements

- Interactive Features: Implement components like a D20 dice roller or theme toggles to enhance user engagement.

- Mobile-Specific Layouts: Develop distinct layouts for mobile devices to improve usability.

- Character Sheet Styling: Redesign the layout to mimic a traditional D&D character sheet, enhancing the thematic experience.

- Project Showcase: Introduce a "Spellbook" section to highlight personal projects and achievements.

---

## 📬 Contact Information

- 📧 Email: [svanberg92@gmail.com](mailto:svanberg92@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/fridasvanberg](https://www.linkedin.com/in/fridasvanberg)
- 🐙 GitHub: [github.com/FridaSvanberg](https://github.com/FridaSvanberg)”

---

Feel free to reach out for collaboration, feedback, or inquiries!
