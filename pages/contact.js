import React, { useState, useEffect } from 'react';
import { FadeInSection, BounceInRightP, BounceInRightLabel } from '../utils/Animations'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Head from 'next/head';

function Contact(props) {

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_USER_ID;

    // when the form is submitted, send email to emailjs server so it can be forwarded to my email
    const handleOnSubmit = (e) => {
        const nameInput = document.querySelector('#nameInput');
        const emailInput = document.querySelector('#emailInput');
        const messageInput = document.querySelector('#messageInput');

        e.preventDefault();

        if (nameInput.value && emailInput.value && messageInput.value) {
            if (!isValidEmail(emailInput.value)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Email',
                    text: 'Please enter a valid email address.',
                });
                return;
            }

            emailjs
                .sendForm(serviceID, templateID, e.target, userID)
                .then((response) => {
                    console.log(response.text);
                    Swal.fire({
                        icon: 'success',
                        title:
                            'Your Message Was Sent Successfully. Please Allow 24-72 Business Hours For Kaileb To Respond.',
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Uh Oh! There was an error processing your request',
                        text:
                            'I apologize, please send me an email directly at hammontreewebdevelopment@gmail.com',
                    });
                    console.log(error);
                });

            e.target.reset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Uh Oh! There was an error processing your request',
                text:
                    'Hello, please make sure that you have filled out all of the required fields before your request can be processed.',
            });
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    // use state changes / ternarys / if statements to evaluate onChange / mouseLeave and e.target.values to determine whether the information the user has put in is acceptable, if it is no message is shown, if it is not then the user will recieve a warning message.
    const [nameRequired, setNameRequired] = useState(false);
    const [emailRequired, setEmailRequired] = useState(false);
    const [checkEmail, setCheckEmail] = useState(false);
    const [messageRequired, setMessageRequired] = useState(false);

    const blankName = (e) => {
        if (e.target.value === '') {
            setNameRequired(true);
        }
    };
    const blankEmail = (e) => {
        if (e.target.value === '') {
            setEmailRequired(true);
        }
    };
    const blankMessage = (e) => {
        if (e.target.value === '') {
            setMessageRequired(true);
        }
    };
    const validName = () => {
        setNameRequired(false);
    }
    const validEmail = (e) => {
        setEmailRequired(false);
        if (/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(e.target.value)) {
            setCheckEmail(false);
        }
        else {
            setCheckEmail(true);
        }
    }
    const validMessage = () => {
        setMessageRequired(false);
    }

    const isNameRequired = nameRequired ? <span className='text-danger'> * required</span> : null;
    const isEmailRequired = emailRequired ? <span className='text-danger'> * required</span> : null;
    const isEmailValid = checkEmail ? <span className='text-danger'> * please enter a valid email address</span> : null;
    const isMessageRequired = messageRequired ? <span className='text-danger'> * required</span> : null;


    useEffect(() => {
        const iframe = document.getElementById("interest-iframe");

        const resizeIframe = () => {
            iframe.style.height = `${iframe.contentWindow.document.body.scrollHeight}px`
        };

        iframe.addEventListener('load', resizeIframe);
        window.addEventListener('resize', resizeIframe);

        return () => {
            iframe.removeEventListener('load', resizeIframe);
            window.removeEventListener('resize', resizeIframe);
        };
    }, []);

    return (
        <>
            <Head>
                <title> Contact | Start Your Project Today | Hammontree Full-Stack Solutions LLC</title>
                <meta name="description" content="Start your project today with Hammontree Full-Stack Solutions LLC. Fill out a General Inquiry Form or take the first step by filling out an Interest Form Questionnaire. Why stop there when you can also book a Free Consultation!" />
                <meta name="keywords" content="Contact, Hammontree Full-Stack Solutions LLC, Free Consultation, Questionnaire, Build your website" />
                <link rel="canonical" href="https://www.kailebhammontree.com/contact" />
            </Head>
            <main className='contact-main'>

                <FadeInSection className='form-card'>
                    <h2 className='form-header'>General Inquiry Form</h2>
                    <form className='form-card-body' onSubmit={handleOnSubmit}>
                        <div className="mb-3">
                            <BounceInRightLabel htmlFor="nameInput" className="form-label">Name:{isNameRequired} </BounceInRightLabel>
                            <input type="text" className="form-control" id="nameInput" name='from_name' placeholder="First Name Last Name" onMouseLeave={blankName} onChange={validName} />
                        </div>
                        <div className="mb-3">
                            <BounceInRightLabel htmlFor="emailInput" className="form-label">Email address:{isEmailRequired}{isEmailValid}</BounceInRightLabel>
                            <input type="email" className="form-control" id="emailInput" name='from_email' placeholder="myemail@example.com" onMouseLeave={blankEmail} onChange={validEmail} />
                        </div>
                        <div className="mb-3">
                            <BounceInRightLabel htmlFor='messageInput' className="form-label">Message:{isMessageRequired}</BounceInRightLabel>
                            <textarea className="form-control" id="messageInput" rows="6" name='message' onMouseLeave={blankMessage} onChange={validMessage}></textarea>
                        </div>
                        <button className='custom-btn hvr-shrink' type='submit'>Submit</button>
                    </form>
                </FadeInSection>

                <FadeInSection className='form-card interest-form'>
                    <div className="form-header">
                        <h2>Start Your Project</h2>
                        <BounceInRightP className='consult-text'>
                            Book Now For A&nbsp;
                            <a id="consult" href='https://app.hellobonsai.com/s/kaileb-hammontree-1/consultation' target='_blank' rel="noopener noreferrer" className='consult-link'>Free Consultation</a>
                        </BounceInRightP>
                    </div>
                    {/* <button className='custom-btn'>Get Started</button> */}
                    <iframe title='interest-form' id='interest-iframe' src="https://app.hellobonsai.com/f/a14a29cd17402aa?embed=true" style={{
                        border: 'none',
                    }} allow='fullscreen'></iframe>
                </FadeInSection>
            </main>
        </>
    );
};

export default Contact;