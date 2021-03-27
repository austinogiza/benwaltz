import React from 'react'
import styled from 'styled-components'
import { EventsImageArr } from './Event'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderComp = () => {

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 2500,
      cssEase: "linear",
      pauseOnHover: false,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 5,
        
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
         
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]

    };
    return (
       <Slidecover >
           <Slider {...settings}  >
               {EventsImageArr.map(event=> 
                <Slidewrap key={event.id}>
                   <Image src={event.image} alt="Ben Waltz"/>
               </Slidewrap>
               )}
            
           </Slider>
       </Slidecover>

       
    )
}



const Slidecover = styled.div`
height: 250px;
width: 100%;
overflow: hidden;
margin: 64px 0 0 0;
`

const Slidewrap = styled.div`
width: 200px;
height: 200px;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;

`

const Image = styled.img`
width: 100%;
height: 100%;
`
export default SliderComp
