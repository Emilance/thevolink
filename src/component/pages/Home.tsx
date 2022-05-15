import Banner from "../sections/Banner"
import Confession from "../sections/Confession"
import ProfileDisplay from "../sections/ProfileDisplay"
import Search from "../sections/Search"


const Home = () => {
    return(
        <div>
             <Banner/>
             <Search/>
             <Confession/>
             <ProfileDisplay/>
        </div>
    )
}

export default Home