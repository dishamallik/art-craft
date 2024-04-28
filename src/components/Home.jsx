
import ArtCraftSection from "./ArtCraftSection";
import ArtGallery from "./ArtGallery";
import Banner from "./Banner";
import CardSection from "./CardSection";

import Review from "./Review";





const Home = () => {

    // const arts = useLoaderData();

    return (
        
        <div className="" >
            
            <Banner></Banner>
            <div className="container mx-auto ">
            
          <CardSection></CardSection>
            <ArtCraftSection></ArtCraftSection>
            <Review></Review>
            <ArtGallery></ArtGallery>
            
          
            </div>
            
            
        </div>
       
    );
};

export default Home;