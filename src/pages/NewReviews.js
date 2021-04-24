import React, {useEffect, useState}from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Loader from '../components/Loader'
import {Container} from '../container/Container'
import { BenColor } from '../styles/ColorStyles'
import { smallText,headerHero,mainText } from '../styles/TextStyles'
import { submitButton,outlineButton } from '../styles/ButtonStyle'
import axios from 'axios'
import { reviewCreateURL } from '../constant'
import { motion } from 'framer-motion'
const NewReviews = () => {
    const initial ={
        name: "",
        email: "",
        feel: "",
        number: "",
        rating: "",
        recommend: null,
        suggest: "",
        social: "",
        comment: "",
        photo: ""
    }

    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState(initial)
    const [photo, setPhoto] = useState(null)
    const [nameError, setNameError] = useState(null)
const [emailError, setEmailError] = useState(null)
const [feelError, setFeelError] = useState(null)
const [numberError, setNumberError] = useState(null)
const [ratingError, setRatingError] = useState(null)
const [recommendError, setRecommendError] = useState(null)
const [suggestError, setSuggestError] = useState(null)
const [socialError, setSocialError] = useState(null)
const [commentError, setCommentError] = useState(null)
const [photoError, setPhotoError] = useState(null)

    const {
        name,
        email,
        feel,
        number,
        rating,
        recommend,
        suggest,
        social,
        comment,
  
    }=form

    const handleSend = async (e)=>{
        setLoading(true)
        
//form validation

if(name !== "" && email !== "" && feel !== "" && number !== "" && rating !== "" && recommend !== null && suggest !== "" && social !== "" && comment !== "" && photo !== null )
{


        //collect information from form
        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("feel", feel)
        formData.append("number", number)
        formData.append("rating", rating)
        formData.append("recommend", recommend)
        formData.append("suggest", suggest)
        formData.append("social", social)
        formData.append("comment", comment)
        formData.append("photo", photo)

        //send form data to backend
        await axios
        .post(reviewCreateURL, formData, { headers: {
            "Content-type": "multipart/form-data"
        } })
.then(res=>{
    setLoading(false)
    setSent(true)
})
.catch(err=>{
    setLoading(false)
})
}

else{

    if (name === ""){
setNameError("Please fill this input")
setLoading(false)
    }
    if (email === ""){
setEmailError("Please fill this input")
setLoading(false)
    }
    if (feel === ""){
setFeelError("Please fill this input")
setLoading(false)
    }
    if (number === ""){
setNumberError("Please fill this input")
setLoading(false)
    }
    if (rating === ""){
setRatingError("Please fill this input")
setLoading(false)
    }
    if (recommend === null){
setRecommendError("Please select an option")
setLoading(false)
    }
    if (suggest === ""){
setSuggestError("Please fill this input")
setLoading(false)
    }
    if (social === ""){
setSocialError("Please fill this input")
setLoading(false)
    }
    if (comment === ""){
setCommentError("Please fill this input")
setLoading(false)
    }
    if (photo === null){
setPhotoError("Please upload a photo")
setLoading(false)
    }}
if(photo.size > 5000000){
    setPhotoError("Image size is greater than 5MB")
setLoading(false)
}

    }
    const handleSubmit=e=>{
        e.preventDefault();
        handleSend()
      
    }

    const onChange = e =>{
        const {name,value }= e.target
        setForm({...form, [name] : value})
        setNameError(null)
setEmailError(null)
setFeelError(null)
setNumberError(null)
setRatingError(null)
setRecommendError(null)
setSuggestError(null)
setSocialError(null)
setCommentError(null)
setPhotoError(null)
    }

useEffect(() => {
 

    document.title = "Review Us - Ben Waltz"
}, [])
    return (
        <Contactbody>
            <Hero img={"https://res.cloudinary.com/dgssnxknb/image/upload/v1618173511/ben_new01_1_zfejhn.jpg"} text="Leave your review"/>

            <Container>
             

                <Formcover>
{sent ? <>
<Formwrapper>

    <Formblue>
        <Blueheader>Thank 
You for your review</Blueheader>
<Bluetext>We appreciate</Bluetext>
<Bluebutton to='/'>Head Home</Bluebutton>
    </Formblue>
</Formwrapper>

</>:<>
<Formwrapper>

<Form onSubmit={handleSubmit}>

    <Formrow>
        <Formlabel>
            <Formh1>
             Name   
            </Formh1>
            <Forminput  className={`${nameError && 'form-error'}`} type="text" name="name" value={name} onChange={onChange}/>
        </Formlabel>
        {nameError && <FormError transition={{duration: 0.4}} initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -5}}>{nameError}</FormError>}
    </Formrow>
    <Formrow>
        <Formlabel>
            <Formh1>
            Email   
            </Formh1>
            <Forminput  className={`${emailError && 'form-error'}`}  type="email" name="email" value={email} onChange={onChange}/>
        </Formlabel>
        {emailError && <FormError transition={{duration: 0.4}} initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -5}}>{emailError}</FormError>}
    </Formrow>
    <Formrow>
        <Formlabel>
            <Formh1>
            How do you feel after the event 
            </Formh1>
            <Forminput className={`${feelError && 'form-error'}`} type="text" name="feel" value={feel} onChange={onChange}/>
        </Formlabel>
        {feelError && <FormError transition={{duration: 0.4}} initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -5}}>{feelError}</FormError>}
    </Formrow>
       <Formrow>
        <Formlabel>
            <Formh1>
             Phone Number   
            </Formh1>
            <Forminput  className={`${numberError && 'form-error'}`} type="number" name="number" value={number} onChange={onChange}/>
        </Formlabel>
        {numberError && <FormError transition={{duration: 0.4}} initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -5}}>{numberError}</FormError>}
    </Formrow>
    <Formrow>
        <Formlabel>
            <Formh1>
            What would you say about Ben Waltz
            </Formh1>
            <Forminput className={`${commentError && 'form-error'}`}  type="text" name="comment" value={comment} onChange={onChange}/>
        </Formlabel>
        {commentError && <FormError transition={{duration: 0.4}} initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -5}}>{commentError}</FormError>}
    </Formrow>
    <Formrow>
        <Formlabel>
            <Formh1>
            How would you rate my performance?
            </Formh1>
            <Formselect  className={`${ratingError && 'form-error'}`}  name="rating" value={rating} onChange={onChange}>

                <Formoption value="1">Poor - 1</Formoption>
                <Formoption value="2">2</Formoption>
                <Formoption value="3">3</Formoption>
                <Formoption value="4">4</Formoption>
                <Formoption value="5">5</Formoption>
                <Formoption value="6">6</Formoption>
                <Formoption value="7">7</Formoption>
                <Formoption value="8">8</Formoption>
                <Formoption value="9">9</Formoption>
                <Formoption value="10">Amazing - 10</Formoption>

            </Formselect>
        </Formlabel>
        {ratingError && <FormError transition={{duration: 0.4}} initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -5}}>{ratingError}</FormError>}
    </Formrow>

    <Formrow>
        <Formlabel>
            <Formh1>
            Would you recommend me or refer me for other job due to my performance.  
            </Formh1>
            <Formradiolabel>       <Formradio  className={`${recommendError && 'form-error'}`}  type="radio" name="recommend" value="yes" onChange={onChange} />Yes</Formradiolabel>
            <Formradiolabel>       <Formradio className={`${recommendError && 'form-error'}`} type="radio" name="recommend" value="no" onChange={onChange} />No</Formradiolabel>
     
            {recommendError && <FormError transition={{duration: 0.4}} initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -5}}>{recommendError}</FormError>}


        </Formlabel>
    </Formrow>
    <Formrow>
        <Formlabel>
            <Formh1>
            What will you suggest to the Benwaltz brand
            </Formh1>
            <Forminput className={`${suggestError && 'form-error'}`}  type="text" name="suggest" value={suggest} onChange={onChange}/>
        </Formlabel>
        {suggestError && <FormError transition={{duration: 0.4}} initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -5}}>{suggestError}</FormError>}
    </Formrow>
    <Formrow>
        <Formlabel>
            <Formh1>
            Social Media handle
            </Formh1>
            <Forminput  className={`${socialError && 'form-error'}`}  type="text" name="social" value={social} onChange={onChange}/>
        </Formlabel>
        {socialError && <FormError transition={{duration: 0.4}} initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -5}}>{socialError}</FormError>}
    </Formrow>
    <Formrow>
        <Formlabel>
            <Formh1>
            Photo
            </Formh1>
            <Forminput className={`${photoError && 'form-error'}`}  accept="image/*" type="file"  onChange={(e)=>setPhoto(e.target.files[0])}/>
        </Formlabel>
        {photoError && <FormError transition={{duration: 0.4}} initial={{opacity: 0, y: -5}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -5}}>{photoError}</FormError>}
    </Formrow>


    <Formrow>
       <Formbutton type="submit">{loading? <Loader/>: "Send"}</Formbutton>
    </Formrow>
