import { NavLink } from "react-router-dom";
import Communet from "../assets/Communet.png";
import "./Navbar.css";
import { useState } from "react";
import { Spin as Hamburger } from 'hamburger-react'
import { FaArrowRight } from "react-icons/fa6";

function Navbar() {
  const [isVertVisible, setVertVisible] = useState(true);
  function clickHandler() {
    console.log("clicked");
    setVertVisible(!isVertVisible);
  }
  return (
    <div className="nav_bar">
      <div>
        <NavLink to="/Home">
          <img src={Communet} className="logo h-18 w-18" alt="Communet logo" />
        </NavLink>
      </div>
      <div className={isVertVisible? "vert_nav":"vert_nav vert_visible"}>
        <div className="nav_options">
          <NavLink to="./about" className="nav_option_text">
            About us
          </NavLink>
          <NavLink className="nav_option_text" to="./blog">
            Blog
          </NavLink>
          <NavLink className="nav_option_text" to="./resources">
            Resources
          </NavLink>
        </div>
        <div className="auth_buttons">
          <NavLink to="./auth/signin" className="Sign_in">
            Sign in
          </NavLink>
          <NavLink
            to="./auth/signup"
            className="Sign_up"
            style={{ color: "white" }}
          >
            Sign up <FaArrowRight />{" "}
          </NavLink>
        </div>
      </div>
      <div className="hamburger" onClick={clickHandler}>
        <Hamburger ></Hamburger>
      </div>
    </div>
  );
}

export default Navbar;
