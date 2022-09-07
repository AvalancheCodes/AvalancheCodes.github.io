import React from 'react';
import {Link} from "react-router-dom";

const NavLink = (props) => {
    return (
       <Link to={props.to} className="nav-link">
              {props.name}
       </Link>
    );
};

export default NavLink;