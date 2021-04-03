import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import ReviewsCard from '../components/ReviewsCard'
import { Container } from '../container/Container'
import { externalButton } from '../styles/ButtonStyle'
import { BenColor } from '../styles/ColorStyles'
import { headerHero } from '../styles/TextStyles'
import axios from 'axios'
import Skeleton from '../components/Skeleton'
import { v4 as uuidv4 } from 'uuid';

const Reviews = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchState =()=>{
        setLoading(true)
        axios
        .get("https://sheetdb.io/api/v1/pax1rrj8oue4j")
        .then(res=>{
            setData(res.data)
            console.log(res.data)
            setLoading(false)
            
        })
        .catch(err=>{
            setLoading(false)
        })
    }
    useEffect(() => {
        fetchState()

        document.title = "Reviews - Ben Waltz"
    }, [])
    return (
      <Reviewbody>
<Hero text="Tested and trusted to back it up." img="https://res.cloudinary.com/dgssnxknb/image/upload/v1616962104/bg_zqcdcs.jpg"/>
<Container>
<List>
                 <Listwrap>
                 {loading && [1,2,3].map((n) =>
                    <Skeleton key={n}/>)}
{data && data.map(reviews=>
    <ReviewsCard key={uuidv4()} name={reviews.Name} review={reviews.Comment}/>
)}

               
              
                 </Listwrap>
                 </List>
<Leavereview>
    <Leaveheader>
    Leave your review
    </Leaveheader>
    <Leavebutton><a href="https://docs.google.com/forms/d/e/1FAIpQLScfOdg7frVEUVPgdJQF7QQ8mpltJGNifznJat_pPMg0yQRf5A/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Drop Review</a></Leavebutton>
</Leavereview>

</Container>
      </Reviewbody>
    )
}

const Reviewbody = styled.div`
width: 100%;
height: 100%;
`

const List = styled.div`
width: 100%;
min-height: 200px;
max-width: 1130px;
margin: 64px auto;
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

const Leavereview = styled.div`
width: 100%;
min-height: 300px;
align-items: center;
flex-direction: column;
display: flex;
margin: 24px 0;


`
const Leaveheader = styled(headerHero)`
margin: 24px 0;
`
const Leavebutton = styled(externalButton)`
margin: 0;
transition: 0.3s ease-in;
a{
    color: ${BenColor.black};
    width: 100%;
    height: 100%;
    align-items: center;
justify-content: center;
display: flex;
    
}

:hover a{
    color: ${BenColor.blue};
}
`

export default Reviews
