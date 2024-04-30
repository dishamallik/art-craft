// import { useEffect, useState } from "react";
// import CraftItemSection from "./CraftItemSection";

import { useEffect, useState } from "react";
import Art from "./Art";


const CardSection = () => {

    const [arts, setArts] = useState([]);
  

    useEffect(() => {
        fetch('https://art-craft-server-ruby.vercel.app/art')
            .then(res => res.json())
            .then(data => setArts(data));
    }, []);



    return (
        
        <div className="">
            <div className="text-4xl">
                <h1>Craft items section</h1>


              </div>

           
            <div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 ">
       {
            arts.map(art =>  <Art key={art._id} 
                art={art}
            >
            

            </Art>)
        }
       </div>
            </div>
        </div>
    );
};

export default CardSection;