import React from 'react'
import styled from 'styled-components'
import { BenColor } from '../styles/ColorStyles'
import { headerHero } from '../styles/TextStyles'

const Hero = ({text, img}) => {
    
    return (
      <Herobody>

          <Heromain img={img}>
          <Herotext>{text}</Herotext>
              <Herooverlay/>
          </Heromain>
      </Herobody>
    )
}

const Herobody = styled.div`
width: 100%;
height: 660px;

@media only screen and (max-width: 650px){
    height: 350px;   
}
`
const Heromain = styled.div`
width: 100%;
height: 100%;
position: relative;
z-index: 3;
display: flex;
justify-content: center;
align-items: center;
background: url(${props => props.img}) no-repeat center center/cover;

`
const Herooverlay = styled.div`
width: 100%;
height: 100%;
top: 0;
left: 0;
content: "";
position: absolute;
z-index: 3;
background: linear-gradient(180deg, rgba(0, 0, 0, 0) 3.74%, #000000 98.12%);
`

const Herotext = styled(headerHero)`
color: ${BenColor.white};
position: relative;
z-index: 5;
max-width: 650px;
margin: 0 auto;
width: 100%;
padding: 10px 25px;
`
export default Hero
