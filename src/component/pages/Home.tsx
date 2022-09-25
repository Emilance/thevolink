import Footer from "../Footer"
import Banner from "../sections/Banner"
import Confession from "../sections/Confession"
import ProfileDisplay from "../sections/ProfileDisplay"
import Search from "../sections/Search"
import TargetedCus from "../sections/TargetedCus"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import LandDropDown from "../LangDropDown"

const Home = () => {

    
    useEffect(() => {
        AOS.init({duration : 800});
      }, [])

    return(
        <div>
           
             <Banner/>
             <Search  data-aos="fade-right"/>
             <Confession/>
             <TargetedCus/>
             <ProfileDisplay/>
             <Footer/>
        </div>
    )
}

export default Home