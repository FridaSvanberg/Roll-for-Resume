const About = () => {
  return (
    <section
      id="about"
      className="mb-8 bg-zinc-800 rounded-xl p-4 shadow flex flex-col gap-3 text-zinc-100"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="sr-only">
        About Me
      </h2>
      <p>
        Hi! I’m Frida — a frontend developer from Stockholm with a love for
        clean design, clear logic, and collaborative teams. I'm self-taught,
        neurodivergent, and always looking for ways to make the web more
        human-friendly.
      </p>
      <p className="mt-4">
        I like building things that work well and feel good to use. I care about
        the small details, and I enjoy making complex ideas easier to understand
        — in code and in communication.
      </p>
    </section>
  );
};

export default About;
