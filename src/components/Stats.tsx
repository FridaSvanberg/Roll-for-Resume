const Stats = () => {
  return (
    <section aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="text-xl text-yellow-300 mb-2">
        🎯 Stats
      </h2>
      <ul className="text-gray-300 list-inside space-y-1">
        <li>🧠 INT (Tech Knowledge): +4 – React, Tailwind, JS, Next.js</li>
        <li>🎨 CHA (Design Sense): +3 – Accessible, clean, user-focused UI</li>
        <li>🤝 WIS (Team Spirit): +5 – Communicative, calm, supportive</li>
        <li>💻 DEX (Frontend Skills): +4 – Fast builds, mobile-ready</li>
        <li>💪 CON (Resilience): +4 – Handles pressure, adapts quickly</li>
      </ul>
    </section>
  );
};
export default Stats;
