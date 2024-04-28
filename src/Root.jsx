import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";





const Root = () => {
    return (
            <div className="">
          <Navbar></Navbar>
          
          <FirebaseProvider></FirebaseProvider>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
       
    );
};

export default Root;