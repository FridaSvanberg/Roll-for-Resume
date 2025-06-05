// const DownloadCV = () => {
//   return (
//     <section
//       aria-labelledby="downloads-heading"
//       className="my-12 px-4 text-center"
//     >
//       <h2
//         id="downloads-heading"
//         className="text-xl text-yellow-300 font-semibold mb-4"
//       >
//         📥 Downloads
//       </h2>

//       <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
//         <a
//           href="/FridaSvanbergCV.pdf"
//           download
//           className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded shadow-md transition focus:outline focus:outline-2 focus:outline-yellow-300"
//         >
//           📄 Download Full CV
//         </a>

//         <a
//           href="/FridaSvanbergCoverLetter.pdf"
//           download
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition focus:outline focus:outline-2 focus:outline-blue-300"
//         >
//           💌 Read Cover Letter
//         </a>
//       </div>
//     </section>
//   );
// };

// export default DownloadCV;
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
          className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full shadow-md transition focus:outline-none focus:ring-2 focus:ring-yellow-300 text-lg flex items-center justify-center gap-2"
        >
          <span role="img" aria-label="CV">
            📄
          </span>
          Download Full CV
        </a>

        <a
          href="/FridaSvanbergCoverLetter.pdf"
          download
          className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg flex items-center justify-center gap-2"
        >
          <span role="img" aria-label="Cover Letter">
            💌
          </span>
          Read Cover Letter
        </a>
      </div>
    </section>
  );
};

export default DownloadCV;
