import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
//import Slidedata from '../../data/Slidedata'
//import Slidecard from '../card_slide/Slidecard';

function SliderWrapper() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
    };
   
  return (
    <Slider {...settings}  >
      <div>
        <h1>1</h1>
      </div>
      <div>
      <h1>2</h1>
      </div>
      <div>
      <h1>3</h1>
      </div>
      <div>
      <h1>4</h1>
      </div>

    </Slider>
  )
}

export default SliderWrapper