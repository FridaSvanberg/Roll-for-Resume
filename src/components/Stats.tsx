const stats = [
  {
    icon: '🧠',
    label: 'INT',
    title: 'Tech Knowledge',
    bonus: '+4',
    desc: 'React, Tailwind, JS, Next.js',
  },
  {
    icon: '🎨',
    label: 'CHA',
    title: 'Design Sense',
    bonus: '+3',
    desc: 'Accessible, clean, user-focused UI',
  },
  {
    icon: '🤝',
    label: 'WIS',
    title: 'Team Spirit',
    bonus: '+5',
    desc: 'Communicative, calm, supportive',
  },
  {
    icon: '💻',
    label: 'DEX',
    title: 'Frontend Skills',
    bonus: '+4',
    desc: 'Fast builds, mobile-ready',
  },
  {
    icon: '💪',
    label: 'CON',
    title: 'Resilience',
    bonus: '+4',
    desc: 'Handles pressure, adapts quickly',
  },
];

const Stats = () => (
  <section
    aria-labelledby="stats-heading"
    className="bg-zinc-800 rounded-xl p-4 my-4 shadow"
  >
    <h2
      id="stats-heading"
      className="text-xl font-bold text-yellow-300 mb-2 items-center gap-2"
    >
      Stats
    </h2>
    <ul className="flex flex-col gap-3">
      {stats.map((stat) => (
        <li
          key={stat.label}
          className="flex items-center gap-4 bg-zinc-900 rounded-lg px-3 py-2"
        >
          <span className="text-2xl" role="img" aria-label={stat.title}>
            {stat.icon}
          </span>
          <div className="flex-1">
            <div className="flex gap-2 items-center">
              <span className="font-bold text-yellow-200">{stat.label}</span>
              <span className="text-sm text-zinc-300">{stat.title}</span>
              <span className="ml-auto text-green-400 font-bold">
                {stat.bonus}
              </span>
            </div>
            <div className="text-zinc-400 text-xs">{stat.desc}</div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Stats;
