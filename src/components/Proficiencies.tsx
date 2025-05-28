const Proficiencies = () => {
  return (
    <section aria-labelledby="proficiencies-heading">
      <h2 id="proficiencies-heading" className="text-xl text-yellow-300 mb-2">
        🛠️ Proficiencies
      </h2>
      <ul className="flex flex-wrap gap-2 text-sm" role="list">
        {[
          'HTML',
          'CSS',
          'JavaScript',
          'TypeScript',
          'React',
          'Tailwind',
          'Next.js',
        ].map((skill) => (
          <li key={skill}>
            <span className="bg-yellow-600 text-black px-2 py-1 rounded">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Proficiencies;
