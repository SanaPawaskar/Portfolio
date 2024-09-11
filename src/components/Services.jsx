import React, { useContext } from "react";
import "./Style.css";
import Card from "./Card";
import HeartEmoji from "../img/heartemoji.png";
import Glasses from "../img/glasses.png";
import Humble from "../img/humble.png";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Resume.pdf';

const Services = () => {
  // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span >My</span> <span>Skills</span>
        <span>
        Certification done in  full stack developer
        (MERN)<br /> Web developer
         </span>
  <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
 <div className="cards">
<motion.div initial={{ left: "25rem", top:" -1rem" }}
     whileInView={{ left: "14rem" }} transition={transition}>
    <Card  emoji={HeartEmoji}  heading={"Backend"} detail={"Nodejs, Expressjs, Mongodb"}/>
 </motion.div>
 <motion.div  initial={{ left: "-11rem", top: "10rem" }} whileInView={{ left: "-4rem" }}
     transition={transition} >
 <Card emoji={Glasses} heading={" Frontend "}
 detail={"Html, Css, Bootstrap, JavaScript, React,"}/>
 </motion.div>
 <motion.div initial={{ top: "15rem", left: "24rem" }} whileInView={{ left: "12rem" }}
     transition={transition}>
 <Card  emoji={Humble} heading={"Development"}
  detail={ "Docker, Agil Scrum Master" }
   color="rgba(252, 166, 31, 0.45)"/>
</motion.div>
  <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;