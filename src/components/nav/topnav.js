import React from 'react';
import {Link} from "react-router-dom";
import NavLink from "./nav-link";

const pages = [
    {name: 'Home', to: '/'},
    // {name: 'About', to: '/about'},
    {name: 'Gallery', to: '/gallery'},
    // {name: 'Contact', to: '/contact'},

]
const TopNav = () => {
    return (
        <section className="navWrap">
            <img src="/logo192.png" alt="Vincent Logo" className="logo" />
            {/*<input type="checkbox" id="navToggle" className="navToggle" />*/}
            {/*<label htmlFor="navToggle" className="navToggleLabel"><span></span>*/}
            {/*</label>*/}
            <nav>
               <ul>
                   {pages.map((page, index) => (
                       <li key={page.name}>
                           <NavLink name={page.name} to={page.to} /></li>
                       ))}
                </ul>

            </nav>
        </section>
    );
};

export default TopNav;