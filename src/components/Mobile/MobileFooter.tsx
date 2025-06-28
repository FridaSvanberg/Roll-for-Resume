const MobileFooter = () => (
  <footer className="mb-16 bg-gray-800 p-3 shadow text-center text-xs text-zinc-400 md:hidden max-w-3xl">
    <p>
      © {new Date().getFullYear()} Frida Svanberg
      <br />
      <span className="text-yellow-300 font-bold">React + Tailwind</span> •
      D&D-inspired CV site
    </p>
    <p>
      Hosted on GitHub Pages •{' '}
      <a
        href="https://w3s.link/ipns/k51qzi5uqu5dhzw7nlhmsx96eiim9betbxncsc2hileogg8p884cu7lo53t2ev"
        className="underline hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        IPNS mirror
      </a>{' '}
      also available
    </p>
    <p className="italic text-yellow-300 mt-2">
      This resume rolled a nat 20 on performance
    </p>
  </footer>
);

export default MobileFooter;
