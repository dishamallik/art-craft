import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
    const arts = useLoaderData();
    // const { _id } = useParams();
    // const idInt = parseInt(_id);
    // const art = arts.find(art => art._id === idInt);
    
    // Check if art is undefined before accessing its properties
    return (
        <div>
           
                <div>Card details: {arts._id}</div>
           
        </div>
    );
};

export default CraftDetails;
