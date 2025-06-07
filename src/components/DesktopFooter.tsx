const DesktopFooter = () => {
  return (
    <footer className="mt-12 text-center text-sm text-gray-500 pb-6 px-4 hidden md:block">
      <p className="sr-only">
        Thanks for reading! You’ve just completed Frida’s interactive CV
        campaign. May your quests be full of clean code and good teammates.
      </p>

      <p>
        © {new Date().getFullYear()} Frida Svanberg – built with 🧠, 🎨 & 💻
      </p>
      <p>
        Coded in <span className="text-yellow-300">React + Tailwind</span>,
        themed with D&D, and focused on accessibility ♿
      </p>
      <p>
        CV hosted on the decentralized web via{' '}
        <a
          href="https://w3s.link/ipns/k51qzi5uqu5dhxnxzz4sp2jre8zjvase81v91eznzvryktifym02hwohhavfh0"
          className="underline hover:text-yellow-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          IPNS @ w3s.link
        </a>
      </p>
    </footer>
  );
};

export default DesktopFooter;
