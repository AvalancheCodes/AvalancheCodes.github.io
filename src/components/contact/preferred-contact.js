import React from 'react';

const PreferredContact = () => {
    return (
        <div className="radioButtons">
            <p>Preferred method of contact:</p>
            <label htmlFor="contactEmail">
                <input type="radio" name="contact" id="contactEmail" value="email" />
                <span className="label"> Email</span>
            </label>

            <label htmlFor="contactTel">
                <input type="radio" name="contact" id="contactTel" value="phone" />
                <span className="label">Phone</span>
            </label>

            <label htmlFor="contactText">
                <input type="radio" name="contact" id="contactText" value="text" />
                <span className="label">Text</span>
            </label>
        </div>
    );
};

export default PreferredContact;
