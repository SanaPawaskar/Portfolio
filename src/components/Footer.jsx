import React from "react";
import "./Style.css";
import Wave from "../img/wave.png";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="gmail-link">
        <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
        sanapawaskar5112@gmail.com  
      </a>
    
        </span>
       
        <div className="f-icons">
        <a href="https://github.com/SanaPawaskar" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="Example" />
      </a>
      <a href="https://www.linkedin.com/in/sana-pawaskar/" target="_blank" rel="noopener noreferrer">
        <img src={LinkedIn} alt="Example" />
      </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;