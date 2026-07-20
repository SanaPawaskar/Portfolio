
import AOS from "aos"
const Experience = () => {

  AOS.init();
  return (
    <div className="experience" id='experience'>
        <div className="exper-box-left" data-aos="fade-left" data-aos-duration="1500">
     <div className="heading-exper">
      <h2 className="h-1-tag">Freelance Web Developer</h2>
      </div>
      <p>Freelance Full Stack Developer specializing in modern, responsive websites built with React.js, MERN, and AI-powered development tools. I help businesses turn ideas into fast, scalable, and user-friendly digital experiences.
</p>
     
     </div>
 <div className="exper-box-right" data-aos="fade-left" data-aos-duration="1500">
      <div className="heading-exper">
      <h2 className="h-1-tag">SAP Enginerring</h2>
      <h4>Software Developer</h4>
      {/* <span>2024-2026</span> */}
      </div>
      <p>Developed an inventory management system (MERN stack) to streamline stock tracking and procurement workflows. Implemented authentication (JWT), CRUD features, status tracking, PDF generation, and data visualizations. Handled end-to-end development including requirement gathering, wireframing, and deployment (MongoDB Atlas, Express middleware).Integrated AI technologies for enhanced UX (e.g., ChatGPT API for intelligent automation).</p>
     </div>

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
   
<div  className="exper-box-left" data-aos="fade-right" data-aos-duration="1500">
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