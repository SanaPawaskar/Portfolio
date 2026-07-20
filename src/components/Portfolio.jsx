import "./Style.css";
import Sidebar from "../img/Untitled.png";
import Yallah from "../img/Yallah.png"
import ss2 from "../img/ss2.png"
import ss4 from "../img/ss4.png"
import ss3 from "../img/ss3.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Portfolio = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span >Recent Projects</span>
      <Slider {...settings} className="slider-class">
      <div className="slide-box">
      <img src={Sidebar} alt="" />
      </div>
            <a href="https://inventory-system-sap.vercel.app/login" target="_blank" rel="noopener noreferrer">
  <div className="slide-box">
    <img src={ss3} alt="inventory-system-sap" />
  </div>
</a>
          <a href="https://healthcare-ai-4aor.vercel.app//" target="_blank" rel="noopener noreferrer">
  <div className="slide-box">
    <img src={ss4} alt="health care sample website" />
  </div>
</a>
        <a href="https://bridgewater.ae/" target="_blank" rel="noopener noreferrer">
  <div className="slide-box">
    <img src={ss2} alt="Bridge water" />
  </div>
</a>
     <a href="https://www.yallahaji.in/" target="_blank" rel="noopener noreferrer">
  <div className="slide-box">
    <img src={Yallah} alt="Yallah Haji" />
  </div>
</a>

    </Slider>
    </div>
  );
};

export default Portfolio;