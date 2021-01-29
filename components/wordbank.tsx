export default function Wordbank() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col sm:flex-row py-8 sm:py-16 items-center justify-center">
        <div
          className="flex flex-col border-2 items-center rounded-lg
              border-black px-8 py-6 mb-4 sm:mr-4"
        >
          <div className="border-2 border-black rounded-full p-6 bg-gray-200">
            <h1 className="text-2xl font-black">100</h1>
          </div>
          <h1 className="mt-3 text-base font-black">English Academic Words</h1>
          <button
            type="button"
            className="bg-black text-white border-black border-2 px-3 py-1
                  rounded-lg mt-4 text-sm"
          >
            Take Review Quiz
          </button>
          <button
            type="button"
            className="mt-4 border-black border-2
                  rounded-lg py-1 px-10 text-sm"
          >
            Continue
          </button>
        </div>
        <div
          className="flex flex-col border-2 items-center rounded-lg
              border-black px-8 py-6 mb-4 sm:mr-4"
        >
          <div className="border-2 border-black rounded-full p-6 bg-gray-200">
            <h1 className="text-2xl font-black">100</h1>
          </div>
          <h1 className="mt-3 text-base font-black">English Academic Words</h1>
          <button
            type="button"
            className="bg-black text-white border-black border-2 px-3 py-1
                  rounded-lg mt-4 text-sm"
          >
            Take Review Quiz
          </button>
          <button
            type="button"
            className="mt-4 border-black border-2
                  rounded-lg py-1 px-10 text-sm"
          >
            Continue
          </button>
        </div>
        <div
          className="flex flex-col border-2 items-center rounded-lg
              border-black px-8 py-6 mb-4"
        >
          <div className="border-2 border-black rounded-full p-6 bg-gray-200">
            <h1 className="text-2xl font-black">100</h1>
          </div>
          <h1 className="mt-3 text-base font-black">English Academic Words</h1>
          <button
            type="button"
            className="bg-black text-white border-black border-2 px-3 py-1
                  rounded-lg mt-4 text-sm"
          >
            Take Review Quiz
          </button>
          <button
            type="button"
            className="mt-4 border-black border-2
                  rounded-lg py-1 px-10 text-sm"
          >
            Continue
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <button
          type="button"
          className="mt-8 bg-black text-white px-4 py-3 rounded-lg text-base mb-16"
        >
          Create WordBank
        </button>
      </div>
    </div>
  );
}
