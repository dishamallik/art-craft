import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const {goggleLogin, githubLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);
const  from = location?.state || "/";

const  handleSocialLogin = socialProvider => {
    socialProvider().then(result => {
       if(result.user){
        navigate(from);
       }
       
    });
};





    return (
        <div className="text-center">
        <p> Login with   <button onClick={() => handleSocialLogin(goggleLogin)} className="btn btn-sm"><FcGoogle />
</button>
        </p>
        <p>Login with   <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-sm"><FaGithub /></button>
        </p>
        
     </div>
    );
};



export default SocialLogin;