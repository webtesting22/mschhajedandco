import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageRoutes from "./HomePageRoutes";
import NavigationBar from "../Components/NavigationBar/Navigationbar";
import Footer from "../Components/Footer/Footer";
import AboutUs from "../Components/AboutUsComponent/AboutUs";
import AllBlogs from "../Components/AllBlogs/AllBlogs";
import PracticesSeparate from "../Components/PracticesHomeCards/PracticesSeparate";
import ScrollToTopButton from "../Components/ScrollToTop/ScrollToTop";
import BlogSeparate from "../Components/AllBlogs/BlogSeparate";
import Careers from "../Components/Career/Career";

const MainRoutes = () => {
    return (
        <Router>
            <NavigationBar />
            <ScrollToTopButton />
            <Routes>
                <Route path="/" element={<HomePageRoutes />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/insights-newsroom" element={<AllBlogs />} />
                <Route path="/practices/:practiceName" element={<PracticesSeparate />} />
                <Route path="/insights-newsroom/:Blogsname" element={<BlogSeparate />} />
                <Route path="/career" element={<Careers />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default MainRoutes;
