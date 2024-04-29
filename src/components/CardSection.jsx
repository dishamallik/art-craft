// import { useEffect, useState } from "react";
// import CraftItemSection from "./CraftItemSection";

import { useEffect, useState } from "react";
import Art from "./Art";


const CardSection = () => {

    const [arts, setArts] = useState([]);
  

    useEffect(() => {
        fetch('http://localhost:5000/art')
            .then(res => res.json())
            .then(data => setArts(data));
    }, []);



    return (
        
        <div>
           
            <div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
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