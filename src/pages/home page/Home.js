import React from 'react'
import SliderWrapper from '../../components/slides/SliderWrapper'

function Home() {
  return (
    <div className="home"> 
    <div className="topcontainer">
      <div className="wrapper">
          <div className="slider">
              <SliderWrapper />
          </div>
          <div className="my_profile">
            <img src="../../public/pictures/content.jpg" alt="profile" srcset="" />
          </div>
        </div>

    </div>
    </div>
  )
}

export default Home