const DownloadCV = () => {
  return (
    <section
      aria-labelledby="downloads-heading"
      className="my-12 px-4 text-center"
    >
      <h2
        id="downloads-heading"
        className="text-xl text-yellow-300 font-semibold mb-4"
      >
        📥 Downloads
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="/FridaSvanbergCV.pdf"
          download
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded shadow-md transition focus:outline focus:outline-2 focus:outline-yellow-300"
        >
          📄 Download Full CV
        </a>

        <a
          href="/FridaSvanbergCoverLetter.pdf"
          download
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition focus:outline focus:outline-2 focus:outline-blue-300"
        >
          💌 Read Cover Letter
        </a>
      </div>
    </section>
  );
};

export default DownloadCV;
