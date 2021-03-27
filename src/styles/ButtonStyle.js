import { Link } from "react-router-dom";
import styled from "styled-components";
import { BenColor } from "./ColorStyles";

export const linkButton = styled(Link)`
font-size: 18px;
font-weight: 500;
line-height: 1.2;
height: 56px;
max-width: 200px;
width: 100%;
background: ${BenColor.blue};
color: ${BenColor.black};
outline: none;
border: none;
border-radius: 0px;
transition: 0.3s ease-in;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
:hover{
    background: ${BenColor.black};
color: ${BenColor.blue};
border: 2px solid ${BenColor.blue};
}
`

export const submitButton = styled.button`
font-size: 18px;
font-weight: 500;
line-height: 1.2;
height: 56px;
max-width: 200px;
width: 100%;
background: ${BenColor.blue};
color: ${BenColor.black};
outline: none;
border: none;
border-radius: 0px;
transition: 0.3s ease-in;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
:hover{
    background: ${BenColor.black};
color: ${BenColor.blue};
border: 2px solid ${BenColor.blue};
}
`

export const outlineButton = styled(Link)`
font-size: 18px;
font-weight: 500;
line-height: 1.2;
height: 56px;
max-width: 200px;
width: 100%;
background: ${BenColor.blue};
color: ${BenColor.black};
outline: none;
border: 2px solid ${BenColor.black};
border-radius: 0px;
transition: 0.3s ease-in;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
:hover{
    background: ${BenColor.black};
color: ${BenColor.blue};
border: 2px solid ${BenColor.blue};
}
`

export const externalButton = styled.a`
font-size: 18px;
font-weight: 500;
line-height: 1.2;
height: 56px;
max-width: 200px;
width: 100%;
background: ${BenColor.blue};
color: ${BenColor.black};
outline: none;
border: none;
border-radius: 0px;
transition: 0.3s ease-in;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
:hover{
    background: ${BenColor.black};
color: ${BenColor.blue};
border: 2px solid ${BenColor.blue};
}
`
