import Navbar from "./components/common/Nav";
import Hero from "./components/secessions/mainsecessions/Hero";
import Ourpath from "./components/secessions/mainsecessions/Ourpath";
import Bigidea from "./components/secessions/mainsecessions/Bigidea";
import Uniqueteam from "./components/secessions/mainsecessions/Uniqueteam";
import Ourteam from "./components/secessions/mainsecessions/Ourteam";
import Wantstojoin from "./components/secessions/mainsecessions/Wantstojoin";
import Ourvalues from "./components/secessions/mainsecessions/Ourvalues";
function Main(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Ourpath/>
            <Bigidea/>
            <Uniqueteam/>
            <Ourteam/>
            <Wantstojoin/>
            <Ourvalues/>
        </div>
    )
}
export default Main;