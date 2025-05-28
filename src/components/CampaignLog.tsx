const CampaignLog = () => {
  return (
    <section aria-labelledby="campaign-heading">
      <h2 id="campaign-heading" className="text-xl text-yellow-300 mb-2">
        🧪 Campaign Log
      </h2>
      <div className="space-y-4">
        <article aria-labelledby="hakierka-role">
          <h3 id="hakierka-role" className="text-lg text-yellow-400">
            Frontend Developer @ Hakierka
          </h3>
          <p className="text-sm text-gray-400">🗓️ Feb 2024 – Present</p>
          <ul className=" list-inside text-gray-300 mt-1">
            <li>
              Tested Storacha-related code to check functionality and usability
            </li>
            <li>Gave feedback to improve the experience for developers</li>
            <li>
              Helped ensure internal tools worked smoothly across use cases
            </li>
          </ul>
        </article>

        <article aria-labelledby="stryda-role">
          <h3 id="stryda-role" className="text-lg text-yellow-400">
            Frontend Developer @ Stryda
          </h3>
          <p className="text-sm text-gray-400">🗓️ May 2022 – Jan 2024</p>
          <ul className=" list-inside text-gray-300 mt-1">
            <li>Promoted from intern to lead dev of the intern squad 🛡️</li>
            <li>
              Held retros, led daily stand-ups, and wrote battle plans (tickets)
            </li>
            <li>
              Built a Business Intelligence admin portal using React +
              TypeScript
            </li>
            <li>
              Bridged communication between dev realms (frontend + backend) for
              smoother launches
            </li>
          </ul>
        </article>

        <article aria-labelledby="compodium-role">
          <h3 id="compodium-role" className="text-lg text-yellow-400">
            Frontend Developer @ Compodium
          </h3>
          <p className="text-sm text-gray-400">🗓️ Mar 2021 – Apr 2022</p>
          <ul className=" list-inside text-gray-300 mt-1">
            <li>
              Helped craft Vidicue, a secure app for healthcare mages 🧙‍⚕️
            </li>
            <li>
              Focused on building a safe, accessible frontend for sensitive user
              data
            </li>
            <li>
              Worked closely with the infrastructure team to align on technical
              requirements and stability
            </li>
          </ul>
        </article>

        <article aria-labelledby="hygglo-role">
          <h3 id="hygglo-role" className="text-lg text-yellow-400">
            Frontend Developer @ Hygglo
          </h3>
          <p className="text-sm text-gray-400">🗓️ Feb 2019 – Feb 2021</p>
          <ul className=" list-inside text-gray-300 mt-1">
            <li>
              Started as an intern and took full responsibility for the admin
              platform’s frontend 🛠️
            </li>
            <li>
              Refactored legacy code, improved workflows, and modernized the
              tech stack
            </li>
            <li>
              Created seasonal campaign features (Easter, Pride) in
              collaboration with the marketing team
            </li>
            <li>
              Championed diversity and inclusion in design ideas and feature
              planning
            </li>
            <li>
              Developed for both web and mobile using Angular and React Native
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default CampaignLog;
