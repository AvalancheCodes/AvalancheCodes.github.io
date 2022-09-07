import React from 'react';

const Gallery = () => {
    return (
        <section className="gallery" id="gallery">
            <h1>Checkout what inspires us</h1>
            <div className="galleryWrap">
                <img src="/gallery/gal_1_w.jpg" alt=""/>
                <img src="/gallery/gal_2_w.jpg" alt=""/>
                <img src="/gallery/gal_4_p.jpg" alt=""/>
                <img src="/gallery/gal_3_w.jpg" alt=""/>
                <img src="/gallery/gal_5_p.jpg" alt=""/>
            </div>
        </section>
    );
};

export default Gallery;