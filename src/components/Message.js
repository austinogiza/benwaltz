import React from 'react'
import styled from 'styled-components'
import { BenColor } from '../styles/ColorStyles'
import {mainText,headerHero} from '../styles/TextStyles'
import {outlineButton} from '../styles/ButtonStyle'
const Message = () => {
    return (
    <Body>
    <Messagecover>


           <Gridtext>Get in touch</Gridtext>
           <Gridh1> Let me anchor your event </Gridh1>
<Gridbutton to='/contact'>Contact Me</Gridbutton>
    </Messagecover>

    </Body>
    )
}


const Body = styled.div`
width: 100%;
min-height: 460px;
margin: 0;
background: ${BenColor.blue};
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
color: ${BenColor.white};
`
const Gridbutton = styled(outlineButton)`
margin: 40px 0;
`
export default Message
