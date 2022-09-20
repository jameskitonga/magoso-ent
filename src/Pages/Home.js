import Nav from "../components/Nav"
import Slider from "../components/Slider"
import Features from "../components/Features"
import Categories from "../components/Categories"
import Bestsellers from "../components/BestsellersItems"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"



const Home = () => {
    return (
        <div>
            <Nav />
            <Slider />
            <Features />
            <Categories />
            <Bestsellers />
            <Newsletter />
            <Footer />
        </div>



    )
}

export default Home;