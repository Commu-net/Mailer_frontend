import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import './Wrapper.css'
function Wrapper() {
    return ( 
        <div className="wrapper">
         <Navbar></Navbar>
         <Outlet/>
        </div>
     );
}

export default Wrapper;