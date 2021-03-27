import React, {useEffect} from 'react'
import styled from 'styled-components'
import Bend from '../components/Bend'
import Body from '../components/Body'
import ClientReviews from '../components/ClientReviews'
import Grid from '../components/Grid'
import HomeHero from '../components/HomeHero'
import Message from '../components/Message'
import SliderComp from '../components/Slider'
import { Container } from '../container/Container'
import hero from '../images/hero.jpg'
const Home = () => {

    useEffect(()=>{


        document.title = "Home - Ben Waltz"
    })
    return (
        <Homebody>
<HomeHero img={hero} text="Hello, I am Ben Waltz" smalltext="They call me the PREMIUM MASTER OF CEREMONIES
"/>

<SliderComp/>
<Body/>
<Container>
<Grid/>

</Container>
<Bend/>
<Container>
    <ClientReviews/>
</Container>
<Message/>
        </Homebody>
    )
}

const Homebody =styled.div`

`
export default Home
