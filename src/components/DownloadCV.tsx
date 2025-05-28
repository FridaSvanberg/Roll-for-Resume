const DownloadCV = () => {
  return (
    <div className="text-center my-8">
      <a
        href="/FridaSvanbergCV.pdf"
        download
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded shadow-md transition"
      >
        📥 Download Full CV
      </a>
    </div>
  );
};

export default DownloadCV;
