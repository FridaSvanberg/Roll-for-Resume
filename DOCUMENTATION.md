# 📚 Developer Documentation

## 🧝🏾‍♂️ Frida Svanberg – Front-End Developer (Level 7)

This document provides an in-depth look at the architecture, accessibility considerations, and future development plans for this Dungeons & Dragons–inspired portfolio CV. It's built with React, TypeScript, Tailwind CSS, and hosted on the decentralized web.

---

## 🏗️ Project Structure

```bash
my-dd-cv/
├── src/ # Main source code
│   ├── assets/ # Images, icons, and static files
│   ├── components/ # Reusable React components
│   ├── App.tsx # Main app layout
│   ├── main.tsx # React app entry point
│   └── index.css # Global styles & Tailwind config
│
├── publish/ # Deployment and IPNS tools (not required in production build)
│   ├── deploy.js # Upload and publish to IPFS/IPNS
│   ├── update-cid.js # Auto-update README with latest CID
│   ├── ipns-key # IPNS signing key (keep private!)
│   └── latest-cid.txt # Stores last deployed CID
│
├── README.md # Project overview and usage
├── package.json # Project metadata and scripts
├── vite.config.ts # Vite bundler config
├── tailwind.config.ts # Tailwind CSS config
└── .gitignore # Files and folders to ignore in git
```

---

## ⚙️ Technologies Used

- **React** with **TypeScript** for building user interfaces
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development and build tooling
- **React Icons** for scalable vector icons
- **Web3.Storage** (now rebranded as **Storacha**) for decentralized hosting

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

## 🚀 Development Commands

Deployment is handled using IPFS & IPNS:

- Run node `publish/deploy.js` to:

- Build the project

- Upload to Web3.Storage

- Update your IPNS record

- Auto-commit with the new CID

IPNS URL format:
`https://w3s.link/ipns/<your-name>`

CID snapshot format:
`https://<cid>.ipfs.w3s.link/`
These scripts are optional and intended for developers hosting the site via IPFS.

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

- Mobile-Specific Layouts: Develop distinct layouts for mobile devices to improve usability.

- Character Sheet Styling: Redesign the layout to mimic a traditional D&D character sheet, enhancing the thematic experience.

- Project Showcase: Introduce a "Spellbook" section to highlight personal projects and achievements.

- Add unit tests with React Testing Library.

---

## 📬 Contact Information

- 📧 Email: [svanberg92@gmail.com](mailto:svanberg92@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/fridasvanberg](https://www.linkedin.com/in/fridasvanberg)
- 🐙 GitHub: [github.com/FridaSvanberg](https://github.com/FridaSvanberg)”

---

Feel free to reach out for collaboration, feedback, or inquiries!
