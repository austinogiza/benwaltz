import React, {useEffect}from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import bg from '../images/bg.jpg'
const Contact = () => {

useEffect(() => {
 

    document.title = "Contact - Ben Waltz"
}, [])
    return (
        <Contactbody>
            <Hero img={bg} text="Contact"/>
        </Contactbody>
    )
}

const Contactbody = styled.div`
width: 100%;
height: 100%;
`

export default Contact
