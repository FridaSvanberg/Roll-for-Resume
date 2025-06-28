import type React from 'react';
import type { IconType } from 'react-icons';
import { MdEmail } from 'react-icons/md';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import FridaSvanberg from '../assets/FridaSvanberg.jpeg';

type SocialLink = {
  href: string;
  icon: IconType;
  iconProps?: React.ComponentProps<IconType>;
  label: string;
};
const socials: SocialLink[] = [
  {
    icon: MdEmail,
    iconProps: {
      title: 'Email Frida',
    },
    href: 'mailto:frida@example.com',
    label: 'Email Frida',
  },
  {
    icon: SiLinkedin,
    iconProps: {
      title: "Frida's LinkedIn",
    },
    href: 'https://www.linkedin.com/in/frida-svanberg/',
    label: "Frida's LinkedIn",
  },
  {
    icon: SiGithub,
    iconProps: {
      title: "Frida's GitHub",
    },
    href: 'https://github.com/FridaSvanberg',
    label: "Frida's GitHub",
  },
];

const ProfileCard = () => {
  return (
    <section
      aria-label="Profile"
      className="flex flex-col items-center w-full gap-2"
    >
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
        UX Ranger – Team Bard – Neurodivergent problem-solver
        <br />
        <span className="text-xs text-zinc-400">Stockholm, Sweden</span>
      </p>
      <a
        href="FridaSvanbergCV.pdf"
        download="Frida_Svanberg_CV.pdf"
        className="mt-2 px-6 py-3 rounded-full bg-violet-600 text-white font-bold shadow hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-300 transition text-lg"
      >
        Download CV
      </a>
      <ul className="flex gap-4 mt-2" aria-label="Social links">
        {socials.map(({ icon: Icon, iconProps, href, label }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-violet-300 hover:text-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition text-2xl"
            >
              <Icon
                {...(iconProps ?? {})}
                className="text-2xl"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ProfileCard;
