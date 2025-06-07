const MobileFooter = () => (
  <footer className="mb-16 bg-gray-800 p-3 shadow text-center text-xs text-zinc-400 md:hidden border-t-2 border-yellow-500 max-w-3xl">
    <p>
      © {new Date().getFullYear()} Frida Svanberg
      <br />
      <span className="text-yellow-300 font-bold">React + Tailwind</span> • D&D
      theme
    </p>
    <p>
      Hosted on{' '}
      <a
        href="https://w3s.link/ipns/k51qzi5uqu5dhxnxzz4sp2jre8zjvase81v91eznzvryktifym02hwohhavfh0"
        className="underline hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        w3s.link
      </a>
    </p>
  </footer>
);
export default MobileFooter;
