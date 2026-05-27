import Navbar from "./components/common/Nav";
import Hero from "./components/secessions/mainsecessions/Hero";
import Ourpath from "./components/secessions/mainsecessions/Ourpath";
import Bigidea from "./components/secessions/mainsecessions/Bigidea";
import Uniqueteam from "./components/secessions/mainsecessions/Uniqueteam";

function Main(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Ourpath/>
            <Bigidea/>
            <Uniqueteam/>
        </div>
    )
}
export default Main;