</Form>
</Formwrapper>
</>}
                    
                </Formcover>
            </Container>
        </Contactbody>
    )
}

const Contactbody = styled.div`
width: 100%;
height: 100%;
`



const Formcover = styled.div`
width: 100%;
min-height: 600px;
max-width: 770px;
margin: 0 auto;
`
const Formwrapper = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;
`
const Form = styled.form`
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;

.form-error{
    border: 2px solid #ff0000;
    transition: 0.3s ease-in;
}
`
const Formrow = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
width: 100%;
min-height: 50px;
`
const Formlabel = styled.label`
width: 100%;
display: flex;
justify-content:center;
align-items: flex-start;
flex-direction: column;
height: 100%;
margin: 16px 0;
`

const Formradiolabel = styled.label`
width: 100%;
display: flex;
justify-content:flex-start;
align-items: flex-start;
flex-direction: row;
height: 100%;
margin: 16px 0;
`
const Formh1 = styled(smallText)`
margin: 16px 0;
`
const Formbutton = styled(submitButton)`
align-self: flex-start;
margin: 40px 0;
`

const Forminput = styled.input`
width: 100%;
height: 48px;
border: 1px solid ${BenColor.black};
margin: 0;
padding: 10px;
outline: none;
border-radius: 4px;
transition: 0.3s ease-in;
:active, :focus{
    border: 2px solid ${BenColor.blue};
}
`

