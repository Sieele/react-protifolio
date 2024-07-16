import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-contained'>
        <h2>Contact Me</h2>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard 
                    iconUrl='./assets/images/mail.png'
                    text='rikay.sm@gmail.com' />
                <ContactInfoCard
                    iconUrl='./assets/images/github-96.png'
                    text='https://github.com/Sieele' />,                
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe