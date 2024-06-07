import React, { useState } from "react";
import './Contact.css';

const Contact = () => {

    const contactInitialInfo = {
        name: '', email: '', phoneNumber: '', subject: '', message: '' 
     }

    const [contactInfo, setContactInfo] = useState(contactInitialInfo);
    const [sendButtonText, setSendButtonText] =useState('Send Message');
    const [status, setStatus] = useState({});
    const [showFeedback, setShowFeedback] = useState(false);

    const sendEmail= async () => {
        console.log(contactInfo);
        let result;
        setSendButtonText('Sending Message...');
        try {
            let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(contactInfo),
            });
            result = await response.json();
        } catch (error) {
            result = { code: 503 };
        }
        setSendButtonText('Send Message');
        setContactInfo(contactInitialInfo);
        if( result.code == 200) {
            setStatus({ succes:true, message: "E-mail sent successfully!" });
        } else {
            setStatus({ succes: false, message: "Something went wrong, please try again later!" });
        }
        setShowFeedback(true);
    };

    const closeFeedback = () => setShowFeedback(false);

    return (
        <div id="contact">
            <div className="contact-content">
                <h1>Contact <span>Me</span></h1>
                <div className="send-email">
                    <div className="credentials">
                        <input type="text" placeholder="Name" value={contactInfo.name} onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}></input>
                        <input type="text" placeholder="E-mail" value={contactInfo.email} onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}></input>
                        <input type="text" placeholder="Phone Number" value={contactInfo.phoneNumber} onChange={(e) => setContactInfo({ ...contactInfo, phoneNumber: e.target.value })}></input>
                        <input type="text" placeholder="Subject" value={contactInfo.subject} onChange={(e) => setContactInfo({ ...contactInfo, subject: e.target.value })}></input>
                    </div>
                    <div className="message-e-submit">
                        <textarea cols="30" rows={10} placeholder="Message" value={contactInfo.message} onChange={(e) => setContactInfo({ ...contactInfo, message: e.target.value })}></textarea>
                        <button onClick={sendEmail}>{sendButtonText}</button>
                    </div>
                </div>
            </div>
            {
                showFeedback &&
                <div className={status.succes ? "succesStatus feedback" : "failureStatus feedback"}>
                    <p>{ status.message }</p>
                    <button className="close-feedback" onClick={closeFeedback}>
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                        >
                            <path d="M19 3H5a2 2 0 00-2 2V19a2 2 0 002 2H19a2 2 0 002-2V5a2 2 0 00-2-2m-3.4 14L12 13.4 8.4 17 7 15.6l3.6-3.6L7 8.4 8.4 7l3.6 3.6L15.6 7 17 8.4 13.4 12l3.6 3.6-1.4 1.4z" />
                        </svg>
                    </button>
                </div>
            }
        </div>
    )
}

export default Contact;
