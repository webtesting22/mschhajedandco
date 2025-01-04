import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageRoutes from "./HomePageRoutes";
import NavigationBar from "../Components/NavigationBar/Navigationbar";
import Footer from "../Components/Footer/Footer";
import AboutUs from "../Components/AboutUsComponent/AboutUs";

const MainRoutes = () => {
    return (
        <Router>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<HomePageRoutes />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
            <Footer/>
        </Router>
    );
};

export default MainRoutes;
