import { NavLink } from "react-router-dom";
import Communet from "../assets/Communet.png";
import "./css/Navbar.css";
import { useState } from "react";
import { Spin as Hamburger } from 'hamburger-react'
import { FaArrowRight } from "react-icons/fa6";
import { useSelector,useDispatch } from "react-redux";
import { logout,checkLogIn } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from '../redux/store'


import { useToast } from "@/components/ui/use-toast"

function Navbar() {
  const dispatch = useDispatch();
  dispatch(checkLogIn());  // check if the user is logged in or not

  const isLogged = useSelector((state: RootState) => state.authorization.isLoggedIn);
  const navigate = useNavigate();

  const [isVertVisible, setVertVisible] = useState(true);
  
  const { toast } = useToast()
  
  function clickHandler() {
    console.log("clicked");
    setVertVisible(!isVertVisible);
  }
  return (
    <div className="nav_bar">
      <div>
        <NavLink to="/">
          <img src={Communet} className="logo h-18 w-18" alt="Communet logo" />
        </NavLink>
      </div>
      <div className={isVertVisible? "vert_nav":"vert_nav vert_visible"}>
        <div className="nav_options">
          
          <NavLink to="./" className="nav_option_text">
            Home
          </NavLink>
          <NavLink className="nav_option_text" to="https://medium.com/@alchemyrecloak/communet-2027d8f4f634">
            Blog
          </NavLink>
          <NavLink className="nav_option_text" to="./resources">
            Resources
          </NavLink>
          {
            isLogged ? <NavLink className="nav_option_text" to="./dashboard">
            Dashboard
            </NavLink> : null
          }
        </div>
        <div className="auth_buttons">
          {
          !isLogged ?
          (<NavLink
            to="./login"
            className="Sign_in"
            style={{ color: "white" }}
          >
            Log in <FaArrowRight />{" "}
          </NavLink>):
          (<div className="authrized_options">
          <button
          onClick={()=>{
            dispatch(logout());
            navigate('/');
            localStorage.removeItem('communet_user_sub');
            toast({
              title: "Logged out successfully ",
              className:" bg-green-100 text-green-600 tracking-wider",
            })
          }}
            className="authzed_buttn"
            style={{ color: "white" }}
          >
            Log out <FaArrowRight />{" "}
          </button></div>)
          }
        </div>
      </div>
      <div className="hamburger" onClick={clickHandler}>
        <Hamburger ></Hamburger>
      </div>
    </div>
  );
}

export default Navbar;
