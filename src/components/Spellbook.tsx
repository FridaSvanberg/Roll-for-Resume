const Spellbook = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl text-yellow-300 mb-2">📘 Spellbook</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <strong>🕒 Timer Challenge:</strong> A JavaScript timer app for dev
          sprints.{' '}
          <a
            href="https://github.com/FridaSvanberg/Timer-Challenge"
            className="text-blue-400 underline hover:text-yellow-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </li>
        <li>
          <strong>🗂️ Admin Panel for Stryda:</strong> A TypeScript-powered BI
          dashboard for internal ops.
        </li>
        <li>
          <strong>📸 Timeline Photo App (WIP):</strong> React Native + Storacha
          integration for timeline-tagged photos.
        </li>
      </ul>
    </section>
  );
};

export default Spellbook;
