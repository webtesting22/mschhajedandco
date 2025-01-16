import React, { useState, useEffect } from 'react';
import { Button } from 'antd'; // Optional: If you're using Ant Design for styling
import { ArrowUpOutlined } from '@ant-design/icons'; // Optional: If you're using Ant Design for the icon
import "./ScrollToTop.css"
const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Function to show or hide the button based on scroll position
        const handleScroll = () => {
            if (window.scrollY > 300) { // Show button after scrolling 300px
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll to the top
        });
    };

    return (
        isVisible && (
            <Button
                type="primary"
                shape="circle"
                icon={<ArrowUpOutlined />}
                className="scroll-to-top-btn"
                onClick={scrollToTop}
            />
        )
    );
};

export default ScrollToTopButton;
