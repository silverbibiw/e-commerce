import React from "react";
import mainLogo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="container">
      <div>
        <img src={mainLogo} alt="" />
      </div>
      <ul>
        <li>About Us</li>
        <li>Contacts</li>
        <li>Terms & Conditions</li>
      </ul>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </footer>
  );
}

export default Footer;
