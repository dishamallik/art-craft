import { Link } from "react-router-dom";


const Art = ({art}) => {
    const {_id, item_name, photo, subcategory_Name, price} =art;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 ">
    <img src={photo} />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item_name}</h2>
    <div className="flex gap-3">
    <p>{subcategory_Name}</p>
    <button className="btn btn-sm bg-red-400">{price}</button>
    </div>

    <div className="card-actions">
      <Link to={`/art/${_id}`} >
      <button className="btn btn-outline bg-green-300">View Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Art;