const Contact = () => {
  return (
    <section className="mt-12 text-center border-t border-yellow-600 pt-6">
      <h2 className="text-xl text-yellow-300 mb-2">📨 Use the Sending Spell</h2>
      <p className="text-gray-300 mb-2">
        Whether it's a quest, collab, or just a hello:
      </p>

      <div className="space-y-2 text-sm">
        <p>
          <span className="text-yellow-400">📧 Email:</span>{' '}
          <a
            href="mailto:svanberg92@gmail.com"
            className="underline text-blue-300 hover:text-yellow-400"
          >
            svanberg92@gmail.com
          </a>
        </p>

        <p>
          <span className="text-yellow-400">🔗 LinkedIn:</span>{' '}
          <a
            href="https://www.linkedin.com/in/fridasvanberg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-300 hover:text-yellow-400"
          >
            linkedin.com/in/fridasvanberg
          </a>
        </p>

        <p>
          <span className="text-yellow-400">🐙 GitHub:</span>{' '}
          <a
            href="https://github.com/FridaSvanberg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-300 hover:text-yellow-400"
          >
            github.com/FridaSvanberg
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
