import React, { useEffect } from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import ReviewsCard from '../components/ReviewsCard'
import { Container } from '../container/Container'
import bg from '../images/bg.jpg'
import { externalButton } from '../styles/ButtonStyle'
import { headerHero } from '../styles/TextStyles'

const Reviews = () => {
    useEffect(() => {
 

        document.title = "Reviews - Ben Waltz"
    }, [])
    return (
      <Reviewbody>
<Hero text="Tested and trusted with 
reviews to back it" img={bg}/>
<Container>
<List>
                 <Listwrap>
               <ReviewsCard name="Ben Waltz" review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. "/>
               <ReviewsCard name="Ben Waltz" review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. "/>
               <ReviewsCard name="Ben Waltz" review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. "/>

                  <ReviewsCard name="Ben Waltz" review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. "/>
                  <ReviewsCard name="Ben Waltz" review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. "/>

                     <ReviewsCard name="Ben Waltz" review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. "/>
                     <ReviewsCard name="Ben Waltz" review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. "/>

                     <ReviewsCard name="Ben Waltz" review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. "/>

                     <ReviewsCard name="Ben Waltz" review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. "/>
                     <ReviewsCard name="Ben Waltz" review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. "/>

                     <ReviewsCard name="Ben Waltz" review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. "/>
                     <ReviewsCard name="Ben Waltz" review="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. "/>
                 </Listwrap>
                 </List>
<Leavereview>
    <Leaveheader>
    Leave your review
    </Leaveheader>
    <Leavebutton>Drop Review</Leavebutton>
</Leavereview>

</Container>
      </Reviewbody>
    )
}

const Reviewbody = styled.div`
width: 100%;
height: 100%;
`

const List = styled.div`
width: 100%;
min-height: 200px;
max-width: 1130px;
margin: 64px auto;
`
const Listwrap = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
width: 100%;
grid-auto-rows: minmax(100px,auto);
grid-gap: 40px;
height: 100%;
align-items: center;
flex-direction: column;
place-items: center;
margin: 0 auto;
@media only screen and (max-width: 800px){
    grid-template-columns: repeat(2,1fr);
    grid-gap: 24px;
}
@media only screen and (max-width: 650px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 24px;
}
`

const Leavereview = styled.div`
width: 100%;
min-height: 300px;
align-items: center;
flex-direction: column;
display: flex;
margin: 24px 0;
`
const Leaveheader = styled(headerHero)`
margin: 24px 0;
`
const Leavebutton = styled(externalButton)`
margin: 0;
`

export default Reviews
