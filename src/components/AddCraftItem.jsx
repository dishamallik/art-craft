

const AddCraftItem = () => {
    return (
        <div className="container mx-auto ">
            <div className="mt-10 mb-10">
             <div className="bg-[#e0ecd7] p-24">
            <h2 className="text-3xl font-extrabold">Add Craft</h2>
            <form >
                
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">item_name:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="item_name" placeholder="item_name" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">subcategory_Name:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory_Name" placeholder="subcategory_Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
             
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">short description:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="short_description" placeholder="short description" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">price:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">rating:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">processing_time:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processing_time" placeholder="processing_time" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
              
                
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Email:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" 
                            
                            name="User_Email" placeholder="User Email" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">User Name:</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                            
                            name="User_Name" placeholder="User Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5  mb-8">
                {/* Customization */}
                <div className="mb-8">
                    <label className="label">
                        <span className="label-text">Customization:</span>
                    </label>
                    <select name="customization" className="input input-bordered w-full" >
                        <option value="">Select Customization</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                {/* Stock Status */}
                <div className="mb-8">
                    <label className="label">
                        <span className="label-text">Stock Status:</span>
                    </label>
                    <select name="stock_status" className="input input-bordered w-full" >
                        <option value="">Select Stock Status</option>
                        <option value="In stock">In stock</option>
                        <option value="Made to Order">Made to Order</option>
                    </select>
                </div>

                
              </div>
              
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

             

                <input type="submit" value="Add " className="btn btn-block bg-green-300" />

            </form>
        </div>
        </div>
        </div>
    );
};

export default AddCraftItem;