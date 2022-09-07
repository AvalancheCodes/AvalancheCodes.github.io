import React from 'react';
import PreferredContact from "../components/contact/preferred-contact";

const Contact = () => {
    return (
        <section className="form" id="contact">
            <h3>Got questions? Get in touch</h3>
            <p className="formIntro">
                We're here to help and answer any question you might have.
                We look forward to hearing from you.
            </p>

            <form action="src/routes/contact#" method="post" id="contactForm" className="contactForm">
                <div>
                    <label htmlFor="fullName">Your Name:</label>
                    <input type="text" name="fullName" id="fullName" required="" />
                </div>

                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" name="phone" id="phone" maxLength="12" placeholder="111-222-3333" required="" />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required="" />
                </div>

               <PreferredContact />

                <div>
                    <label htmlFor="msg">Your Message / Question:</label>
                    <textarea name="msg" id="msg"></textarea>
                </div>

                <button type="submit" value="Send Message" form="contactForm"><i className="fas fa-fish"></i> Send
                    Request
                </button>
            </form>
        </section>
    );
};

export default Contact;