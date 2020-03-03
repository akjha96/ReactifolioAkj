import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./image-carousal.style.css";
import Slide1 from "../../assets/img/slide1.jpg";
import Slide2 from "../../assets/img/slide2.jpg";
import Slide3 from "../../assets/img/slide3.jpg";

const ImageCarousal = () => (
  <div>
    <div className="overlay"></div>
    <Carousel autoPlay showArrows={false} showStatus={false} showThumbs={false} infiniteLoop stopOnHover={false} interval={2500}>
      <div>
        <img src={Slide3} alt="" />
      </div>
      <div>
        <img src={Slide2} alt="" />
      </div>
      <div>
        <img src={Slide1} alt="" />
      </div>
    </Carousel>
  </div>
);
export default ImageCarousal;
