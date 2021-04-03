import React, { useEffect, useState } from 'react'
import {BsChevronDoubleUp} from 'react-icons/bs'
import styled, {keyframes}from 'styled-components'
import { BenColor } from '../styles/ColorStyles'
const Top = () => {

    const [show, setShow] = useState(false)
const showButton =()=>{

    if(window.pageYOffset > 200){
        setShow(true)
    }
    else{    setShow(false)}
}
    useEffect(()=>{

window.addEventListener("scroll", showButton)

    },[])

    const goTop =()=>{
        window.scrollTo(0,0, {
            duration: 0.3});
    }
    return (
        <Topcover onClick={goTop} show={show}>
            <Topwrap>
                <Topicon/>
            </Topwrap>
        </Topcover>
    )
}


const animation = keyframes`
0%{
    transform: translateY(10px);

}
50%{
    transform: translateY(5px);

}
100%{
    transform: translateY(0px);

}
`
const Topcover = styled.div`
width: 64px;
height: 64px;
background:${BenColor.blue}; 
position: fixed;
bottom: 50px;
right: 50px;
z-index: 1000;
transition: 0.3s ease-in-out;
cursor: pointer;
display: ${props =>props.show ? "block": "none"};
`
const Topwrap = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Topicon = styled(BsChevronDoubleUp)`
width: 24px;
height: 24px;
color: ${BenColor.black};
animation: ${animation} 3s ease-in infinite alternate-reverse;
`

export default Top
