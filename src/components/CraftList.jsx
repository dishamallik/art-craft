import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CraftList = () => {
    const { user } = useAuth() || {};
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://art-craft-server-ruby.vercel.app/myArt/${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setItems(data);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [user]);



// delete

      
const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
        fetch(`https://art-craft-server-ruby.vercel.app/art/${_id}`, {
            method: 'DELETE'
        })
        .then (res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                  Swal.fire(
             'Deleted!',
             "Your coffee has been deleted.",
             "success"
          )
        //   const remaining = coffees.filter(cof => cof._id !== _id);
        //   setCoffees(remaining);

            }
        })
        }
      });











    }

    return (
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.length === 0 ? (
                <p>No items found</p>
            ) : (
                items.map((item) => (
                    <div key={item._id} className="bg-white rounded-xl shadow-md overflow-hidden">
                        <figure>
                            <img src={item.photo} alt={item.item_name} className="w-full h-56 object-cover object-center" />
                        </figure>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{item.item_name}</h2>
                            <p className="text-gray-600 mb-2">Price: {item.price}</p>
                            <p className="text-gray-600 mb-2">Rating: {item.rating}</p>
                            <p className="text-gray-600 mb-2">Customization: {item.customization}</p>
                            <p className="text-gray-600 mb-2">Stock Status: {item.stock_status}</p>
                            <div className="flex justify-center">
                               <Link to={`/update/${item._id}`}>
                               <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Update</button>
                               </Link>
                                <button 
                              onClick={() => handleDelete(item._id)}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default CraftList;
