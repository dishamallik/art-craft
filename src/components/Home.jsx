import ArtCraftSection from "./ArtCraftSection";
import ArtGallery from "./ArtGallery";
import Banner from "./Banner";
import CraftItemSection from "./CraftItemSection";
import Review from "./Review";





const Home = () => {
    return (
        
        <div className="" >
            
            <Banner></Banner>
            <div className="container mx-auto ">
            <CraftItemSection></CraftItemSection>
            <ArtCraftSection></ArtCraftSection>
            <Review></Review>
            <ArtGallery></ArtGallery>
            
          
            </div>
            
            
        </div>
       
    );
};

export default Home;