import React from "react";
import "../../styles/components/footer/Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className={"footer-container"}>
      <div>© Copyright: All rights reserved </div>
      <div className="follow">
        Follow us on
        <div className="icons">
          <MailIcon />
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
