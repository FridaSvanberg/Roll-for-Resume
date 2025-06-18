import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
} from 'react-icons/si';

const stats = [
  {
    icon: <SiReact className="text-violet-300" aria-label="React" />,
    label: 'React',
    bonus: '19',
    desc: 'Hooks master, component wizard, SSR ready',
  },
  {
    icon: <SiTypescript className="text-violet-300" aria-label="TypeScript" />,
    label: 'TS',
    bonus: '5',
    desc: 'Typed magic, safer code, generics galore',
  },
  {
    icon: <SiTailwindcss className="text-violet-300" aria-label="Tailwind" />,
    label: 'Tailwind',
    bonus: '4',
    desc: 'Utility spells for rapid UI design',
  },
  {
    icon: <SiNodedotjs className="text-violet-300" aria-label="Node.js" />,
    label: 'Node',
    bonus: '20',
    desc: 'API spells, backend quests, npm bard',
  },
];

const TechStatBlock = () => (
  <section
    aria-labelledby="tech-stats-heading"
    className="w-full bg-zinc-800 rounded-xl p-4 mt-4 shadow border border-violet-900"
  >
    <h2
      id="tech-stats-heading"
      className="text-sm font-bold text-yellow-200 mb-2 flex items-center gap-2"
    >
      <span role="img" aria-label="Sparkles">
        ✨
      </span>{' '}
      Tech Ability Scores
    </h2>
    <ul className="flex flex-col gap-3">
      {stats.map((stat) => (
        <li
          key={stat.label}
          className="flex items-center gap-3 bg-zinc-900 rounded-lg px-3 py-2"
        >
          <span className="text-2xl" aria-label={stat.label}>
            {stat.icon}
          </span>
          <div className="flex-1">
            <div className="flex gap-2 items-center">
              <span className="font-bold text-yellow-200">{stat.label}</span>
              <span className="ml-auto text-green-400 font-bold">
                v{stat.bonus}
              </span>
            </div>
            <div className="text-zinc-400 text-xs">{stat.desc}</div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default TechStatBlock;