const FormError = styled(motion.div)`
min-height: 10px;
width: 100%;
font-weight: 300;
font-size: 16px;
line-height: 1.3;
text-align: left;
color: #ff0000;
@media only screen and (max-width: 650px){

    font-size: 14px;
}
`
const Formselect = styled.select`
width: 100%;
height: 48px;
border: 1px solid ${BenColor.black};
margin: 0;
padding: 10px;
outline: none;
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
background-image: url('data:image/svg+xml;utf8,<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9.5L12 15.5L18 9.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
background-repeat: no-repeat;
background-position: right 5px top 30%;
background-size: 4%;
border-radius: 4px;
transition: 0.3s ease-in;
:active, :focus{
    border: 2px solid ${BenColor.blue};
}
`
const Formoption = styled.option`
width: 100%;
height: 48px;
background: ${BenColor.blue};
color: ${BenColor.black};
:focus,:active{
background: ${BenColor.blue};
color: ${BenColor.black};
}
`
const Formradio = styled.input`
width: 16px;
height: 16px;
border: 1px solid ${BenColor.black};
margin: 0 4px;
padding: 10px;
outline: none;
border-radius: 4px;
transition: 0.3s ease-in;
:active, :focus{
    border: 2px solid ${BenColor.blue};
}
`

const Formblue = styled.div`
display: flex;
justify-content:flex-start;
align-items: flex-start;
flex-direction: column;
width: 100%;
height: 500px;
max-width: 770px;
margin: 0 auto;
background: ${BenColor.blue};
padding: 50px;
color: ${BenColor.black};

@media only screen and (max-width: 650px){
    align-items: center;
    justify-content: center;
}

`
const Blueheader = styled(headerHero)`
min-height: 130px;
max-width: 364px;
width: 100%;
margin: 24px 0;
text-align: left;
@media only screen and (max-width: 650px){

    text-align: center;
    margin: 8px auto;
}
`
const Bluetext = styled(mainText)`
margin: 0;
width: 100%;
text-align: left;

@media only screen and (max-width: 650px){
    margin: 0;
text-align: center;

}
`
const Bluebutton = styled(outlineButton)`
margin: 40px 0;
width: 100%;
`
export default NewReviews
