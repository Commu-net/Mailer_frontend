import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/toaster"
import './Wrapper.css'
function Wrapper() {
    return ( 
        <div className="wrapper">
         <Navbar></Navbar>
         <Outlet/>
         <Toaster />
         <Analytics />
        </div>
     );
}

export default Wrapper;