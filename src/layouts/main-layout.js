import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from "../components/footer";
import Gallery from "../routes/gallery";
import ArtistProfile from "../components/artist-profile";
import Topnav from "../components/nav/topnav";
import Hero from "../components/hero";
import Cta from "../components/cta";

const MainLayout = () => {
    return (
        <div className="blockLayout">
            <div className="wrapper">
                <Hero />
                <Topnav />
                <main><Outlet /></main>
            </div>

            <Footer />
        </div>
    );
};

export default MainLayout;