const MobileNav = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 w-full bg-zinc-900 border-t border-violet-700 flex justify-around items-center py-2 z-50 md:hidden"
      aria-label="Mobile Navigation"
    >
      <a
        href="#about"
        className="text-violet-300 px-3 py-1 text-lg font-bold rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
      >
        About
      </a>
      <a
        href="#skills"
        className="text-violet-300 px-3 py-1 text-lg font-bold rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
      >
        Skills
      </a>
      <a
        href="#experience"
        className="text-violet-300 px-3 py-1 text-lg font-bold rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
      >
        Experience
      </a>
      <a
        href="#contact"
        className="text-violet-300 px-3 py-1 text-lg font-bold rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
      >
        Contact
      </a>
    </nav>
  );
};

export default MobileNav;
