import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageRoutes from "./HomePageRoutes";
import NavigationBar from "../Components/NavigationBar/Navigationbar";
import Footer from "../Components/Footer/Footer";
import AboutUs from "../Components/AboutUsComponent/AboutUs";
import AllBlogs from "../Components/AllBlogs/AllBlogs";
import PracticesSeparate from "../Components/PracticesHomeCards/PracticesSeparate";

const MainRoutes = () => {
    return (
        <Router>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<HomePageRoutes />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/insights-newsroom" element={<AllBlogs />} />
                <Route path="/practices/:practiceName" element={<PracticesSeparate />} />
            </Routes>
            <Footer/>
        </Router>
    );
};

export default MainRoutes;
