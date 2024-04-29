import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
    
    const arts = useLoaderData();
    
    return (
        <div>
          
            <div className="container mx-auto  max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-xl mb-8 mt-6">
  
    <div className="relative h-64 md:h-auto">
        <img className="object-cover object-center w-full h-full" src={arts.photo} alt="Craft Item" />
    </div>
 
    <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{arts.item_name}</h2>
        <p className="text-gray-600 mb-4">{arts.subcategory_Name}</p>
        <p className="text-gray-700 mb-4">
            {arts.short_description}</p>
        <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700">Price: <span className="font-semibold">{arts.price}</span></p>
            <p className="text-gray-700">Rating: <span className="font-semibold">{arts.rating}</span></p>
        </div>
        <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700">Customization: <span className="font-semibold">{arts.customization}</span></p>
            <p className="text-gray-700">{arts.Processing} Time: <span className="font-semibold">{arts.processing_time}</span></p>
        </div>
        <div className="flex justify-between items-center">
            <p className="text-gray-700">Stock Status: <span className="font-semibold">{arts.stockStatus}</span></p>
        </div>
    </div>
</div>

        </div>
    );
};

export default CraftDetails;
