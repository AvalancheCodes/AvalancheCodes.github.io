import React from 'react';

const SignupNewsletter = () => {
    return (

        <div className="checks">
            <input type="checkbox" name="newsletter" id="newsletter" checked="" />
            <span></span>
            <label htmlFor="newsletter">Sign up for our newsletter!</label>
        </div>
    );
};

export default SignupNewsletter;