import Footer from "../Footer"
import Banner from "../sections/Banner"
import Confession from "../sections/Confession"
import ProfileDisplay from "../sections/ProfileDisplay"
import Search from "../sections/Search"
import TargetedCus from "../sections/TargetedCus"


const Home = () => {
    return(
        <div>
             <Banner/>
             <Search/>
             <Confession/>
             <TargetedCus/>
             <ProfileDisplay/>


             <Footer/>
        </div>
    )
}

export default Home