import type React from 'react';
import type { IconType } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
} from 'react-icons/si';

type TechStat = {
  icon: IconType;
  iconProps?: React.ComponentProps<IconType>;
  label: string;
  value: string;
  desc: string;
};

const techStats: TechStat[] = [
  {
    icon: SiReact,
    iconProps: {
      title: 'React',
      'aria-label': 'React',
    },
    label: 'React',
    value: '19',
    desc: 'Hooks master, component wizard, SSR ready',
  },

  {
    icon: SiTypescript,
    iconProps: {
      title: 'TypeScript',
      'aria-label': 'TypeScript',
    },
    label: 'TS',
    value: '5',
    desc: 'Typed magic, safer code, generics galore',
  },
  {
    icon: SiTailwindcss,
    iconProps: {
      title: 'Tailwind',
      'aria-label': 'Tailwind',
    },
    label: 'TS',
    value: '4',
    desc: 'Utility spells for rapid UI design',
  },
  {
    icon: SiNodedotjs,
    iconProps: {
      title: 'Node.js',
      'aria-label': 'Node.js',
    },
    label: 'Node',
    value: '20',
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
      className="text-l font-bold text-yellow-400 mb-2 items-center gap-2"
    >
      Tech Ability Scores
    </h2>
    <ul className="flex flex-col gap-3">
      {techStats.map(({ icon: Icon, iconProps, label, value, desc }) => (
        <li
          key={label}
          className="flex items-center gap-3 bg-zinc-900 rounded-lg px-3 py-2"
        >
          <span className="text-2xl text-violet-300">
            <Icon {...(iconProps ?? {})} />
          </span>
          <div className="flex-1">
            <div className="flex gap-2 items-center">
              <span className="font-bold text-yellow-200">{label}</span>
              <span className="ml-auto text-green-400 font-bold">v{value}</span>
            </div>
            <div className="text-zinc-400 text-xs">{desc}</div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default TechStatBlock;
