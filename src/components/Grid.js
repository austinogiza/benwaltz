import React from 'react'
import styled from 'styled-components'
import { Container } from '../container/Container'
import { BenColor } from '../styles/ColorStyles'
import {mainText,headerHero} from '../styles/TextStyles'
import {linkButton} from '../styles/ButtonStyle'
const Grid = () => {
    return (
       <Body>

           <Container>
           <Gridtitle><Gridtitleh1>I anchor events</Gridtitleh1>
           <Gridtitletext>They call me the PREMIUM MASTER OF CEREMONIES</Gridtitletext>
           </Gridtitle>

           <Gridcover>

         
                   <GridtopImage>
                       <Image src="https://res.cloudinary.com/dgssnxknb/image/upload/v1616716119/top_iyawbp.jpg" alt="Ben Waltz Photos"/>
                   </GridtopImage>
                   <Gridtopdetails>
                   <Gridh1> Extraordinary MC </Gridh1>
           <Gridtext>I am an extraordinary MC with the zest to create unforgettable memories and turn your ideas into reality , with an amazing atmosphere seamlessly.</Gridtext>
<Gridbutton to='/contact'>Contact Me</Gridbutton>
                   </Gridtopdetails>

<Gridcenterdetails>
<Gridh1>More Than A MC</Gridh1>
           <Gridtext>
I help you create an extraordinary way to celebrate with the one person in your life that matters most
</Gridtext>
</Gridcenterdetails>
                   <GridcenterImage>
                   <Image src="https://res.cloudinary.com/dgssnxknb/image/upload/v1616716119/middle_flxs5w.jpg" alt="Ben Waltz Photos"/>
                   </GridcenterImage>
                   <GridbottomImage>
                   <Image src="https://res.cloudinary.com/dgssnxknb/image/upload/v1616716119/bottom_sm6ctu.jpg" alt="Ben Waltz Photos"/>   
                   </GridbottomImage>
                   <Gridbottomdetails>
                   <Gridh1>I bring you joy</Gridh1>
           <Gridtext>This is what I do for a living to bring you joy and laughter all the way to even after the event, For every beginning there is an end but I make sure you enjoy your big day from start to finish</Gridtext>
           <Gridbutton to='/contact'>Contact Me</Gridbutton>
                   </Gridbottomdetails>
            
           </Gridcover>


           </Container>
       </Body>
    )
}


const Body = styled.div`
width: 100%;
min-height: 600px;
margin: 0;
`
const Gridtitle = styled.div`
width: 100%;
min-height: 50px;
text-align: center;
margin: 40px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Gridtitleh1 = styled(headerHero)`
margin: 16px 0;
`
const Gridtitletext = styled(mainText)`
margin: 0;
color: ${BenColor.grey};

`
const Gridh1 = styled(headerHero)`
margin: 16px 0;
text-align: left ;
`
const Gridtext = styled(mainText)`
margin: 0;
color: ${BenColor.grey};
text-align: left ;
`
const Gridcover = styled.div`
width: 100%;
min-height: 500px;
display: grid;
grid-template-columns: repeat(2,1fr);
margin: 80px 0;
grid-auto-rows:  minmax(300px, auto);
grid-gap: 150px;
grid-row-gap: 114px;

grid-template-areas: "GridtopImage Gridtopdetails"
"Gridcenterdetails GridcenterImage"
"GridbottomImage Gridbottomdetails";


@media only screen and (max-width: 780px){
    grid-gap: 40px;
}

@media only screen and (max-width: 650px){
    grid-gap: 32px;
    grid-template-columns: repeat(1,1fr);
    grid-row-gap:32px;
    grid-auto-rows:  minmax(150px, auto);

    grid-template-areas: "GridtopImage"
    "Gridtopdetails"
"GridcenterImage"
"Gridcenterdetails"
"GridbottomImage"
"Gridbottomdetails";
}
`
        
const GridtopImage = styled.div`
grid-area:GridtopImage;
max-width: 450px;
width: 100%;
min-height: 300px;
`
const Image = styled.img`
height: 100%;
width: 100%;
`
const Gridtopdetails = styled.div`
grid-area:Gridtopdetails;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const Gridcenterdetails = styled.div`
grid-area:Gridcenterdetails;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const GridcenterImage = styled.div`
grid-area:GridcenterImage;
max-width: 450px;
width: 100%;
min-height: 300px;
`
const GridbottomImage = styled.div`
max-width: 450px;
grid-area:GridbottomImage;
width: 100%;
min-height: 300px;
`
const Gridbottomdetails = styled.div`
height: 100%;
grid-area:Gridbottomdetails;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`

const Gridbutton = styled(linkButton)`
margin: 40px 0;
`
export default Grid


