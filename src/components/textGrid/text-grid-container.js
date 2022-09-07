import React from 'react';
import postsSummary from "../../data/postsSummary";
import TextGridItem from "./text-grid-item";


const TextGridContainer = () => {
    return (
        <ul className="blockList">
            {postsSummary.map((post, index) => (
                <li key={post.title}>
                    <TextGridItem src={post.src}
                                  alt={post.alt}
                                  title={post.title}
                                  text={post.summary}
                                  to={post.to}
                                  btnText={post.btnText} />
                </li>
            ))}
        </ul>
    );
};

export default TextGridContainer;