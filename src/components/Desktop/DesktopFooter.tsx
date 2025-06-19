import AccessibilityModal from '../AccessibilityModal';

const DesktopFooter = () => {
  return (
    <footer className="mt-12 text-center text-sm text-gray-500 pb-6 px-4 hidden md:block">
      <p className="sr-only">
        Thanks for reading! You’ve just completed Frida’s interactive CV
        campaign. May your quests be full of clean code and good teammates.
      </p>

      <p>
        © {new Date().getFullYear()} Frida Svanberg – built with 🧠, 🎨 & 💻
      </p>
      <p>
        Coded in <span className="text-yellow-300">React + Tailwind</span>,
        themed with D&D, and focused on accessibility ♿
        <span className="ml-2">
          <AccessibilityModal />
        </span>
      </p>
      <p>
        Hosted on{' '}
        <a
          href="https://rollforresume.xyz"
          className="underline hover:text-yellow-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Pages
        </a>{' '}
        •{' '}
        <a
          href="https://w3s.link/ipns/k51qzi5uqu5dhzw7nlhmsx96eiim9betbxncsc2hileogg8p884cu7lo53t2ev"
          className="underline hover:text-yellow-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          IPNS mirror also available
        </a>
      </p>
      <p className="italic text-yellow-300 mt-2">
        This resume rolled a nat 20 on performance 🎲
      </p>
    </footer>
  );
};

export default DesktopFooter;
