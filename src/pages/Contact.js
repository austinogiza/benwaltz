import React, {useEffect, useState}from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Loader from '../components/Loader'
import {HiOutlineMail} from 'react-icons/hi'
import {FiMapPin, FiPhone} from 'react-icons/fi'
import {Container} from '../container/Container'
import { BenColor } from '../styles/ColorStyles'
import { smallText,headerHero,mainText } from '../styles/TextStyles'
import { submitButton,outlineButton } from '../styles/ButtonStyle'
import axios from 'axios'
import { contactURL } from '../constant'
const Contact = () => {
    const initial ={
        name: "",
        email: "",
        subject:"",
        message:"",
        number: ""
    }

    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState(initial)

    const {
        name,
email,
subject,
message,
number
    }=form

    const handleSend = async (e)=>{
        setLoading(true)
        await axios
        .post(contactURL, {name, email,subject, message,number})
.then(res=>{
    setLoading(false)
    setSent(true)
})
.catch(err=>{
    setLoading(false)
})
    }
    const handleSubmit=e=>{
        e.preventDefault();
        handleSend()
      
    }

    const onChange = e =>{
        const {name,value }= e.target
        setForm({...form, [name] : value})
    }

useEffect(() => {
 

    document.title = "Contact - Ben Waltz"
}, [])
    return (
        <Contactbody>
            <Hero img={"https://res.cloudinary.com/dgssnxknb/image/upload/v1616962104/bg_zqcdcs.jpg"} text="Contact"/>

            <Container>
                <List>
                 <Listwrap>
                 <Listcover>
                        <Listicon>
                            <Mapicon/>
                        </Listicon>
                        <Listtext>
                            <Listitem>Amuo-odofin 
Festac Town, Lagos</Listitem>
                        </Listtext>
                    </Listcover>
                    <Listcover>
                        <Listicon>
                            <Emailicon/>
                        </Listicon>
                        <Listtext>
                            <Listitem><a href="mailto:bookings@benwaltz.com">bookings@benwaltz.com</a></Listitem>
                        </Listtext>
                    </Listcover>
                    <Listcover>
                        <Listicon>
                            <Phoneicon/>
                        </Listicon>
                        <Listtext>
                            <Listitem>
                                <a href="tel:+2348137109799">0813 7109799 (mobile)</a>
                            </Listitem>
                            <Listitem>
                                <a href="tel:+2348188711699">+2348188711699(Whatsapp)</a>
                            </Listitem>
                        </Listtext>
                    </Listcover>
                 </Listwrap>
                </List>


                <Formcover>
{sent ? <>
<Formwrapper>

    <Formblue>
        <Blueheader>Thank 
You for your mail</Blueheader>
<Bluetext>I will be in touch shortly</Bluetext>
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
            <Forminput required type="text" name="name" value={name} onChange={onChange}/>
        </Formlabel>
    </Formrow>
    <Formrow>
        <Formlabel>
            <Formh1>
            Email   
            </Formh1>
            <Forminput required type="email" name="email" value={email} onChange={onChange}/>
        </Formlabel>
    </Formrow>
    <Formrow>
        <Formlabel>
            <Formh1>
             Subject   
            </Formh1>
            <Forminput required type="text" name="subject" value={subject} onChange={onChange}/>
        </Formlabel>
    </Formrow>
    <Formrow>
        <Formlabel>
            <Formh1>
             Phone Number   
            </Formh1>
            <Forminput required type="number" name="number" value={number} onChange={onChange}/>
        </Formlabel>
    </Formrow>
    <Formrow>
        <Formlabel>
            <Formh1>
             Message   
            </Formh1>
            <Formrextarea required name="message" value={message} onChange={onChange}/>
        </Formlabel>
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


const List = styled.div`
width: 100%;
min-height: 200px;
max-width: 770px;
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
@media only screen and (max-width: 750px){
    grid-template-columns: repeat(1,1fr);
    grid-gap: 24px;
}
`
const Listcover = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
width: 230px;
min-height: 160px;
padding: 10px;
transition: 0.3s ease-in;
border-radius: 4px;
border: 1px solid ${BenColor.grey};
background: ${BenColor.white};
transition: 0.4s ease-in-out;
:hover{
    background: ${BenColor.blue};
    color: ${BenColor.black};
    border: none;
    outline: none;
}
`
const Listicon = styled.div`
margin: 0;
`
const Mapicon = styled(FiMapPin)`
width: 24px;
height: 24px;
`
const Listtext = styled.div`
margin: 8px 0;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
width: 100%;
min-height: 30px;
`
const Listitem = styled(smallText)`
margin: 8px 0;

a{
    color: ${BenColor.black};
    transition: 0.4s ease-in-out;
    ${Listcover}:hover & {
    
    color: ${BenColor.black};
}
}
`
const Emailicon = styled(HiOutlineMail)`
width: 24px;
height: 24px;
`
const Phoneicon = styled(FiPhone)`
width: 24px;
height: 24px;
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

const Formrextarea = styled.textarea`
resize:none;
width: 100%;
border-radius: 4px;
height: 320px;
border: 1px solid ${BenColor.black};
margin: 0;
padding: 10px;
outline: none;
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
export default Contact
