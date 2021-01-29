export default function Nowordbank() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div>
        <img className="h-24 w-24" src="images/empty.svg" />
      </div>
      <h1 className="mt-4 text-xl font-black">No WordBank</h1>
      <button
        type="button"
        className="mt-8 bg-black text-white px-4 py-2 rounded-lg text-sm"
      >
        Create your own WordBank
      </button>
    </div>
  );
}
