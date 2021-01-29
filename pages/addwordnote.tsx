import Navbar from "../components/navbar";
import AddwordForm from "../components/addwordform";

export default function addwordnote(){
    return (<body className="w-screen flex flex-col font-mainFont bg-gray-50">
       <Navbar></Navbar>
       <AddwordForm></AddwordForm>
    </body>)
}