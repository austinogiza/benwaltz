import React from 'react'
import styled from 'styled-components'
import { BenColor } from '../styles/ColorStyles'
import { mainText, mediumHero,smallText } from '../styles/TextStyles'
import {BsStarHalf,BsStarFill} from 'react-icons/bs'

const ReviewsCard = ({name,review,rating,image}) => {
    console.log(rating)
    return (
       <>

<Listcover>
<Reviewimg src={image}/>
    <Reviewname>{name}</Reviewname>
    <Review>{review}</Review>
    <Ratingcover>
    {rating === "1"  && <>  <Rating>
    <Half/><Empty/><Empty/><Empty/><Empty/></Rating> </>}
    {  rating === "2"  && <>  <Rating>
    <Star/><Empty/><Empty/><Empty/><Empty/> </Rating> </>}
    { rating === "3" && <>  <Rating>
    <Star/><Half/> <Empty/><Empty/><Empty/></Rating> </>}
    {rating === "4" && <>  <Rating>
    <Star/> <Star/> <Empty/><Empty/><Empty/></Rating> </>}
    {rating === "5" && <>  <Rating>
    <Star/>   <Star/> <Half/> <Empty/><Empty/></Rating> </>}
    {rating === "6" && <>  <Rating>
    <Star/>   <Star/> <Star/><Empty/><Empty/> </Rating> </>}
    { rating === "7" && <>  <Rating>
    <Star/><Star/> <Star/><Half/> <Empty/></Rating> </>}
    {rating === "8" && <>  <Rating>
    <Star/>    <Star/> <Star/><Star/><Empty/></Rating> </>}
    {rating === "9" && <>  <Rating>
    <Star/> <Star/>    <Star/> <Star/><Star/><Half/> </Rating>  </>}
    {rating === "10" && <>  <Rating>
    <Star/>   <Star/>    <Star/> <Star/><Star/></Rating> </>}
    </Ratingcover>
      
</Listcover>
       </>
    )
}

const Listcover = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
max-width: 350px;
min-height: 300px;
width: 100%;
padding: 10px;
transition: 0.3s ease-in;
border-radius: 0px;
background: ${BenColor.offWhite};
transition: 0.4s ease-in-out;
:hover{
    background: ${BenColor.blue};
    color: ${BenColor.black};
}
`
const Ratingcover = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction: row;
width: 100%;

transition: 0.4s ease-in-out;
:hover{

}
`


const Reviewname = styled(mediumHero)`
color: ${BenColor.black};
margin: 16px 0;
text-align: center;
transition: 0.4s ease-in-out;
${Listcover}:hover &{
    color: ${BenColor.black};
}
`

const Star = styled(BsStarFill)`
height:24px;
width:24px;
color: ${BenColor.blue};
margin:  0 2px;
transition: 0.4s ease-in-out;
${Listcover}:hover &{
    transition: 0.4s ease-in-out;
    color: ${BenColor.white};
}
`
const Half = styled(BsStarHalf)`
height:24px;
width:24px;
color: ${BenColor.blue};
margin:  0 2px;
transition: 0.4s ease-in-out;
${Listcover}:hover &{
    transition: 0.4s ease-in-out;
    color: ${BenColor.white};
}

`

const Reviewimg = styled.img`
width: 140px;
height: 140px;
border-radius: 50%;
`

const Empty = styled(BsStarFill)`
height:24px;
width:24px;
color: ${BenColor.grey};
margin:  0 2px;
`
const Review = styled(mainText)`
color: ${BenColor.grey};
margin: 0;
text-align: center;
transition: 0.4s ease-in-out;
${Listcover}:hover &{
    color: ${BenColor.black};
}
`
const Rating = styled(smallText)`
color: ${BenColor.grey};
margin: 0;
text-align: center;
margin: 16px 0;
transition: 0.4s ease-in-out;
${Listcover}:hover &{
    color: ${BenColor.black};
}
`
export default ReviewsCard
