import { MdEmail } from 'react-icons/md';
import { SiLinkedin, SiGithub } from 'react-icons/si';

import FridaSvanberg from '../assets/FridaSvanberg.jpeg';

const socials = [
  {
    href: 'mailto:frida@example.com',
    icon: <MdEmail />,
    label: 'Email Frida',
  },
  {
    href: 'https://www.linkedin.com/in/frida-svanberg/',
    icon: <SiLinkedin />,
    label: "Frida's LinkedIn",
  },
  {
    href: 'https://github.com/FridaSvanberg',
    icon: <SiGithub />,
    label: "Frida's GitHub",
  },
];

const stats = [
  { label: 'React', value: '19' },
  { label: 'TS', value: '5' },
  { label: 'Tailwind', value: '4' },
  { label: 'Node', value: '20' },
];

const DesktopProfileSidebar = () => (
  <div className="hidden md:flex flex-col items-center bg-zinc-900 rounded-2xl shadow-2xl p-8 border-4 border-violet-600 gap-5 w-full">
    <img
      src={FridaSvanberg}
      alt="Frida Svanberg"
      className="w-32 h-32 rounded-full border-4 border-violet-600 shadow-lg"
    />
    <h1 className="text-3xl font-extrabold tracking-tight text-center text-yellow-300">
      Frida Svanberg
    </h1>
    <p className="text-lg font-medium text-violet-200 text-center">
      Frontend Bard
    </p>
    <p className="text-base text-zinc-300 text-center">
      UX Ranger - Team Bard - Neurodivergent problem-solver
      <br />
      <span className="text-xs text-zinc-400">Stockholm, Sweden</span>
    </p>
    <a
      href="FridaSvanbergCV.pdf"
      download="FridaSvanberg_CV.pdf"
      className="mt-2 px-6 py-3 rounded-full bg-violet-600 text-white font-bold shadow hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-300 transition text-lg"
    >
      Download CV
    </a>

    <div className="w-full mt-6 bg-zinc-800 rounded-xl p-4 text-center border border-violet-900">
      <p className="text-sm text-yellow-200 font-bold mb-2">
        Tech Ability Scores
      </p>
      <div className="grid grid-cols-2 gap-2 text-xs text-violet-200 font-mono">
        {stats.map((stat) => (
          <span key={stat.label}>
            <span className="font-bold text-yellow-300">{stat.label}:</span>{' '}
            {stat.value}
          </span>
        ))}
      </div>
    </div>
    <ul className="flex gap-4 mt-6" aria-label="Social links">
      {socials.map(({ href, icon, label }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-violet-300 hover:text-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition text-2xl"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
    <p className="mt-4 italic text-xs text-violet-400">"Roll with it!"</p>
  </div>
);

export default DesktopProfileSidebar;
