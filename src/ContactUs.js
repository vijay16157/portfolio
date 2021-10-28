import React from 'react';
import emailjs from 'emailjs-com';

import './ContactUs.css';
import IconLabelButtons from './IconLabelButtons';
import { Input, TextareaAutosize } from '@material-ui/core';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



toast.configure()

export default function ContactUs() {
  
 

  function sendEmail(e) {
    e.preventDefault();
    toast.success("Sent Successfully!",{position:toast.POSITION.BOTTOM_RIGHT});
    

    emailjs.sendForm('service_r00ums8', 'template_sqy8ml5', e.target, 'user_r6nuVlLEsEf7HPQDSmqi5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  

  return (
    <div className='login'>
    <form className="contact-form" onSubmit={sendEmail} >
      <Input type="text" name="name" placeholder="Name"  required/>
      <Input type="email" name="email" placeholder='Email' required />
        <TextareaAutosize className='textArea' name="message" placeholder="Message"required />
        <IconLabelButtons className='buttons'  />
      
    </form>
    </div>
  );
}