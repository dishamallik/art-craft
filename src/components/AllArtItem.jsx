
import { Link, useLoaderData } from "react-router-dom";



const AllArtItem = () => {
    const arts = useLoaderData();

    return (
        <div className="container mx-auto">
        <div className="mt-10">
            <h2 className="text-3xl font-extrabold mb-6">Craft Item Details</h2>
            {arts.map((art) =>   (
            <div key={art._id}>
                <div 
             className="container mx-auto">
            <div className="mt-10">
                
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subcategory Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                                <th scope="col" className="relative px-6 py-3"><span className="sr-only">View Details</span></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap sm:w-1/4">{art.item_name}</td>
                                <td className="px-6 py-4 whitespace-nowrap sm:w-1/4">{art.subcategory_Name}</td>
                                <td className="px-6 py-4 whitespace-nowrap sm:w-1/4">{art.price}</td>
                                <td className="px-6 py-4 whitespace-nowrap sm:w-1/4">{art.rating}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <Link to={`/art/${art._id}`}>
                                  <button className="text-indigo-600 hover:text-indigo-900 btn btn-outline bg-blue-100">View Details</button>
                                  </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
                </div>
        
           
            ))}
        </div>
    </div>
    
    );
};

export default AllArtItem;