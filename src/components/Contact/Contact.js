import React, { useState } from "react";
import './Contact.css';

const Contact = () => {

    const [contactInfo, setContactInfo] = useState({
       name: '', email: '', phoneNumber: '', subject: '', message: '' 
    });

    const sendEmail= () => {
        console.log(contactInfo);
    }

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
                        <button onClick={sendEmail}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
