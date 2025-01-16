import React, { useEffect, useRef, useState } from "react";
import "../../assets/Styles/AboutBrandVideo.css";
import Aboutbrand from "./Aboutbrand.svg";

const AboutBrandVideo = () => {
    const videoContainerRef = useRef(null);
    const [widthPercentage, setWidthPercentage] = useState(30); // Start width at 30%
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if it's mobile device
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Mobile breakpoint (you can adjust this value)
        };

        // Call once on mount
        handleResize();

        // Add resize event listener
        window.addEventListener("resize", handleResize);

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Calculate the ratio of the intersection to dynamically set width
                    const progress = Math.min(entry.intersectionRatio, 1);
                    const newWidth = isMobile
                        ? 100 // For mobile, set max width to 100%
                        : 30 + progress * 50; // For desktop, range from 30% to 80%

                    setWidthPercentage(newWidth);
                }
            });
        };

        const observerOptions = {
            root: null, // Observe relative to the viewport
            threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Breakpoints at every 1%
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (videoContainerRef.current) {
            observer.observe(videoContainerRef.current);
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            if (videoContainerRef.current) {
                observer.unobserve(videoContainerRef.current);
            }
        };
    }, [isMobile]);

    return (
        <>
            <section id="AboutBrandVideoContainer">
                <div className="ContainerDefault">
                    <div className="AnimatedVideoHeaderContainer">
                        <div>
                            <h2>Innovate</h2>
                        </div>
                        <div>
                            <h2>Discover</h2>
                        </div>
                        <div>
                            <h2>Create</h2>
                        </div>
                        <div className="animatedSpinBoxContainer">
                            <div className="AnimatedBoxContainer">
                                <img src={Aboutbrand} alt="About Brand" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="AnimatedVideoContainer"
                        ref={videoContainerRef} // Attach ref for observation
                    >
                        <div
                            className="video-container"
                            style={{
                                width: `${widthPercentage}%`, // Dynamically set width
                                transition: "width 0.1s ease-in-out", // Smooth transition
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/Tu8Sc23fu1k?autoplay=1&loop=1&mute=1&playlist=Tu8Sc23fu1k"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="AboutBrandComapanyDetails">
                        <div>
                            <h2>An independent member of PrimeGlobal</h2>
                            <p>PrimeGlobal is one of the Five largest associations of independent accounting firms in the world, comprising approximately 300 highly successful independent public accounting firms across over 90 countries. PrimeGlobal’s independent member firms collectively include more than 2,100 partners and 24,000 employees.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutBrandVideo;
