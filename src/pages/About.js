import React, { useEffect } from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import { Container } from '../container/Container'
import bg from '../images/bg.jpg'
import ben from '../images/ben.jpg'
import benwaltz from '../images/benwaltz1.jpg'
import benwaltz1 from '../images/benwaltz2.jpg'
import couple from '../images/couple-with-ben.jpg'

import { headerHero,bodyText,moderateHero } from '../styles/TextStyles'
import { BenColor } from '../styles/ColorStyles'
import { linkButton } from '../styles/ButtonStyle'
import Message from '../components/Message'


const About = () => {
    useEffect(() => {
 

 document.title = "About Me - Ben Waltz"
}, [])
    return (
       <Aboutpage>
       <Hero text="About Me" img={bg}/>
         <Container>

        <Aboutcontainer>
        <Aboutprev>
             <Prevhead>About Me</Prevhead>
             <Prevtext>
             I am an extraordinary MC with the zest to create unforgettable memories and turn your ideas into reality , with an amazing atmosphere seamlessly.

             </Prevtext>
         </Aboutprev>
        </Aboutcontainer>

        <List>
                 <Listwrap>
                 <Listcover><Image src={ben} alt="Ben Waltz" /></Listcover>
                 <Listcover><Image  src={benwaltz} alt="Ben Waltz" /></Listcover>
                 <Listcover><Image  src={benwaltz1} alt="Ben Waltz" /></Listcover>
                 </Listwrap>
                 </List>



                 <Mesection>
         <Mewrap>
             <Meimage>
             <Image src={couple} alt="Ben Waltz" />
             </Meimage>
             <Medets>
                 <Meheader>They call me the PREMIUM MASTER OF CEREMONIES
</Meheader>
<Metext>I have covered over 50 events within the last 2 years and well known in Lagos

I MC weddings, corporate events, seminars, social events, birthdays, housewarming, church functions and lots more.</Metext>
<Mebutton to='/contact'>Contact Me</Mebutton>
             </Medets>
         </Mewrap>
      
         </Mesection>
         <Aboutcontainer>

         
        <Aboutprev>
             <NewPrevhead>I create an extraordinary way to celebrate with the one person in your life that matters most</NewPrevhead>
             <Prevtext>
             This is what I do for a living to bring you joy and laughter all the way to even after the event, For every beginning there is an end but I make sure you enjoy your big day from start to finish


             </Prevtext>
         </Aboutprev>
         <Aboutbutton to='/contact'>Contact Me</Aboutbutton>
        </Aboutcontainer>


         </Container>
         <Message/>
       </Aboutpage>
    )
}

const Aboutpage = styled.div`
width: 100%;
min-height: 500px;
`
const Aboutcontainer = styled.div`
width: 100%;
min-height: 200px;
max-width: 800px;
margin: 32px auto;
display: flex;
align-items: center;
flex-direction: column;

@media only screen and (max-width: 650px){
    margin: 16px auto;
}
`
const Aboutprev = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
width: 100%;
margin: 0;
`
const Prevhead = styled(headerHero)`
text-align: left;
margin: 24px 0;
@media only screen and (max-width: 650px){
    margin: 16px 0;
}
`

const NewPrevhead = styled(moderateHero)`
text-align: left;
margin: 24px 0;
@media only screen and (max-width: 650px){
    margin: 16px 0;
}
`
const Prevtext = styled(bodyText)`
text-align: left;
margin: 0;
color: ${BenColor.grey};
`
const Aboutbutton = styled(linkButton)`
margin: 40px 0  0 0;
`


const List = styled.div`
width: 100%;
min-height: 200px;
max-width: 1100px;
margin: 32px auto;

@media only screen and (max-width: 650px){
    margin: 16px auto;
}

`
const Listwrap = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
width: 100%;
grid-auto-rows: minmax(100px,auto);
grid-gap: 40px;
height: 100%;
align-items: center;
flex-direction: column;
place-items: center;
margin: 0 auto;
@media only screen and (max-width: 750px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 24px;
}
`
const Listcover = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
max-width: 330px;
min-height: 300px;
width: 100%;
transition: 0.3s ease-in-out;
:hover{
    transform: scale(1.05);
}
`

const Image = styled.img`
height: 100%;
width: 100%;
`

const Mesection = styled.div`
min-height: 500px;
width: 100%;
margin: 80px 0;

@media only screen and (max-width: 750px){
    margin: 40px 0;
}
`
const Mewrap = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
width: 100%;
grid-auto-rows: minmax(300px,auto);
grid-gap: 100px;
height: 100%;
margin: 0 auto;
@media only screen and (max-width: 750px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 24px;
}
`
const Meimage = styled.div`
width: 100%;
height: 100%;
max-width: 500px;
`
const Medets = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: center;
`
const Meheader = styled(moderateHero)`
text-align: left;
margin: 24px 0;
`
const Metext = styled(bodyText)`
text-align: left;
margin: 0;
color: ${BenColor.grey};
`
const Mebutton = styled(linkButton)`
margin: 40px 0;
`
export default About
