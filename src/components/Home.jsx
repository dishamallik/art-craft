import ArtCraftSection from "./ArtCraftSection";
import Banner from "./Banner";
import CraftItemSection from "./CraftItemSection";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="">
            <CraftItemSection></CraftItemSection>
            <ArtCraftSection></ArtCraftSection>
          
            </div>
            
        </div>
    );
};

export default Home;