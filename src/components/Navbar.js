import React, {useState, useEffect} from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {linkButton} from '../styles/ButtonStyle'
import logo from '../images/logo.svg'
import { BenColor } from '../styles/ColorStyles'
const Navbar = () => {

    const [handleMenu, setHandleMenu] =useState(false)
const location = useLocation()
    const toggleMenu =() =>{
        setHandleMenu(!handleMenu)
    }
    useEffect(()=>{
        setHandleMenu(false)
    }, [location])

    return (
        <Body>
          
                <Navbody>
                    <Navlogo>
                        <Link to='/'><Logo src={logo} alt="Ben Waltz Logo"/></Link>
                    </Navlogo>

                    <Navlinks>
                        <Navul>
                            <Navli><NavLink to='/'>Home</NavLink></Navli>
                            <Navli><NavLink to='/about'>About</NavLink></Navli>
                            <Navli><NavLink to='/events'>Events</NavLink></Navli>
                            <Navli><NavLink to='/reviews'>Reviews</NavLink></Navli>
                           
                        </Navul>
                    </Navlinks>
                    <Navbutton>
                    <Gridbutton to='/contact'>Contact Us</Gridbutton>
                    </Navbutton>
                    <Mobiletoggle onClick={toggleMenu}>
                        <Toggle >
                        <Toptoggle transition={{duration: 0.5}}  toggle={handleMenu}/>
                        <Middletog transition={{duration: 0.5}} toggle={handleMenu}/>
                        <Bottomtog transition={{duration: 0.5}}  toggle={handleMenu}/>
                        </Toggle>
                    </Mobiletoggle>
                 
                   <Background initial={{opacity: 0, scale: 0, transition: {duration: 0.5}}} animate={{opacity: 1, scale: 1, transition: {duration: 0.5}}} exit={{opacity: 0,  scale: 0,transition: {duration: 0.5}}} onClick={toggleMenu} toggle={handleMenu}>
                   <Mobilemenu initial={{opacity: 0, scale: 0, transition: {duration: 0.5}}} animate={{opacity: 1, scale: 1, transition: {duration: 0.5}}} exit={{opacity: 0,  scale: 0,transition: {duration: 0.5}}} toggle={handleMenu}>

<MobileNavlinks>
    <Navul>
        <Navli><NavLink to='/'>Home</NavLink></Navli>
        <Navli><NavLink to='/about'>About</NavLink></Navli>
        <Navli><NavLink to='/events'>Events</NavLink></Navli>
        <Navli><NavLink to='/reviews'>Reviews</NavLink></Navli>
       
    </Navul>
</MobileNavlinks>
<MobileNavbutton>
<Gridbutton to='/contact'>Contact Me</Gridbutton>
</MobileNavbutton>
</Mobilemenu>
                   </Background>
                </Navbody>
         
        </Body>
    )
}


const Body = styled.div`
width: 100%;
height: 110px; 

`
const Navbody = styled.div`
width: 100%;
height: 100%;
position: relative;
/* display: grid;
grid-template-columns: repeat(3,1fr);  */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
max-width: 1200px;
margin: 0 auto;

`
const Mobiletoggle = styled.div`
width: 40px;
height: 40px;
display: none;
position: absolute;
z-index: 40;
right: 30px;
top: 40px;
@media only screen and (max-width: 700px){
    display: block;
}
`
const Toggle = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;

`
const Toptoggle = styled(motion.span)`
width: 40px;
height: 3px;
background: ${BenColor.black};
transition: 0.3s ease-in;
transform:  ${props => props.toggle ? "rotate(-45deg) translate(-5px,6px)": "rotate(0deg)"}
`
const Middletog = styled(motion.span)`
width: 40px;
height: 3px;
background: ${BenColor.black};
margin: 6px 0;
transition: 0.3s ease-in;
opacity: ${props => (props.toggle ? 0 : 1)};
`
const Bottomtog = styled(motion.span)`
width: 40px;
height: 3px;
transition: 0.3s ease-in;
background: ${BenColor.black};
transform:  ${props => props.toggle ? "rotate(45deg) translate(-5px,-6px)": "rotate(0deg)"}

`

const Navlogo = styled.div`
width: 100%;
height: 100%;
`
const Logo = styled.img`
width: 80px;
height: 80px;
`
const Navlinks = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
@media only screen and (max-width: 700px){
    display: none;
}
`

const Navul = styled.ul`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
@media only screen and (max-width: 700px){
    flex-direction: column;
}
`
const Navli = styled.li`
padding: 10px;

a{
    width: 100%;
height: 100%;
    color: ${BenColor.black};
   
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 1.3;
transition: 0.4s ease-in;

:hover{
    color: ${BenColor.blue};
}

}

`
const Navbutton = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
@media only screen and (max-width: 700px){
    display: none;
}
`



const Gridbutton = styled(linkButton)`
margin: 40px 0;
`

const Background = styled(motion.div)`
width: 100%;
height: 100%;
background: rgba(0,0,0,0.4);
position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    transition: 0.3s ease-in;
    display: ${props=> (props.toggle ? "block":"none")};
`
const Mobilemenu = styled(motion.div)`
    display: none;
    background: ${BenColor.white};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    height: 50vh;
    width: 100%;
    transition: 0.3s ease-in;
    transform: ${props=> (props.toggle ? "translateY(0px)":"translateY(-100%)")};

    @media only screen and (max-width: 700px){
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
`
const MobileNavlinks = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 32px 0 0 0;
`
const MobileNavbutton = styled.div`
width: 100%;
height: 100%;
display: none;

@media only screen and (max-width: 700px){
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;    
}
`

export default Navbar
