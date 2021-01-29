import Navbar from "../components/navbar";
import Searchbar from "../components/searchbar";
import IncorrectedWord from "../components/incorrectedWord";
export default function Eachbank(){
    return (
        <body className="h-screen font-mainFont bg-white">
            <Navbar></Navbar>
            <Searchbar></Searchbar>
            <IncorrectedWord></IncorrectedWord>
        </body>
    );
}