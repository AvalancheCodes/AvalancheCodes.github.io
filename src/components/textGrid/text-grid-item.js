import React from 'react';
import {Link} from "react-router-dom";

const TextGridItem = (props) => {
    return (
       <>
           <img src={props.src} alt={props.alt} />
           <h3>{props.title}</h3>
           <p>
                {props.text}
           </p>
           <Link to={props.to} className="btn">{props.btnText}</Link>
       </>
    );
};

export default TextGridItem;