import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BenColor } from '../styles/ColorStyles'
import { bodyText } from '../styles/TextStyles'
import logo from '../images/logo.svg'

const Footer = () => {
    return (
       <Footerbody>

           <FooterContainer>
               <FooterLogo>
                   <Logo src={logo} alt="Ben Waltz logo" />
               </FooterLogo>
               <Footernav>
                   <Footerul>
                       <Footerli><Link to='/'>Home</Link></Footerli>
                       <Footerli><Link to='/about'>About</Link></Footerli>
                       <Footerli><Link to='/events'>Events</Link></Footerli>
                       <Footerli><Link to='/reviews'>Reviews</Link></Footerli>
                       <Footerli><Link to='/contact'>Contact Me</Link></Footerli>
                   </Footerul>
               </Footernav>
               <Footercopyright>
                   <Copyright>&copy; {new Date().getFullYear()}. All Rights reserved</Copyright>
               </Footercopyright>
           </FooterContainer>
       </Footerbody>
    )
}


const Footerbody = styled.div`
width: 100%;
min-height: 150px;
/* background: ${BenColor.blue}; */
`

export const FooterContainer = styled.div`
width:100%;

display: grid;
grid-template-columns: repeat(3,1fr);
grid-auto-rows: minmax(50px,auto);
height: 100%;
padding: 10px 20px;
max-width: 1200px;
margin: 0 auto;
@media only screen and (max-width: 800px){
    grid-template-columns: repeat(1,1fr);  
    place-items: center;
}
`
const FooterLogo = styled.div`
width: 120px;
height: 120px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Logo = styled.img`
width: 100%;
height: 100%;
`
const Footernav = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`
const Footerul = styled.ul`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
@media only screen and (max-width: 650px){
    flex-direction: column;
}
`
const Footerli = styled.li`
margin: 0 8px;
backface-visibility: hidden; 
transition: 0.4s ease-in;
transform: translateY(0px);
a{
    color: ${BenColor.black};
    transition: 0.3s ease;
    
}
:hover{
        transform: translateY(-5px);
    
        a{
            color: ${BenColor.white};
        }
    }

    @media only screen and (max-width: 650px){
        margin: 8px 0;
}
`

const Footercopyright = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Copyright = styled(bodyText)`

`
export default Footer
