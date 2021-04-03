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
border-radius: 20px;
box-shadow: 0 1px 1px rgb(4 2 34 / 8%), 0 0 1px rgb(4 2 34 / 12%);
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
border-radius: 20px;
box-shadow: 0 1px 1px rgb(4 2 34 / 8%), 0 0 1px rgb(4 2 34 / 12%);
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
border-radius: 20px;
box-shadow: 0 1px 1px rgb(4 2 34 / 8%), 0 0 1px rgb(4 2 34 / 12%);
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
border-radius: 20px;
box-shadow: 0 1px 1px rgb(4 2 34 / 8%), 0 0 1px rgb(4 2 34 / 12%);
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
