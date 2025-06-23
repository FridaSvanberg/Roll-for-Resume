const Traits = () => {
  return (
    <section
      id="traits"
      aria-labelledby="traits-heading"
      className="mt-8 bg-zinc-800 rounded-xl p-4 shadow flex flex-col gap-2"
    >
      <h2
        id="traits-heading"
        className="text-xl font-bold text-yellow-300 mb-2 items-center gap-2"
      >
        Traits & Side Quests
      </h2>
      <ul className=" list-inside text-zinc-100 space-y-1 pl-1">
        <li>Neurodivergent - sees structure, flow, and logic differently</li>{' '}
        <li>Clear communicator - gives and receives feedback with care</li>
        <li>Supportive teammate - brings calm energy and listens well</li>
        <li>Calm under pressure - keeps cool during tech emergencies</li>
        <li>Queer & inclusive perspective</li>
        <li>Tinkers with Raspberry Pis and repairs iPhones</li>
        <li>
          Gamer at heart - loves everything from cozy games to Tactical Shooters
        </li>
      </ul>
    </section>
  );
};

export default Traits;
