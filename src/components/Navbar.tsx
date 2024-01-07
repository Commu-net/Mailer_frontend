import { NavLink } from "react-router-dom";
import Communet from "../assets/Communet.png";
import './Navbar.css'
import { FaArrowRight } from "react-icons/fa6";

function Navbar() {
  return (
    <div className='nav_bar max-w-[1104px] h-20 flex justify-between items-center'>
      <div>
        <NavLink to="/Home">
          <img src={Communet} className="logo h-18 w-18" alt="Communet logo" />
        </NavLink>
      </div>
      <div>
        <NavLink to="./about">About us</NavLink>
        <NavLink to="./blog">Blog</NavLink>
        <NavLink to="./resources">Resources</NavLink>
      </div>
      <div>
        <NavLink to="./auth/signin">Sign in</NavLink>
        <NavLink to="./auth/signup">Sign up <FaArrowRight /> </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
