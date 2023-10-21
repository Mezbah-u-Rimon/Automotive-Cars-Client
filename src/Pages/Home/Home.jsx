import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import BrandCard from "../../Components/BrandCard/BrandCard";
import Choose from "../../Components/Choose/Choose";
import MarqueeImg from "../../Components/Marquee/MarqueeImg";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MarqueeImg></MarqueeImg>
            <About></About>
            <BrandCard></BrandCard>
            <Choose />
        </div>
    );
};

export default Home;