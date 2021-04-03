import React from 'react'
import styled from 'styled-components'
import { BenColor } from '../styles/ColorStyles'
import {mainText,headerHero} from '../styles/TextStyles'
import {AiOutlineInstagram,AiFillFacebook,AiFillYoutube,AiOutlineWhatsApp} from 'react-icons/ai'

const Social = () => {
    return (
    <Body>
    <Messagecover>


           <Gridtext>Keep In Touch</Gridtext>
           <Gridh1> Follow Me On Social Media </Gridh1>
<Gridbutton>

<a rel="noreferrer noopener" href="https://www.instagram.com/benwaltz/" target="_blank">
<Instgram />

</a>
<a rel="noreferrer noopener" href="https://www.facebook.com/mcbenwaltz/" target="_blank">
<Facebook />

</a>
<a rel="noreferrer noopener" href="https://www.youtube.com/channel/UCVYPt15mmNR0QoOZ7mbA7kQ" target="_blank">
<YouTube />

</a>

<a rel="noreferrer noopener" href="https://api.whatsapp.com/send?phone=2348188711699&text=Hello%20Benwaltz,%20I%20got%20your%20contact%20from%20your%20website." target="_blank">
<WhatsApp />

</a>



</Gridbutton>
    </Messagecover>

    </Body>
    )
}


const Body = styled.div`
width: 100%;
min-height: 300px;
margin: 0;
background: ${BenColor.white};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Messagecover = styled.div`
width: 100%;
min-height: 300px;
max-width: 700px;
text-align: center;
padding: 10px 25px;
margin: 40px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Gridh1 = styled(headerHero)`
margin: 24px 0 0 0;

`
const Gridtext = styled(mainText)`
margin: 0;
color: ${BenColor.grey};
`
const Gridbutton = styled.div`
width: 100%;
min-height: 100px;
max-width: 700px;
text-align: center;
padding: 10px 25px;
margin: 40px auto;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

a{
    width: 60px;
    height: 60px;
    border: 1px solid ${BenColor.blue};
    border-radius: 50%;
    margin: 8px ;
    display: flex;
color: ${BenColor.black};
justify-content: center;
align-items: center;
transition: 0.3s ease-in;

:hover{
    background: ${BenColor.blue};
}
}
`

const Instgram = styled(AiOutlineInstagram)`
height: 32px;
width:32px;
outline: none;

`
const Facebook = styled(AiFillFacebook)`
height: 32px;
width:32px;
outline: none;

`

const YouTube= styled(AiFillYoutube)`
height: 32px;
width:32px;
outline: none;

`
const WhatsApp= styled(AiOutlineWhatsApp)`
height: 32px;
width:32px;
outline: none;

`
export default Social
