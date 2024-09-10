import React, { useContext } from "react";
// import { themeContext } from "../../Context";
// import "./Experience.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import AOS from "aos"
const Experience = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  AOS.init();
  return (
    <div className="experience" id='experience'>
  <div className="exper-box-left" data-aos="fade-left" data-aos-duration="1500">
      <div className="heading-exper">
      <h2 className="h-1-tag">1click capital </h2>
      <h4>Frontend Developer</h4>
      <span>2022-2023</span>
      </div>
      <p>Worked as a front-end developer, analyzing requirements, designing,
       and integrating corporate websites. Experienced in using  GSAP animations with CSS classes.
        Implemented improvements in web responsiveness and functionality; performed testing and validation. 
        Participated in pre-project analysis and technical assessments to ensure user-friendly interfaces. 
         Was awarded Best Employee of the Month (Nov-Dec 2022)</p>
     </div>
     <div className="exper-box-right" data-aos="fade-right" data-aos-duration="1500">
     <div className="heading-exper">
      <h2 className="h-1-tag">Stalwart Technocrats </h2>
      {/* <h4>Frontend Developer	</h4> */}
      <span>2021 - 2022</span>
      </div>
      <p>As a Trainee Frontend Developer, I contributed to creating websites using HTML, CSS, and JavaScript.
         My responsibilities included developing user interfaces, implementing responsive design, and
          ensuring cross-browser compatibility. 
         to deliver high-quality, visually appealing, and functional websites.</p>
      
     </div>
     <div className="exper-box-left" data-aos="fade-left" data-aos-duration="1500">
     <div className="heading-exper">
      <h2 className="h-1-tag">Freelance Web Developer</h2>
      </div>
      <p>Creating websites for clients with highly motivated Freelance Web Developers with years of
         experience designing and developing dynamic and visually appealing websites.
   	http://razasofttech.com/
   	Sky Dreamers CRM 
   	Sap engineering website
</p>
     
     </div>
<div  className="exper-box-right" data-aos="fade-right" data-aos-duration="1500">
<h2 className="h-1-tag"> Independent Study and Exam Preparation</h2> 
<h4>UPSC Exam Preparation - 2020 – 2021</h4>
<p>Dedicated one year to rigorous study and preparation for 
  the highly competitive UPSC exam. Developed strong time management, 
  self-discipline. Enhanced research abilities and deepened understanding of diverse subjects.
  </p>
</div>
  
    </div>
  );
};

export default Experience;