import type { IconType } from 'react-icons';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiGit,
  SiJirasoftware,
  SiTrello,
  SiFigma,
  SiSlack,
  SiOpenai,
  SiIonic,
  SiIpfs,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

type TechStack = {
  icon: IconType;
  iconProps?: React.ComponentProps<IconType>;
  label: string;
};

const coreTech: TechStack[] = [
  {
    icon: SiHtml5,
    iconProps: {
      title: 'HTML5',
      className: 'text-orange-500',
      'aria-label': 'HTML5',
    },
    label: 'HTML5',
  },
  {
    icon: SiCss3,
    iconProps: {
      title: 'CSS3',
      className: 'text-blue-500',
      'aria-label': 'CSS3',
    },
    label: 'CSS3',
  },
  {
    icon: SiJavascript,
    iconProps: {
      title: 'JavaScript',
      className: 'text-yellow-400',
      'aria-label': 'JavaScript',
    },
    label: 'JavaScript',
  },
  {
    icon: SiTypescript,
    iconProps: {
      title: 'TypeScript',
      className: 'text-blue-400',
      'aria-label': 'TypeScript',
    },
    label: 'TypeScript',
  },
  {
    icon: SiReact,
    iconProps: {
      title: 'React',
      className: 'text-cyan-300',
      'aria-label': 'React',
    },
    label: 'React',
  },
  {
    icon: SiAngular,
    iconProps: {
      title: 'Angular',
      className: 'text-red-600',
      'aria-label': 'Angular',
    },
    label: 'Angular',
  },
  {
    icon: SiTailwindcss,
    iconProps: {
      title: 'Tailwind CSS',
      className: 'text-teal-300',
      'aria-label': 'Tailwind CSS',
    },
    label: 'Tailwind CSS',
  },
];

const toolTech: TechStack[] = [
  {
    icon: SiGit,
    iconProps: {
      title: 'Git',
      className: 'text-red-500',
      'aria-label': 'Git',
    },
    label: 'Git',
  },
  {
    icon: SiJirasoftware,
    iconProps: {
      title: 'Jira',
      className: 'text-blue-400',
      'aria-label': 'Jira',
    },
    label: 'Jira',
  },
  {
    icon: SiTrello,
    iconProps: {
      title: 'Trello',
      className: 'text-blue-500',
      'aria-label': 'Trello',
    },
    label: 'Trello',
  },
  {
    icon: SiFigma,
    iconProps: {
      title: 'Figma',
      className: 'text-pink-500',
      'aria-label': 'Figma',
    },
    label: 'Figma',
  },
  {
    icon: SiSlack,
    iconProps: {
      title: 'Slack',
      className: 'text-purple-400',
      'aria-label': 'Slack',
    },
    label: 'Slack',
  },
  {
    icon: VscVscode,
    iconProps: {
      title: 'VS Code',
      className: 'text-blue-300',
      'aria-label': 'VS Code',
    },
    label: 'VS Code',
  },
  {
    icon: SiIonic,
    iconProps: {
      title: 'Ionic',
      className: 'text-blue-400',
      'aria-label': 'Ionic',
    },
    label: 'Ionic',
  },
  {
    icon: SiOpenai,
    iconProps: {
      title: 'OpenAI / ChatGPT',
      className: 'text-blue-400',
      'aria-label': 'OpenAI / ChatGPT',
    },
    label: 'OpenAI / ChatGPT',
  },
  {
    icon: SiIpfs,
    iconProps: {
      title: 'IPFS / IPNS',
      className: 'text-teal-400',
      'aria-label': 'IPFS / IPNS',
    },
    label: 'IPFS / IPNS',
  },
];

const Proficiencies = () => {
  return (
    <section
      id="skills"
      aria-labelledby="proficiencies-heading"
      className="mt-8 bg-zinc-800 rounded-xl p-4 shadow flex flex-col gap-2"
    >
      <h2
        id="proficiencies-heading"
        className="text-2xl font-bold text-yellow-300 mb-2 items-center gap-2"
      >
        Proficiencies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 text-sm">
        <div>
          <h3 className="text-lg font-semibold text-yellow-200 mb-3 items-center gap-2">
            Core Tech
          </h3>
          <ul className="flex flex-wrap gap-4 items-center justify-center">
            {coreTech.map(({ icon: Icon, iconProps, label }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-1 min-w-[56px]"
              >
                <Icon size={32} role="img" {...(iconProps ?? {})} />
                <span className="text-xs mt-1">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-yellow-200 mb-3 items-center gap-2">
            Workflow & Tools
          </h3>
          <ul className="flex flex-wrap gap-4 items-center justify-center">
            {toolTech.map(({ icon: Icon, iconProps, label }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-1 min-w-[56px]"
              >
                <Icon size={32} role="img" {...(iconProps ?? {})} />
                <span className="text-xs mt-1">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Proficiencies;
