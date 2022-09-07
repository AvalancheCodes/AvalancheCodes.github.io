import React from 'react';

const ArtistProfile = () => {
    return (
        <section className="artistProfile">
            <div className="about">
                <h2>About Vincent</h2>
                <p>
                    Vincent Willem van Gogh (30 March 1853 –
                    29 July 1890) was a Dutch Post-Impressionist painter who posthumously became one of the most
                    famous and influential figures in Western art history. In a decade, he created about
                    2,100 artworks, including around 860 oil paintings, most of which date from the last
                    two years of his life. They include landscapes, still lifes, portraits, and self-portraits,
                    and are characterised by bold colours and dramatic, impulsive and expressive brushwork
                    that contributed to the foundations of modern art. He was not commercially successful and,
                    struggling with severe depression and poverty, committed suicide at the age of 37
                </p>
            </div>
            <div className="artistImage">
                <img src="/artist/profile_pic.jpeg" />
            </div>
        </section>
    );
};

export default ArtistProfile;