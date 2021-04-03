import React from 'react'
import styled from 'styled-components'
import { Container } from '../container/Container'
import { linkButton } from '../styles/ButtonStyle'
import { headerHero } from '../styles/TextStyles'

const NotFound = () => {
    return (
     <Body>
         <Container>
         <Reviewheader><Reviewh1>The page you are searching for doesn't exist</Reviewh1></Reviewheader>
<Listcover>
    <Image src="https://res.cloudinary.com/dgssnxknb/image/upload/v1617451183/Saly-13_1_divgqj.jpg" alt="Ben waltz"/>
</Listcover>
         <Gridbutton to='/'>Head Home</Gridbutton>
         </Container>
     </Body>
    )
}

const Body = styled.div`
width: 100%;
min-height: 300px;
`
const Reviewheader = styled.div`
width: 100%;
min-height: 100px;
max-width: 650px;
margin: 0 auto;
`

const Gridbutton = styled(linkButton)`
margin: 40px 0;
`
const Reviewh1 = styled(headerHero)`
margin: 24px 0;
@media only screen and (max-width: 650px){
   font-size: 28px;
}

`
const Listcover = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
max-width: 500px;
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



export default NotFound
