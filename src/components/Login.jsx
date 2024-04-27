import {  useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";


const Login = (user) => {
    // error massage
    const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
    
      const handleLogin = () => {
        
        if (email === user.email && password === user.password) {
       
          alert('Login successful!');
        }
      };
    
    
       
            const {sigInUser} = useAuth();
            const {
                register,
                handleSubmit,
               
                formState: { errors },
              } = useForm()
    
              // navigation 
    const navigate = useNavigate();
    const location = useLocation();
    
    const  from = location?.state || "/";
    // 
            
              const onSubmit = data => {
                const {email, password} = data;
    
                sigInUser(email, password)
                .then(result => {
                    if(result.user){
                        Swal.fire({
                            icon: 'success',
                            title: 'Login Successful!',
                            text: 'You have been successfully Login.',
                            confirmButtonText: 'OK'
                        }).then(() => {
                            navigate(from);
                        });
                     
                    } 
                    
                    
                 })
                 .catch(error => {
                    setError('Invalid email or password');
                    console.error('Login Error:', error); 
                });
                
    
              };
   
        
        
        return (
    
    <div>
    
    
            
            <div className="hero min-h-screen bg-base-200" data-aos="zoom-in-up">
      <div className="hero-content flex-col ">
        <div className="text-left">
          <h1 className="text-5xl  text-blue-800 font-bold">Login now!</h1>
          
        </div>
        <div className="card shrink-0 lg:w-96 max-w-sm shadow-2xl bg-blue-50">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
    
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="input input-bordered" 
              {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
    
    
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="input input-bordered" 
              {...register("password", { required: true })} 
              />
              {errors.password && <span>This field is required</span>}
              <label className="label">
                
              </label>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div onClick={handleLogin} className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>new to ArtVibes? please <Link to="/register"><button className=" btn-link">Register</button></Link></p>
            
    
           
            
          </form>
    
    <div>
    <SocialLogin></SocialLogin>
    </div>
          
         
        </div>
      </div>
    </div>
    
    </div>
        );
    
    };

export default Login;