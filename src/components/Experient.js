import React from 'react'
import styled from 'styled-components'
import { Container } from '../container/Container'
import { headerHero } from '../styles/TextStyles'

const Experient = () => {

    const cloudImage = [

        {id: 1,
            image: "https://res.cloudinary.com/dgssnxknb/image/upload/v1618173387/ben-1_1_bjfpuo.jpg",
            name: "Ben Waltz"
        },{
            id: 2,
            image: "https://res.cloudinary.com/dgssnxknb/image/upload/v1618173388/ben_1_jxr67u.jpg",
            name: "Ben Waltz"
        },{
            id: 3,
            image: "https://res.cloudinary.com/dgssnxknb/image/upload/v1617448582/benwaltz02_1_zbn33e.jpg",
            name: "Ben Waltz"
        }
    ]

    
    return (
        <Body>

            <Container>
            <Reviewheader><Reviewh1>We are still making impacts and creating experiential satisfaction</Reviewh1></Reviewheader>
            <List>
<Listwrap>

  {cloudImage.map(image=>   <Listcover key={image.id}>
        <Image src={image.image} alt={image.name}/>
    </Listcover>)}
</Listwrap>

            </List>

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
max-width: 850px;
margin: 0 auto;
`
const Reviewh1 = styled(headerHero)`
margin: 24px 0;

@media only screen and (max-width: 650px){

font-size: 24px;
}
`



const List = styled.div`
width: 100%;
min-height: 200px;
max-width: 1130px;
margin: 24px auto;
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
@media only screen and (max-width: 800px){
    grid-template-columns: repeat(2,1fr);
    grid-gap: 24px;
}
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 24px;
}
`

const Listcover = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
max-width: 350px;
height: 300px;
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


export default Experient
