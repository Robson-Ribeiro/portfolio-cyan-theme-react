import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <div className="contact-content">
                <h1>Contact <span>Me</span></h1>
                <div className="send-email">
                    <div className="credentials">
                        <input type="text" placeholder="Name"></input>
                        <input type="text" placeholder="E-mail"></input>
                        <input type="text" placeholder="Phone Number"></input>
                        <input type="text" placeholder="Subject"></input>
                    </div>
                    <div className="message-e-submit">
                        <textarea cols="30" rows={10} placeholder="Message"></textarea>
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
