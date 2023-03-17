import React, { useState} from 'react';
import emailjs from 'emailjs-com';
import {
  ContactContainer,
  ContactWrapper,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormInputFName,
  FormInputLName,
  FormTextArea,
  FormButton,
  Text,
  ContIn,
  ContSub,
  ContLeft,
  ContRight,
  Cont,
  ContMessage
} from './ContactElements';

const Contact = () => {

const[isClicked, setIsClicked] = useState(false)

function sendEmail(e) {
  e.preventDefault();
  setIsClicked(true)
  emailjs.sendForm('service_dr3ra89', 'template_wr9xml9', e.target, '_WUfqsOre3diD9dPA')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}
  return (
    <React.Fragment>
      <ContactContainer id='contact'>
        <ContactWrapper>
          <Form className="contact-form" onSubmit={sendEmail}>
            <FormH1>Contact Form</FormH1>
            <Cont>
            <ContLeft>
              <FormLabel For='fname'>First</FormLabel>
              <FormInputFName type='text' name='fname' required/>
            </ContLeft>
            <ContRight>
              <FormLabel For='lname'>Last</FormLabel>
              <FormInputLName type='text' name='lname'/>
            </ContRight>
            </Cont>
            <ContIn> 
              <ContSub>
                <FormLabel For='email'>Email</FormLabel>
                <FormInput type='text' name='email'/>
              </ContSub>
              </ContIn>
              <Cont>
              <ContRight> 
                <FormLabel For='program-name'>Program of Interest</FormLabel>
                <FormInput type='text' name='program-name'/>
              </ContRight>
              <ContLeft>
                <FormLabel For='phone'>Phone</FormLabel>
                <FormInput type='text' name='phone'/>
              </ContLeft>
              </Cont>
              <ContIn>
                <FormLabel For='message'>Message</FormLabel>
                <FormTextArea type='text' name='message'/>
              </ContIn>
            <FormButton type='submit'>Submit</FormButton>
            <ContMessage>{isClicked ?  <Text>Message Sent Successfully! Thank You</Text>: <Text></Text> }</ContMessage>
          </Form>
        </ContactWrapper>
      </ContactContainer>
    </React.Fragment>
  );
};

export default Contact;