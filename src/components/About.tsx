const About = () => {
  return (
    <section
      aria-labelledby="about-heading"
      id="about"
      className="mb-8 p-4 shadow flex flex-col gap-3 text-zinc-100"
    >
      <h2
        className="italic text-yellow-200 text-base md:text-lg mb-2 font-normal"
        id="about-heading"
      >
        You see a developer in a cozy digital tavern, quietly dancing to a
        silent tune while ideas come together on their screen...
      </h2>
      <p>
        Hi! I’m Frida — a frontend developer from Stockholm with a love for
        clean design, clear logic, and collaborative teams. I&apos;m
        self-taught, neurodivergent, and always looking for ways to make the web
        more human-friendly.
      </p>
      <p>
        I like building things that work well and feel good to use. I care about
        the small details, and I enjoy making complex ideas easier to understand
        — in code and in communication.
      </p>
    </section>
  );
};

export default About;
