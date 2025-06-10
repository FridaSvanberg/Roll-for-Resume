import { MdEmail } from 'react-icons/md';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { GiDiceTwentyFacesTwenty } from 'react-icons/gi';

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="my-8 bg-zinc-800 rounded-xl p-4 shadow flex flex-col items-center"
    >
      <h2
        id="contact-heading"
        className="text-xl font-bold text-yellow-300 mb-2 flex items-center gap-2"
      >
        <span role="img" aria-label="Envelope">
          📨
        </span>
        Use the Sending Spell
      </h2>
      <p className="text-zinc-100 mb-4">
        Whether it's a quest, collab, or just a hello:
      </p>
      <div className="relative flex w-full max-w-lg mx-auto">
        <ul className="space-y-3 w-full max-w-xs text-base z-10">
          <li className="flex items-center gap-2">
            <MdEmail className="text-yellow-400" size={24} aria-label="Email" />
            <a
              href="mailto:svanberg92@gmail.com"
              className="underline text-blue-300 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-1 transition"
            >
              Email Me
            </a>
          </li>
          <li className="flex items-center gap-2">
            <SiLinkedin
              className="text-yellow-400"
              size={22}
              aria-label="LinkedIn"
            />
            <a
              href="https://www.linkedin.com/in/fridasvanberg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-300 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-1 transition"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-2">
            <SiGithub
              className="text-yellow-400"
              size={22}
              aria-label="GitHub"
            />
            <a
              href="https://github.com/FridaSvanberg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-300 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-1 transition"
            >
              GitHub
            </a>
          </li>
        </ul>

        <GiDiceTwentyFacesTwenty
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-yellow-300 opacity-10 pointer-events-none"
          size={140}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Contact;
