const DownloadCV = () => {
  return (
    <section
      aria-labelledby="downloads-heading"
      className="my-8 bg-zinc-800 rounded-xl p-4 shadow flex flex-col items-center"
    >
      <h2
        id="downloads-heading"
        className="text-xl font-bold text-yellow-300 mb-4 flex items-center gap-2"
      >
        <span role="img" aria-label="Download">
          📥
        </span>
        Downloads
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
        <a
          href="/FridaSvanbergCV.pdf"
          download
          className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition focus:outline-none focus:ring-2 focus:ring-yellow-300 text-lg flex items-center justify-center gap-2"
        >
          <span role="img" aria-label="CV">
            📄
          </span>
          Download CV
        </a>

        <a
          href="/FridaSvanbergCoverLetter.pdf"
          download
          className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white focus:ring-violet-300 font-bold py-3 px-6 rounded-full shadow-md transition focus:outline-none focus:ring-2 text-lg flex items-center justify-center gap-2"
        >
          <span role="img" aria-label="Cover Letter">
            💌
          </span>
          Cover Letter
        </a>
      </div>
    </section>
  );
};

export default DownloadCV;
