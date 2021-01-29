export default function Login() {
  return (
    <div className="w-screen h-screen bg-gray-50 flex flex-col items-center justify-center font-mainFont">
      <div className="flex flex-col items-center border-2 border-black p-8 rounded-xl">
        <div className="border-2 rounded-full p-4 border-black">
          <img className="h-24 w-24" src="images/Mhaat.svg" />
        </div>
        <h1 className="border-black font-extrabold mt-4">Welcome Back</h1>
        <input className="border-2 mt-4 px-4 py-2 border-black rounded-lg placeholder-gray-700 focus:outline-none" type="text" placeholder="Name" />
        <input className="border-2 mt-2 px-4 py-2 border-black rounded-lg placeholder-gray-700 focus:outline-none" type="text" placeholder="Password" />
        <button type="button" className="mt-4 bg-black text-white px-4 py-1 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
}
