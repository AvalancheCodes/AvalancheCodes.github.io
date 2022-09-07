import React from 'react';
import Contact from "../routes/contact";
import SocialInfo from "./social-info";


const Footer = () => {
    return (
        <footer id={"footer"}>
            <Contact />
            <SocialInfo />
            <section className="contactInfo">
                <article>
                    <h4>Contact Information</h4>
                    <ul>
                        <li>Email: hello@planarhead.com</li>
                        <li>Address: 8383 Wilshire Blvd. Beverly Hills, CA 90211</li>
                    </ul>
                    <p className="copy">MAR ©2022</p>
                </article>
            </section>
        </footer>
    );
};

export default Footer;