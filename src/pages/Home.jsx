import Categories from "../components/Shop/Categories";
import Hero from "../components/Shop/Hero";
import NewArrivals from "../components/Shop/NewArrivals";
import NewsLetter from "../components/Shop/NewsLetter";
import OurServices from "../components/Shop/OurServices";


const HomePage = () => {
    return (
        <>
            <Hero />
            <NewArrivals />
            <Categories />
            <NewsLetter/>
            <OurServices />
        </>
    );
}

export default HomePage;