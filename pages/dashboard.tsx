import Navbar from "../components/navbar";
import Nowordbank from "../components/nowordbank";
import Wordbank from "../components/wordbank";
export default function Dashboard() {
  return (
    <body className="w-screen h-screen flex flex-col bg-gray-50 font-mainFont">
      <Navbar></Navbar>
      {/* <Nowordbank></Nowordbank> */}
      <Wordbank></Wordbank>
    </body>
  );
}
