import { Link } from "react-router-dom";
import styled from "styled-components";
import { BenColor } from "./ColorStyles";

export const linkButton = styled(Link)`
height: 56px;
max-width: 200px;
width: 100%;
background: ${BenColor.blue};
color: ${BenColor.white};
outline: none;
border: none;
border-radius: 20px;
transition: 0.3s ease-in;
:hover{
    background: ${BenColor.white};
color: ${BenColor.blue};
border: 1px solid ${BenColor.blue};
}
`

export const submitButton = styled.button`
height: 56px;
max-width: 200px;
width: 100%;
background: ${BenColor.blue};
color: ${BenColor.white};
outline: none;
border: none;
border-radius: 20px;
transition: 0.3s ease-in;
:hover{
    background: ${BenColor.white};
color: ${BenColor.blue};
border: 1px solid ${BenColor.blue};
}
`

export const outlineButton = styled(Link)`
height: 56px;
max-width: 200px;
width: 100%;
background: ${BenColor.blue};
color: ${BenColor.white};
outline: none;
border: 1px solid ${BenColor.white};
border-radius: 20px;
transition: 0.3s ease-in;
:hover{
    background: ${BenColor.white};
color: ${BenColor.blue};
border: 1px solid ${BenColor.blue};
}
`