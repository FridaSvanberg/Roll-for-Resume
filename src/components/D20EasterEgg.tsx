import { useState } from 'react';
import { GiDiceTwentyFacesTwenty } from 'react-icons/gi';

const bardFacts = [
  'Can turn any bug into a feature—with style.',
  'Rolls high on creativity checks.',
  'Once debugged a problem with just a song.',
  'Always remembers to bring snacks to standups.',
  "Casts 'Bardic Inspiration' on their whole team.",
  'Proficient in coffee brewing and code reviewing.',
];

const D20EasterEgg = () => {
  const [fact, setFact] = useState('Click the d20 for a random bard fact!');

  function rollD20() {
    const roll = Math.floor(Math.random() * bardFacts.length);
    setFact(bardFacts[roll]);
  }

  return (
    <section
      className="mt-4 flex flex-col items-center gap-2"
      aria-labelledby="d20-heading"
    >
      <h2 id="d20-heading" className="sr-only">
        Bardic Fact Roller
      </h2>
      <button
        onClick={rollD20}
        aria-label="Roll for Bardic Fact"
        className="text-3xl text-yellow-400 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-violet-300 rounded-full"
        type="button"
      >
        <GiDiceTwentyFacesTwenty aria-hidden />
      </button>
      <span className="text-xs text-violet-300 text-center" aria-live="polite">
        {fact}
      </span>
    </section>
  );
};

export default D20EasterEgg;
