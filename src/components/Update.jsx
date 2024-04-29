import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hook/useAuth";


const Update = () => {
 
    const { user } = useAuth();
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");

    useEffect(() => {
        if (user) {
            setUserEmail(user.email || "");
            setUserName(user.displayName || "");
        }
    }, [user]);

    const handleUpdateCraft = async (e) => {
        e.preventDefault();
        const form = e.target;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processing_time = form.processing_time.value;
        const photo = form.photo.value;
        const customization = form.customization.value;
        const stock_status = form.stock_status.value;
        const user_Email = userEmail;
        const user_name = userName;

        if (!item_name || !subcategory_Name || !short_description || !price || !rating || !processing_time || !photo || !customization || !stock_status) {
            Swal.fire({
                title: 'Error!!',
                text: 'Please fill in all the fields',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        const updateCraft = { user_name, user_Email, item_name, subcategory_Name, short_description, price, rating, processing_time, photo, customization, stock_status };

        try {
            const response = await fetch(`http://localhost:5000/art/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateCraft)
            });

            const data = await response.json();

            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!!',
                    text: 'Item updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            }
            
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }










    const art = useLoaderData();
   const  {_id, item_name, photo, subcategory_Name, price, short_description, rating, processing_time, customization, stock_status} =art;
    return (
        <div>
            <div className="container mx-auto">
            <div className="mt-10 mb-10">
                <div className="bg-[#e0ecd7] p-24">
                    <h2 className="text-3xl font-extrabold">update Craft : {item_name}</h2>
                    <form onSubmit={handleUpdateCraft}>
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Item Name:</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="item_name" 
                                    defaultValue={item_name}
                                    placeholder="Item Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Subcategory Name:</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="subcategory_Name"
                                    defaultValue={subcategory_Name}
                                     placeholder="Subcategory Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Short Description:</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="short_description"
                                    defaultValue={short_description}
                                    
                                    placeholder="Short Description" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Price:</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="price" placeholder="Price"
                                    defaultValue={price}
                                     className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Rating:</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="rating" placeholder="Rating"
                                    defaultValue={rating}
                                    
                                    className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Processing Time:</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="processing_time"
                                    defaultValue={processing_time}
                                    
                                    placeholder="Processing Time"
                                   
                                     className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="mb-8">
                            <label className="label">
                                <span className="label-text">Customization:</span>
                            </label>
                            <select name="customization"
                            defaultValue={customization}
                            
                            className="input input-bordered w-full">
                                <option value="">Select Customization</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="mb-8">
                            <label className="label">
                                <span className="label-text">Stock Status:</span>
                            </label>
                            <select name="stock_status"
                            defaultValue={stock_status} 
                            
                            className="input input-bordered w-full">
                                <option value="">Select Stock Status</option>
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                        </div>
                       
                   
                       
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">User Email:</span>
                                </label>
                                <label className="input-group">
                                    <input type="email" name="user_Email" value={userEmail} readOnly className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">User Name:</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="user_name" value={userName} readOnly className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        
                   
                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="photo"
                                    defaultValue={photo}
                                    
                                    placeholder="Photo URL" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Add" className="btn btn-block bg-green-300" />
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Update;