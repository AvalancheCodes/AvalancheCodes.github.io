import React from 'react';
import ArtistProfile from "../components/artist-profile";
import TextGridContainer from "../components/textGrid/text-grid-container";
import Cta from "../components/cta";

const Home = () => {
    return (
        <section className="contentSection">
            <article>
                <h1>Our Mission</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Accusamus, adipisci,
                    alias, asperiores atque autem.sit amet,
                    consectetur adipisicing elit sit amet, consectetur
                </p>
            </article>
            <TextGridContainer />
            {/*<Cta />*/}
            <ArtistProfile />
        </section>
    );
};

export default Home;