import { GiDiceTarget } from 'react-icons/gi';
const DesktopHeader = () => {
  return (
    <header
      className="text-center py-6 space-y-1 hidden md:block"
      role="banner"
      aria-labelledby="header-heading"
    >
      <h2
        id="header-heading"
        className="font-extrabold italic text-3xl md:text-4xl text-yellow-300 text-center mt-4 mb-8 drop-shadow-lg"
      >
        “Every code quest begins with a single keystroke.”
      </h2>
      <p className="text-yellow-300 text-center text-lg italic mb-8">
        - Some legendary dev, probably
      </p>
      <div className="flex items-center mb-3">
        <span className="flex-grow border-t border-yellow-400" />
        <span
          className="mx-2 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
          role="img"
          aria-label="d6 dice target icon"
        >
          <GiDiceTarget size={56} />
        </span>
        <span className="flex-grow border-t border-yellow-400" />
      </div>
    </header>
  );
};

export default DesktopHeader;
