const Footer = () => {
  return (
    <footer className="mt-12 text-center text-sm text-gray-500 pb-6 px-4">
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
      </p>
    </footer>
  );
};

export default Footer;
