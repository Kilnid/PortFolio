import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import{BsLinkedin} from 'react-icons/bs'
import{SiDiscord} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_ff4bb7z', 'service_ff4bb7z', form.current, '0I7hQ6SwZKwamMxQu')
    .then((result) => {
        console.log(result.text);
        e.target.reset()
    }, (error) => {
        console.log(error.text);
    });
   
  };

  return (
    <section id="contact">
      <h5>Entrer en contact</h5>
        <h2>Contactez-moi</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ide.kilianpro@gmail.com</h5>
            <a href="mailto:ide.kilianpro@gmail.com" target='_blank'>Envoyer un message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Kilian Ide</h5>
            <a href="https://www.linkedin.com/in/kilian-ide-4646a61a2/" target='_blank'>Envoyer un message</a>
          </article>
          <article className="contact__option">
            <SiDiscord className='contact__option-icon'/>
            <h4>Disord</h4>
            <h5>Kiln#7936</h5>
            <a href="https://discord.com/" target='_blank'>Ajoutez-moi</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Votre Nom Complet' requiered="true"/>
          <input type="email" name='email' placeholder='Votre Email' requiered="true"/>
          <textarea name="message" rows="7" placeholder='Votre message'requiered="true"/>
          <button type='submit' className='btn btn-primary'>Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact