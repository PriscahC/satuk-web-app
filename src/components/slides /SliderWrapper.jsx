import React, { Children } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./slider.css"

function SliderWrapper(Children) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <Carousel items={1} arrows={false} showDots={true} autoPlay={true} responsive={responsive} infinite={true} slidesToSlide={1}>
        <div className="slide_card">
          <img src={ item.img} alt="image" srcset=""  className='slide_img'/>
          <div className="overlay">
              <span > {item.title} </span>
          </div>
        </div>
      </Carousel>
    </>

  );
}


export default SliderWrapper