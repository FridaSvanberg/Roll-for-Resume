const Header = () => {
  return (
    <header className="text-center py-6 space-y-1" role="banner">
      {/* <h1 className="text-3xl font-bold text-yellow-400">
        🧝🏾‍♂️ Frida Svanberg – Front-End Developer (Level 7)
      </h1> */}
      <h1 className="text-4xl font-extrabold text-yellow-300">
        Frida Svanberg
      </h1>
      <p className="text-xl text-yellow-300">Frontend Developer (Level 7)</p>
      <p className="text-gray-300" aria-label="Title subtitle">
        UX Ranger • Team Bard • Neurodivergent problem-solver
      </p>
    </header>
  );
};

export default Header;
