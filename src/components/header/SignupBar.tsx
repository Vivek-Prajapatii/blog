import React from "react";
import "../../styles/components/header/SignupBar.scss";
import MenuIcon from "@mui/icons-material/Menu";

function SignupBar() {
  return (
    <div className="signup-bar-container">
      <div className="subscribe">
        <MenuIcon className="menu-icon"/>
        <a>Subscribe</a>
      </div>
      <h1>Large</h1>
      <div className="search-bar-and-signup">
        <div className="search"></div>
        <button className="signup">Sign Up</button>
      </div>
    </div>
  );
}

export default SignupBar;
