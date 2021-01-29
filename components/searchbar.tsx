export default function Searchbar() {
  return (
    <div className="h-1/3 flex flex-row bg-gray-50 justify-center items-center">
        <input
          className="border-2 px-4 py-2 w-1/2 sm:w-1/3 md:w-1/2 h-12 border-black rounded-l-lg placeholder-gray-700 focus:outline-none"
          type="text"
          placeholder="Search any word"
        />
        <button
          type="button"
          className=" bg-black text-white px-4 py-1 rounded-r-lg h-12"
        >
          Add word note
        </button>
    </div>
  );
}
900;
