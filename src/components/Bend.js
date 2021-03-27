import React from 'react'
import styled from 'styled-components'
import { outlineButton } from '../styles/ButtonStyle'
import { BenColor } from '../styles/ColorStyles'
import { headerHero, mainText } from '../styles/TextStyles'

const Bend = () => {
    return (
      <Body>

          <ContainerBody>
          <Reviewheader><Reviewh1>What you get with Ben Waltz</Reviewh1>
          <Gridtitletext> I MC weddings, corporate events, seminars, social events, birthdays, housewarming, church functions and lots more.</Gridtitletext>
          </Reviewheader>
        
          <Gridcover>

          </Gridcover>
<Gridbutton to='/reviews'>Contact Me</Gridbutton>

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
const Gridcover = styled.div`
width: 100%;
min-height: 200px;
display: grid;
grid-template-columns: repeat(4,1fr);
margin: 80px 0;
grid-auto-rows:  minmax(300px, auto);
grid-gap: 150px;
grid-row-gap: 114px;

@media only screen and (max-width: 780px){
    grid-gap: 40px;
    grid-template-columns: repeat(1,1fr);
}

@media only screen and (max-width: 650px){
    grid-gap: 32px;
    grid-template-columns: repeat(1,1fr);
    grid-row-gap:32px;
    grid-auto-rows:  minmax(150px, auto);

}
`

const Reviewheader = styled.div`
width: 100%;
min-height: 120px;
max-width: 550px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Reviewh1 = styled(headerHero)`
margin: 16px 0;
`
const Gridtitletext = styled(mainText)`
margin: 0;
color: ${BenColor.grey};

`
const Gridbutton = styled(outlineButton)`
margin: 40px 0;
`
export default Bend
