const MobileHeader = () => {
  return (
    <header
      className="flex flex-col items-center justify-center py-8 px-4 bg-zinc-900 text-white gap-2"
      role="banner"
    >
      {/* Optional profile image */}
      {/* <img src="/profile.jpg" alt="Frida Svanberg" className="w-24 h-24 rounded-full border-4 border-violet-600 mb-3" /> */}

      <h1 className="text-3xl font-extrabold tracking-tight text-center">
        Frida Svanberg
      </h1>
      <p className="text-lg font-medium text-violet-200 text-center">
        Frontend Bard
      </p>
      <p className="text-base text-zinc-300 text-center">
        UX Ranger • Team Bard • Neurodivergent problem-solver
        <br />
        <span className="text-xs text-zinc-400">Stockholm, Sweden</span>
      </p>
      <a
        href="FridaSvanbergCV.pdf"
        download="FridaSvanberg_CV.pdf"
        className="mt-4 px-6 py-3 rounded-full bg-violet-600 text-white font-bold shadow hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-300 transition text-lg"
      >
        Download CV
      </a>
    </header>
  );
};
export default MobileHeader;
