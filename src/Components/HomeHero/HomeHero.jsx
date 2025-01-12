import React, { useEffect, useState } from "react";
import "../../assets/Styles/HomeHero.css";
import { Row, Col } from "antd";

const HomeHero = () => {
    const [animateWidth, setAnimateWidth] = useState(false);
    const [animateTransform, setAnimateTransform] = useState(false);

    useEffect(() => {
        // Start the width transition immediately after component mounts
        const timerWidth = setTimeout(() => setAnimateWidth(true), 0);

        // Start the translateY transition after the width transition completes
        const timerTransform = setTimeout(() => setAnimateTransform(true), 1000); // Wait for 2s (width animation)

        return () => {
            clearTimeout(timerWidth);
            clearTimeout(timerTransform);
        };
    }, []);

    return (
        <section id="HomeHeroContainer">
            <div className="OverlayBackImageContainer">
                <div className="DarkOverlayContainer">

                </div>
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>          
            <div className="HomeHeroMainContainer ContainerDefault">
                <h1 data-aos="fade-up"
                    data-aos-duration="2000">Top CA firms in Ahmedabad, Gujarat</h1>
                <h2 data-aos="fade-up"
                    data-aos-duration="3000">The Next Generations</h2>
                <div className="CompanyInfoRow">
                    <Row>
                        <Col lg={10}>
                            <div className="HeroContainerParagraph">
                                <p>We're passionate about helping businesses thrive in the digital landscape.</p>
                            </div>
                        </Col>
                        <Col lg={14}>
                            <div className="CompanyDetailsContainer">
                                <div>
                                    <h2>30+</h2>
                                    <p>Years of Experience</p>
                                </div>
                                <div>
                                    <h2>500+</h2>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div
                    className={`ClipPathImageContainer ${animateWidth ? "animateWidth" : ""} ${animateTransform ? "animateTransform" : ""}`}
                >
                    <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
