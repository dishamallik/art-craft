import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div>
            <div className=" text-black text-center mt-20">
            
            <h1 className="font-bold text-8xl">404 
                <br />
                Error Page !
            </h1>
            <Link to="/" ><button className="btn btn-outline bg-blue-300 mt-5">Go home back</button></Link>
        </div>
        </div>
        </div>
    );
};

export default Error;