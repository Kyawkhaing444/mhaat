export default function AddwordForm() {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <div className="flex flex-col items-center border-2 border-black rounded-xl w-3/4 sm:w-2/3 py-4">
        <h1 className="border-black font-bold text-2xl">Add Word Note</h1>
        <input
          className="border-2 mt-6 px-4 py-2 border-black rounded-lg placeholder-gray-700 focus:outline-none w-4/5 md:w-2/3"
          type="text"
          placeholder="Words you want to remember"
        />
        <textarea
          className="border-2 mt-3 px-4 py-2 border-black rounded-lg placeholder-gray-700 focus:outline-none  w-4/5 md:w-2/3 h-12"
          placeholder="Sample Sentence for that word"
        />
        <textarea
          className="border-2 mt-3 px-4 py-2 border-black rounded-lg placeholder-gray-700 focus:outline-none  w-4/5 md:w-2/3 h-16"
          placeholder="Hint for this word or synonyms you already know"
        />
        <textarea
          className="border-2 mt-3 px-4 py-2 border-black rounded-lg placeholder-gray-700 focus:outline-none  w-4/5 md:w-2/3 h-24"
          placeholder="Detailed explanation for that word"
        />
        <button
          type="button"
          className="mt-6 mb-8 bg-black text-white px-4 py-1 rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
