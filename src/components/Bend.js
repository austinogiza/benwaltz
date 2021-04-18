import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { outlineButton } from '../styles/ButtonStyle'
import { BenColor } from '../styles/ColorStyles'
import { headerHero, mainText,eventsHero } from '../styles/TextStyles'

const Bend = () => {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 2500,
      cssEase: "linear",
      pauseOnHover: false,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
         
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]

    };
    return (
      <Body>

          <ContainerBody>
          <Reviewheader><Reviewh1>What you get with Ben Waltz</Reviewh1>
          <Gridtitletext>An effective communicator, socially adaptable with high emotional intelligence.
We engage your guests  fully, leaving them with a 'wow' experience.
</Gridtitletext>
          </Reviewheader>
        
          
          <Gridcover>
          <Slider  {...settings} >
          <Gridbox>
          <Reviewh2>Weddings</Reviewh2>
          
          </Gridbox>

          <Gridbox>
          <Reviewh2>Corporate events</Reviewh2>
          
          </Gridbox>

          <Gridbox>
          <Reviewh2>Seminars</Reviewh2>
          
          </Gridbox>
          <Gridbox>
          <Reviewh2>Social events</Reviewh2>
          
          </Gridbox>
          <Gridbox>
          <Reviewh2>Birthdays</Reviewh2>
          
          </Gridbox>
          <Gridbox>
          <Reviewh2>House-warming</Reviewh2>
          
          </Gridbox>
          <Gridbox>
          <Reviewh2>Church functions</Reviewh2>
          
          </Gridbox>

          </Slider>
          </Gridcover>
<Gridbutton to='/reviews'>Contact Us</Gridbutton>

          </ContainerBody>
        
      </Body>
    )
}

const Body = styled.div`
min-height: 800px;
width: 100%;
clip-path: polygon(0 10%, 100% 0,100% 90%, 0 100% );
background: ${BenColor.blue};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ContainerBody = styled.div`
width: 100%;
min-height: 460px;
margin: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 200px 20px;
`
const Gridbox = styled.div`
width: 100%;
height: 200px;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
`

const Reviewheader = styled.div`
width: 100%;
min-height: 120px;
max-width: 850px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 25px;
`
const Gridcover = styled.div`
height: 100px;
width: 100%;
overflow: hidden;
margin: 8px 0;
`

const Reviewh1 = styled(headerHero)`
margin: 16px 0;
`
const Reviewh2 = styled(eventsHero)`
margin: 16px 0;
text-align: left;

`

const Gridtitletext = styled(mainText)`
margin: 0;
color: ${BenColor.grey};

`
const Gridbutton = styled(outlineButton)`
margin: 40px 0 0 0;
`
export default Bend
