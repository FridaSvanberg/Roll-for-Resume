const Contact = () => {
  return (
    <section
      aria-labelledby="contact-heading"
      className="mt-12 text-center border-t border-yellow-600 pt-6"
    >
      <h2 id="contact-heading" className="text-xl text-yellow-300 mb-2">
        📨 Use the Sending Spell
      </h2>
      <p className="text-gray-300 mb-2">
        Whether it's a quest, collab, or just a hello:
      </p>
      <ul className="space-y-2 text-sm">
        <li>
          <span className="text-yellow-400">📧 Email:</span>{' '}
          <a
            href="mailto:svanberg92@gmail.com"
            className="underline text-blue-300 hover:text-yellow-400"
          >
            svanberg92@gmail.com
          </a>
        </li>
        <li>
          <span className="text-yellow-400">🔗 LinkedIn:</span>{' '}
          <a
            href="https://www.linkedin.com/in/fridasvanberg"
            className="underline text-blue-300 hover:text-yellow-400"
          >
            linkedin.com/in/fridasvanberg
          </a>
        </li>
        <li>
          <span className="text-yellow-400">🐙 GitHub:</span>{' '}
          <a
            href="https://github.com/FridaSvanberg"
            className="underline text-blue-300 hover:text-yellow-400"
          >
            github.com/FridaSvanberg
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
