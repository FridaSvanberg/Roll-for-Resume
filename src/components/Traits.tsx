const Traits = () => {
  return (
    <section
      id="traits"
      aria-labelledby="traits-heading"
      className="mt-8 bg-zinc-800 rounded-xl p-4 shadow border border-yellow-500 flex flex-col gap-2"
    >
      <h2 className=" items-center gap-2 text-2xl font-bold text-yellow-300 ">
        Traits & Side Quests
      </h2>
      <ul className=" list-disc pl-6 text-left marker:text-yellow-300 marker:text-lg space-y-2">
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
