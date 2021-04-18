import React, {useEffect} from 'react'
import styled from 'styled-components'
import Bend from '../components/Bend'
import Body from '../components/Body'
import ClientReviews from '../components/ClientReviews'
import Experient from '../components/Experient'
import Grid from '../components/Grid'
import HomeHero from '../components/HomeHero'
import Message from '../components/Message'
import SliderComp from '../components/Slider'
import { Container } from '../container/Container'

const Home = () => {

    useEffect(()=>{


        document.title = "Home - Ben Waltz"
    })
    return (
        <Homebody>
<HomeHero img="https://res.cloudinary.com/dgssnxknb/image/upload/v1616962104/hero_ctwmhd.jpg" text="Hello, welcome to Ben Waltz" smalltext="The Premium Master of Ceremonies"/>

<SliderComp/>
<Body/>
<Container>
<Grid/>

</Container>
<Bend/>
<Container>
<Experient/>
    <ClientReviews/>
</Container>
<Message/>
        </Homebody>
    )
}

const Homebody =styled.div`

`
export default Home
