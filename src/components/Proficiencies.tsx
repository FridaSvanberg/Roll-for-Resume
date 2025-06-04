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

const Proficiencies = () => {
  return (
    <section
      id="skills"
      aria-labelledby="proficiencies-heading"
      className="mb-12 px-4 sm:px-6 lg:px-8"
    >
      <h2
        id="proficiencies-heading"
        className="text-xl text-yellow-300 mb-6 text-center"
      >
        🛠️ Proficiencies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 text-sm">
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3 items-center gap-2">
            <span role="img" aria-label="Gears">
              ⚙️
            </span>{' '}
            Core Tech
          </h3>
          <ul className="flex flex-wrap gap-4 items-center justify-center">
            {[
              { icon: SiHtml5, label: 'HTML5', color: 'text-orange-500' },
              { icon: SiCss3, label: 'CSS3', color: 'text-blue-500' },
              {
                icon: SiJavascript,
                label: 'JavaScript',
                color: 'text-yellow-400',
              },
              {
                icon: SiTypescript,
                label: 'TypeScript',
                color: 'text-blue-400',
              },
              { icon: SiReact, label: 'React', color: 'text-cyan-300' },
              { icon: SiAngular, label: 'Angular', color: 'text-red-600' },
              {
                icon: SiTailwindcss,
                label: 'Tailwind CSS',
                color: 'text-teal-300',
              },
            ].map(({ icon: Icon, label, color }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-1 min-w-[56px]"
              >
                <span title={label} className="cursor-help">
                  <Icon
                    aria-label={label}
                    role="img"
                    className={color}
                    size={32}
                  />
                </span>
                <span className="text-xs mt-1">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3 items-center gap-2">
            <span role="img" aria-label="Handshake">
              🤝
            </span>{' '}
            Workflow & Tools
          </h3>
          <ul className="flex flex-wrap gap-4 items-center justify-center">
            {[
              { icon: SiGit, label: 'Git', color: 'text-red-500' },
              { icon: SiJirasoftware, label: 'Jira', color: 'text-blue-400' },
              { icon: SiTrello, label: 'Trello', color: 'text-blue-500' },
              { icon: SiFigma, label: 'Figma', color: 'text-pink-500' },
              { icon: SiSlack, label: 'Slack', color: 'text-purple-400' },
              { icon: VscVscode, label: 'VS Code', color: 'text-blue-300' },
              { icon: SiIonic, label: 'Ionic', color: 'text-blue-400' },
              {
                icon: SiOpenai,
                label: 'OpenAI / ChatGPT',
                color: 'text-emerald-400',
              },
              {
                icon: SiIpfs,
                label: 'IPFS / IPNS',
                color: 'text-teal-400',
              },
            ].map(({ icon: Icon, label, color }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-1 min-w-[56px]"
              >
                <span title={label} className="cursor-help">
                  <Icon
                    aria-label={label}
                    role="img"
                    className={color}
                    size={32}
                  />
                </span>
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
