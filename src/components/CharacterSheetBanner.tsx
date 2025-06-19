const characterStats = [
  {
    icon: '🎤',
    label: 'Class',
    value: 'Front-End Developer',
    desc: 'Masters the keyboard as a wand—typing, tabbing, and refactoring spells.',
  },
  {
    icon: '🧑‍🎤',
    label: 'Race',
    value: 'Human (Neurodivergent)',
    desc: 'Sees the world from many creative angles.',
  },
  {
    icon: '⚡️',
    label: 'Alignment',
    value: 'Chaotic Good',
    desc: 'Fights for users, even if it bends the rules.',
  },
  {
    icon: '🧭',
    label: 'Background',
    value: 'Self-Taught Adventurer',
    desc: 'Learns by questing through docs and dungeons.',
  },
  {
    icon: '🛡️',
    label: 'Party Role',
    value: 'UX Paladin & Team Bard',
    desc: 'Vanquishes bugs, empowers the fellowship, and rolls nat 20s for teamwork.',
  },
];

const CharacterSheetBanner = () => (
  <section
    aria-labelledby="character-sheet-heading"
    className="bg-zinc-800 rounded-xl p-4 mb-8 shadow"
  >
    <h2
      id="character-sheet-heading"
      className="text-xl font-bold text-yellow-300 mb-4 flex items-center gap-2"
    >
      <span role="img" aria-label="Character Sheet">
        📜
      </span>
      Character Sheet
    </h2>
    <ul className="flex flex-col gap-3">
      {characterStats.map((stat) => (
        <li
          key={stat.label}
          className="flex items-start gap-4 bg-zinc-900 rounded-lg px-4 py-3"
        >
          <span className="text-2xl mt-1" role="img" aria-label={stat.label}>
            {stat.icon}
          </span>
          <div>
            <div className="flex gap-2 items-center">
              <span className="font-bold text-yellow-200">{stat.label}:</span>
              <span className="text-violet-200 text-sm">{stat.value}</span>
            </div>
            <div className="text-zinc-400 text-xs mt-1">{stat.desc}</div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default CharacterSheetBanner;
