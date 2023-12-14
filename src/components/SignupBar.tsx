import React from "react";
import "../styles/components/SignupBar.scss"

function SignupBar() {
  return (
    <div className="signup-bar-container">
      <div><a href="">Subscribe</a></div>
      <h1>Large</h1>
      <div className="search-bar-and-signup">
        <div className="search"></div>
        <button className="signup">Sign Up</button>
      </div>
    </div>
  );
}

export default SignupBar;
