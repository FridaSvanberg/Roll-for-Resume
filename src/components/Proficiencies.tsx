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
  SiIterm2,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Proficiencies = () => {
  return (
    <section aria-labelledby="Proficiencies-heading" className="mb-8">
      <h2 id="Proficiencies-heading" className="text-xl text-yellow-300 mb-4">
        🛠️ Proficiencies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 text-sm">
        <div>
          <h3 className="font-bold text-yellow-400 mb-2">Core Tech</h3>
          <ul className="flex flex-wrap gap-2 items-center">
            <li>
              <span title="HTML5" className="cursor-help">
                <SiHtml5
                  aria-label="HTML5"
                  role="img"
                  className="text-orange-500"
                  size={24}
                />
              </span>
            </li>
            <li>
              <span title="CSS3" className="cursor-help">
                <SiCss3
                  aria-label="CSS3"
                  role="img"
                  className="text-blue-500"
                  size={24}
                />
              </span>
            </li>
            <li>
              <span title="JavaScript" className="cursor-help">
                <SiJavascript
                  aria-label="JavaScript"
                  role="img"
                  className="text-yellow-400"
                  size={24}
                />
              </span>
            </li>
            <li>
              <span title="TypeScript" className="cursor-help">
                <SiTypescript
                  aria-label="TypeScript"
                  role="img"
                  className="text-blue-400"
                  size={24}
                />
              </span>
            </li>
            <li>
              <span title="React" className="cursor-help">
                <SiReact
                  aria-label="React"
                  role="img"
                  className="text-cyan-300"
                  size={24}
                />
              </span>
            </li>
            <li>
              <span title="Angular" className="cursor-help">
                <SiAngular
                  aria-label="Angular"
                  role="img"
                  className="text-red-600"
                  size={24}
                />
              </span>
            </li>
            <li>
              <span title="Tailwind CSS" className="cursor-help">
                <SiTailwindcss
                  aria-label="Tailwind CSS"
                  role="img"
                  className="text-teal-300"
                  size={24}
                />
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-yellow-400 mb-2">
            Workflow & Collaboration
          </h3>
          <ul className="flex flex-wrap gap-2 items-center">
            <li>
              <span title="Git" className="cursor-help">
                <SiGit
                  aria-label="Git"
                  role="img"
                  className="text-red-500"
                  size={24}
                />
              </span>
            </li>
            <li>
              <span title="Jira" className="cursor-help">
                <SiJirasoftware
                  aria-label="Jira"
                  role="img"
                  className="text-blue-400"
                  size={24}
                />
              </span>
            </li>
            <li>
              <span title="Trello" className="cursor-help">
                <SiTrello
                  aria-label="Trello"
                  role="img"
                  className="text-blue-500"
                  size={24}
                />
              </span>
            </li>
            <li>
              <span title="Figma" className="cursor-help">
                <SiFigma
                  aria-label="Figma"
                  role="img"
                  className="text-pink-500"
                  size={24}
                />
              </span>
            </li>
            <li>
              <span title="Slack" className="cursor-help">
                <SiSlack
                  aria-label="Slack"
                  role="img"
                  className="text-purple-400"
                  size={24}
                />
              </span>
            </li>
            <li>
              <span title="VS Code" className="cursor-help">
                <VscVscode
                  aria-label="VS Code"
                  role="img"
                  className="text-blue-300"
                  size={24}
                />
              </span>
            </li>
            <li>
              <span title="Ionic" className="cursor-help">
                <SiIonic
                  aria-label="Ionic"
                  role="img"
                  className="text-blue-400"
                  size={24}
                />
              </span>
            </li>
            <li>
              <span title="OpenAI / ChatGPT" className="cursor-help">
                <SiOpenai
                  aria-label="OpenAI / ChatGPT"
                  role="img"
                  className="text-emerald-400"
                  size={24}
                />
              </span>
            </li>
            <li>
              <span title="iTerm2" className="cursor-help">
                <SiIterm2
                  aria-label="iTerm2"
                  role="img"
                  className="text-gray-400"
                  size={24}
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Proficiencies;
