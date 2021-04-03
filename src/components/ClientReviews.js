import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {headerHero} from '../styles/TextStyles'
import {linkButton} from '../styles/ButtonStyle'
import ReviewsCard from './ReviewsCard';
import Skeleton from './Skeleton'
import { v4 as uuidv4 } from 'uuid';
const ClientReviews = () => {

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

    useEffect(()=>{
        fetchState()

    },[])
    return (
        <Body>
<Reviewheader><Reviewh1>Here’s what my clients 
have to say about me</Reviewh1></Reviewheader>
<Slider >
{loading && [1,2,3].map((n) =>

    <Reviews key={n}>

    <Skeleton />
</Reviews>
                   )}



{data && data.map(reviews=> <Reviews key={uuidv4()}><ReviewsCard name={reviews.Name} review={reviews.Comment}/>
</Reviews>
).slice(0,3)}
</Slider>
<Gridbutton to='/reviews'>More Reviews</Gridbutton>

        </Body>
    )
}

const Gridbutton = styled(linkButton)`
margin: 40px 0;
`
const Body = styled.div`
width: 100%;
min-height: 460px;
margin: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Slider = styled.div`
width: 100%;
min-height: 250px;
display: grid;
grid-template-columns: repeat(4,1fr);
margin: 16px 0;
grid-auto-rows:  minmax(250px, auto);
grid-gap: 24px;

place-items: center;
@media only screen and (max-width: 800px){
  grid-template-columns: repeat(2,1fr);
}

@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
    grid-auto-rows:  minmax(150px, auto);
}
`

const Reviewheader = styled.div`
width: 100%;
min-height: 100px;
max-width: 550px;
margin: 0 auto;
`
const Reviewh1 = styled(headerHero)`
margin: 80px 0;
@media only screen and (max-width: 650px){
    margin: 32px 0;
}
`
const Reviews = styled.div`
margin: 0;
min-height: 250px;
max-width: 300px;
width: 100%;
padding: 10px;
`

export default ClientReviews
