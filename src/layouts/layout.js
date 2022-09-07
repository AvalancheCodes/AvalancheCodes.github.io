import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./main-layout";
import Gallery from "../routes/gallery";
import ArtistProfile from "../components/artist-profile";
import Home from "../routes/home";

const Layout = () => {
    return (
        <>
            <Routes>
                {/* //--- MainLayout Starts  */}
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="artist-profile" element={<ArtistProfile />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
                {/* //--- MainLayout Ends  */}
            </Routes>
        </>
    );
};

export default Layout;