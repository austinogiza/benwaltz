import React from 'react'
import styled from 'styled-components'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const WhatsApp = () => {
    return (
       <Body>
           <Topwrap>

           <a rel="noreferrer noopener" href="https://api.whatsapp.com/send?phone=2348188711699&text=Hello%20Benwaltz,%20I%20got%20your%20contact%20from%20your%20website." target="_blank">
<WhatsAppIcon />

</a>
           </Topwrap>
         
       </Body>
    )
}

const Body = styled.div`
width: 44px;
height: 44px;
position: fixed;
bottom: 130px;
right: 40px;
border: 1px solid #25D366;
border-radius: 50%;
z-index: 1000;
transition: 0.3s ease-in-out;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
`
const Topwrap = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

a{
    width: 44px;
height: 44px;
   
    border-radius: 50%;
    margin: 8px ;
    display: flex;
color: #25D366;
justify-content: center;
align-items: center;
transition: 0.3s ease-in;

}
`


const WhatsAppIcon= styled(AiOutlineWhatsApp)`
height: 32px;
width:32px;
outline: none;

`
export default WhatsApp
