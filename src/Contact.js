import React, { useState } from 'react'
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com'
import "./contactus.scss"


init('NhcWsGRfBsw2TmjEa');

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);


    const submit = () => {
        if (name && email && message) {
           // TODO - send mail
            console.log("HHH", name, message, email)
           const serviceId = 'service_026144j';
           const templateId = 'template_0t0cmal';
           const userId = 'NhcWsGRfBsw2TmjEa';
           const templateParams = {
               name,
               email,
               message
           };

           emailjs.send(serviceId, templateId, templateParams, userId)
               .then(response => console.log(response))
               .then(error => console.log(error));


    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };



    return (
        <div>
            <div className='containerhead'>
                    <div className = ""> 
                        <h2 className="main-title-contact" style={{color : "gray"}}>ContactMe<span className = "blue">&#9632;</span> </h2>
                        <div className="blue_line"></div>
                    </div>
                </div>
        

        <div id="contact-form">
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
        <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        <button onClick={submit}>Send Message</button>

        <span className={emailSent ? 'visible' : null}>Thank you for your message, I will be in touch in no time!</span>
    </div>
    </div>
    );
};

export default Contact



