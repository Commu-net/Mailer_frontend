import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster"
import './Wrapper.css'
function Wrapper() {
    return ( 
        <div className="wrapper">
         <Navbar></Navbar>
         <Outlet/>
         <Toaster />
        </div>
     );
}

export default Wrapper;