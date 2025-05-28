const CampaignLog = () => {
  return (
    <section>
      <h2 className="text-xl text-yellow-300 mb-2">🧪 Campaign Log</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg text-yellow-400">
            Frontend Developer @ Hakierka
          </h3>
          <p className="text-sm text-gray-400">🗓️ Feb 2024 – Present</p>
          <ul className="list-disc list-inside text-gray-300 mt-1">
            <li>Advised adventuring guilds like Concordium & Protocol Labs</li>
            <li>
              Wrote scrolls (docs) and created demos for the dev community
            </li>
            <li>Helped test and enchant tools for internal teams</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-yellow-400">
            Frontend Developer @ Stryda
          </h3>
          <p className="text-sm text-gray-400">🗓️ May 2022 – Jan 2024</p>
          <ul className="list-disc list-inside text-gray-300 mt-1">
            <li>Promoted from intern to lead dev of the intern squad 🛡️</li>
            <li>
              Held retros, wrote battle plans (tickets), and led daily stand-ups
            </li>
            <li>Built a BI admin portal using React + TypeScript</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-yellow-400">
            Frontend Developer @ Compodium
          </h3>
          <p className="text-sm text-gray-400">🗓️ Mar 2021 – Apr 2022</p>
          <ul className="list-disc list-inside text-gray-300 mt-1">
            <li>
              Helped craft Vidicue, a secure app for healthcare mages 🧙‍⚕️
            </li>
            <li>Focused on accessibility and frontend security spells</li>
            <li>Left behind clean code scrolls and proper documentation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-yellow-400">
            Frontend Developer @ Hygglo
          </h3>
          <p className="text-sm text-gray-400">🗓️ Feb 2019 – Feb 2021</p>
          <ul className="list-disc list-inside text-gray-300 mt-1">
            <li>
              Started as an intern and became the lead on the admin platform
            </li>
            <li>
              Used React Native & Angular to build both mobile and web tools
            </li>
            <li>
              Launched festive features (Pride, Christmas) and advocated
              diversity
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CampaignLog;
