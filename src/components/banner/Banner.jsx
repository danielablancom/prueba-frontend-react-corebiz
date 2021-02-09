import React from "react";
import Slider from "react-slick";
import './../banner/Banner.css'; 
import banner from './../../statics/banner.jpg'; 

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
       <img src={banner} alt="banner"></img>
      </div>
      <div>
       <img src={banner} alt="banner"></img>
      </div>
      <div>
       <img src={banner} alt="banner"></img>
      </div>
      <div>
       <img src={banner} alt="banner"></img>
      </div>
    </Slider>
  );
}

export default Banner; 