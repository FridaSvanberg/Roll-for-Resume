const CharacterSheetTable = () => {
  return (
    <section
      aria-labelledby="character-sheet-heading"
      className="w-full mt-2 bg-zinc-800 rounded-xl p-3 text-xs text-zinc-200 font-mono border border-violet-900"
    >
      <h2 id="character-sheet-heading" className="sr-only">
        Character Sheet
      </h2>
      <dl className="grid grid-cols-2 gap-2">
        <dt className="font-bold text-yellow-300">Class:</dt>
        <dd>Bard</dd>
        <dt className="font-bold text-yellow-300">Race:</dt>
        <dd>Human</dd>
        <dt className="font-bold text-yellow-300">Alignment:</dt>
        <dd>Chaotic Good</dd>
        <dt className="font-bold text-yellow-300">Level:</dt>
        <dd>7</dd>
      </dl>
    </section>
  );
};
export default CharacterSheetTable;
