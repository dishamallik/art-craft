import {  Link, NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";


const Navbar = () => {
    const  {logout, user} = useAuth()
const navLinks = <>
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/craft">All Art & craft Items</NavLink></li>
<li><NavLink to="/Add">Add Craft Item</NavLink></li>
<li><NavLink to="/List">My Art&Craft List</NavLink></li>


</>






    return (
        <div className="">
             <div className="">
        <div className="  navbar bg-green-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-lime-200 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-Display font-bold ">ArtVibes</a>
  </div>
  <div className="navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg font-bold">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end ">
    { user?
   <div className="dropdown dropdown-end">
   <div className="flex">
   <div>
   <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
     <div className="w-10 rounded-full">
       <img alt="" src={user?.
    photoURL
     || "https://i.ibb.co/df04xnj/user.jpg"} />
       <div className="absolute top-7 left-0 right-0 bg-opacity-50 transition-opacity opacity-0 hover:opacity-100 hover:bg-green-300 hover:rounded-lg  hover:text-white">
        <div className="text-black text-center py-2 ">
        {user?.displayName || "user not found"}</div>
    </div>
     </div>
   </div>
   
   </div>
   <div onClick={logout} ><button className="btn bg-amber-100 ">logOut</button></div>
   </div>
   </div>
      
      :
      <div className="flex gap-3">
      <Link to="/login"> <button className="btn btn-outline bg-amber-100">log in</button></Link>
      <Link to="/register"><button className="btn btn-outline bg-amber-100">Register</button></Link>


      </div>
}
  </div>
</div>
</div>
        </div>
    );
};

export default Navbar;