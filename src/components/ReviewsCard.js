import React from 'react'
import styled from 'styled-components'
import { BenColor } from '../styles/ColorStyles'
import { mainText, mediumHero } from '../styles/TextStyles'

const ReviewsCard = ({name,review}) => {
    return (
       <>

<Listcover>
    <Reviewname>{name}</Reviewname>
    <Review>{review}</Review>
</Listcover>
       </>
    )
}

const Listcover = styled.div`
display: flex;
justify-content:center;
align-items: flex-start;
flex-direction: column;
max-width: 350px;
min-height: 240px;
width: 100%;
padding: 15px;
transition: 0.3s ease-in;
border-radius: 0px;
background: ${BenColor.offWhite};
transition: 0.4s ease-in-out;
:hover{
    background: ${BenColor.blue};
    color: ${BenColor.black};
}
`
const Reviewname = styled(mediumHero)`
color: ${BenColor.black};
margin: 16px 0;
text-align: left;
transition: 0.4s ease-in-out;
${Listcover}:hover &{
    color: ${BenColor.black};
}
`
const Review = styled(mainText)`
color: ${BenColor.grey};
margin: 0;
text-align: left;
transition: 0.4s ease-in-out;
${Listcover}:hover &{
    color: ${BenColor.black};
}
`
export default ReviewsCard
