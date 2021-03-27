import React, {useEffect} from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import { Container } from '../container/Container'
import events from '../images/events.jpg'
import large from '../images/large.jpg'
import Rectangle23 from '../images/Rectangle 23.jpg'
import Rectangle24 from '../images/Rectangle 24.jpg'
import Rectangle25 from '../images/Rectangle 25.jpg'
import Rectangle26 from '../images/Rectangle 26.jpg'
import { headerHero } from '../styles/TextStyles'
import { linkButton } from '../styles/ButtonStyle'
import { BenColor } from '../styles/ColorStyles'
import { EventsImageArr } from '../components/Event'
import Message from '../components/Message'
const Events = () => {

    useEffect(()=>{
document.title = "Events - Ben Waltz"
    },[])
    return (
       <Eventsbody>

       <Hero img={events} text="I have covered over 50 events within the last 2 years"/>
           <Container>
           <Eventssection>

               <Eventwrap>
                   <Eventheader>
                       <Eventhead>Popular Events</Eventhead>
                   </Eventheader>
                   <Eventswrapper>
                
                   {EventsImageArr.map(event=> 
                    <Imagewrap key={event.id}>
                   <Image src={event.image} alt="Ben Waltz Events"/>
                   </Imagewrap>
                  
                   )}
                   </Eventswrapper>
               </Eventwrap>
           </Eventssection>

           </Container>

           <Eventlarge>
<Eventoverlay/>
<Eventcover>    <Eventtext>I make every 
moment memorable</Eventtext>
<Eventbutton to='/contact'>Contact Me</Eventbutton></Eventcover>
</Eventlarge>

<Container>
    <Sectioned>
        <Sectionlarge>
<Largeimage>
    <Image src={Rectangle23} alt="Ben Waltz"/>
</Largeimage>
        </Sectionlarge>
        <Sectionmiddle>
        <Middleimage>
        <Image src={Rectangle24} alt="Ben Waltz"/>
        </Middleimage>
        <Middleimage>
        <Image src={Rectangle26} alt="Ben Waltz"/>
        </Middleimage>
        </Sectionmiddle>
        <Sectionend>
<Endimage>
<Image src={Rectangle25} alt="Ben Waltz"/>
</Endimage>
        </Sectionend>
    </Sectioned>
</Container>
<Message/>
       </Eventsbody>
    )
}

const Eventsbody = styled.div`
width: 100%;
height: 100%;
`

const Eventssection = styled.div`
width: 100%;
min-height: 400px;
`
const Eventwrap = styled.div`
width: 100%;
display: flex;
flex-direction: column;
min-height: 400px;
`
const Eventheader = styled.div`
margin: 40px 0;
min-height: 30px;
width: 100%;
`
const Eventhead = styled(headerHero)`
margin: 0;
`
const Eventswrapper = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
width: 100%;
grid-auto-rows: minmax(100px,auto);
grid-gap: 30px;
height: 100%;
align-items: center;
flex-direction: column;
grid-auto-rows: minmax(250px,auto);
place-items: center;
@media only screen and (max-width: 850px){
    grid-template-columns: repeat(2,1fr);
    grid-gap: 24px;
}

@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 24px;
}
`

const Imagewrap = styled.div`
height: 250px;
max-width: 300px;
width: 100%;
transition: 0.3s ease-in-out;
:hover{
    transform: scale(1.05);
}

`
const Image = styled.img`
height: 100%;
width: 100%;
transition: 0.3s ease-in;
:hover{
    opacity: 0.9;
}
`


const Eventlarge = styled.div`
width: 100%;
height: 600px;
margin: 96px 0;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
background: url(${large}) no-repeat fixed center center/cover;
position: relative;
`
const Eventoverlay = styled.div`
position: absolute;
content: "";
top: 0;
left: 0;
height: 100%;
width: 100%;
background: rgba(0,0,0,0.2);
z-index: 1;
`
const Eventcover = styled.div`
height: 100%;
width: 100%;
max-width: 490px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;

`
const Eventtext = styled(headerHero)`
width: 100%;
color: ${BenColor.white};
position: relative;
z-index: 4;
margin: 40px 0;
`

const Eventbutton = styled(linkButton)`
position: relative;
margin: 0;
z-index: 4;
`

const Sectioned = styled.div`
width: 100%;
min-height: 350px;
margin: 24px 0;
display: grid;
grid-template-columns: 2fr 1fr 1fr;
grid-auto-rows: minmax(150px,auto);
grid-gap: 30px;
@media only screen and (max-width: 650px){
    grid-template-columns: 1fr;  
}
`
const Sectionlarge = styled.div`
width: 100%;
height: 100%;
max-height: 450px;
`
const Largeimage = styled.div`
height: 100%;
width: 100%;
`
const Sectionmiddle = styled.div`
width: 100%;
height: 100%;
max-height: 450px;
display: grid;
grid-gap: 10px;
grid-template-rows: repeat(2,1fr);


`
const Middleimage = styled.div`
min-height: 150px;
width: 100%;


`

const Sectionend = styled.div`
width: 100%;
height: 100%;
max-height: 450px;
`
const Endimage = styled.div`
height: 100%;
width: 100%;
`

export default Events
