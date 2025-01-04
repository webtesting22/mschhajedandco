import React, { useEffect, useRef, useState } from "react";
import "../../assets/Styles/AboutBrandVideo.css";
import Aboutbrand from "./Aboutbrand.svg";

const AboutBrandVideo = () => {
    const videoContainerRef = useRef(null);
    const [widthPercentage, setWidthPercentage] = useState(30); // Start width at 30%

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Calculate the ratio of the intersection to dynamically set width
                    const progress = Math.min(entry.intersectionRatio, 1);
                    const newWidth = 30 + progress * 50; // Range: 30% to 100%
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
            if (videoContainerRef.current) {
                observer.unobserve(videoContainerRef.current);
            }
        };
    }, []);

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
                                <img src={Aboutbrand} alt="" />
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
                            <h2>A independent member of PrimeGlobal</h2>
                            <p>PrimeGlobal is one of the 5 largest associations of independent accounting firms in the world, comprised of approximately 300 highly successful independent public accounting firms in over 90 countries. PrimeGlobal’s independent member firms house a combined total of over 2,100 partners, 24,000 employees.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutBrandVideo;
