import React from 'react'
import styled from 'styled-components'
import { BenColor } from '../styles/ColorStyles'
import { headerHero, smallText } from '../styles/TextStyles'

const HomeHero = ({text, img, smalltext}) => {
    
    return (
      <Herobody>

          <Heromain img={img}>
         <Herowrap> 
         <Herotext>{text}</Herotext>
          <Herosmalltext>{smalltext}</Herosmalltext>
          
          </Herowrap>
              <Herooverlay/>
          </Heromain>
      </Herobody>
    )
}

const Herobody = styled.div`
width: 100%;
height: 600px;

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
justify-content: flex-start;
align-items: flex-start;
background: url(${props => props.img}) no-repeat center center/cover;
@media only screen and (max-width: 650px){

justify-content: center;
align-items: center;
}
`


const Herooverlay = styled.div`
width: 100%;
height: 100%;
top: 0;
left: 0;
content: "";
position: absolute;
z-index: 3;
background: rgba(0, 0, 0, 0.4);
`

const Herowrap = styled.div`
max-width: 650px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
position: relative;
z-index: 5;
padding: 10px 25px;
margin: 0 0 0 60px;

@media only screen and (max-width: 650px){
    margin: 0 ;
justify-content: center;
align-items: center;
}
`

const Herotext = styled(headerHero)`
color: ${BenColor.white};
position: relative;
z-index: 5;
width: 100%;
margin: 24px 0;
text-align: left;

@media only screen and (max-width: 650px){

text-align: center;
}
`

const Herosmalltext = styled(smallText)`
margin: 0;
color: ${BenColor.offWhite};
/* opacity: 0.9; */
width: 100%;
text-align: left;
@media only screen and (max-width: 650px){

text-align: center;
}
`
export default HomeHero
