import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
  
function Wrapper() {
    return ( 
        <div>
           <Navbar></Navbar>
        <Outlet/>
        </div>
     );
}

export default Wrapper;