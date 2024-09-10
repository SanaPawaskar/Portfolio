import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "./Style.css";
import Sidebar from "../img/Untitled.png";
import Ecommerce from "../img/Mern.png";
import HOC from "../img/todo.png";

// import { themeContext } from "../../Context";
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
      <div className="slide-box">
      <img src={Ecommerce} alt="" />
      </div>
      <div className="slide-box">
      <img src={HOC} alt="" />
      </div>
      <div className="slide-box">
      <img src={Ecommerce} alt="" />
      </div>
    </Slider>
    </div>
  );
};

export default Portfolio;