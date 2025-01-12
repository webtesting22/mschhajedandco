import React, { useEffect, useState } from "react";
import "../../assets/Styles/HomeHero.css";
import { Row, Col } from "antd";
import { useInView } from "react-intersection-observer";

const Counter = ({ value, suffix, trigger }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;

        const delay = 2500; // 3 seconds delay
        const duration = 4000; // Animation duration in milliseconds
        const startTimestamp = performance.now() + delay; // Include the delay in the start time

        const animate = (currentTime) => {
            if (currentTime < startTimestamp) {
                requestAnimationFrame(animate); // Wait until the delay is over
                return;
            }

            const elapsedTime = currentTime - startTimestamp;
            const progress = Math.min(elapsedTime / duration, 1); // Cap progress at 1 (100%)
            const newValue = Math.round(progress * value);

            setCount(newValue);

            if (progress < 1) {
                requestAnimationFrame(animate); // Continue animation
            }
        };

        requestAnimationFrame(animate);

        return () => setCount(0); // Reset counter on unmount or trigger change
    }, [value, trigger]);

    return (
        <h2>
            {count}
            {suffix}
        </h2>
    );
};

const HomeHero = () => {
    const [animateWidth, setAnimateWidth] = useState(false);
    const [animateTransform, setAnimateTransform] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

    useEffect(() => {
        // Start animations after component mounts
        const timerWidth = setTimeout(() => setAnimateWidth(true), 0);
        const timerTransform = setTimeout(() => setAnimateTransform(true), 1000);

        return () => {
            clearTimeout(timerWidth);
            clearTimeout(timerTransform);
        };
    }, []);

    const CounterNumbersData = [
        { title: "Years of Experience", value: 30, suffix: "+" },
        { title: "Happy Clients", value: 500, suffix: "+" },
    ];

    return (
        <section id="HomeHeroContainer" ref={ref}>
            <div className="OverlayBackImageContainer">
                <div className="DarkOverlayContainer"></div>
                <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
            </div>
            <div className="HomeHeroMainContainer ContainerDefault">
                <h1 data-aos="fade-up" data-aos-duration="2000">
                    Top CA firms in Ahmedabad, Gujarat
                </h1>
                <h2 data-aos="fade-up" data-aos-duration="3000">
                    The Next Generations
                </h2>
                <div className="CompanyInfoRow">
                    <Row>
                        <Col lg={10}>
                            <div className="HeroContainerParagraph">
                                <p>We're passionate about helping businesses thrive in the digital landscape.</p>
                            </div>
                        </Col>
                        <Col lg={14}>
                            <div className="CompanyDetailsContainer">
                                {CounterNumbersData.map((item, index) => (
                                    <div key={index}>
                                        <Counter
                                            value={item.value}
                                            suffix={item.suffix}
                                            trigger={inView} // Trigger animation when in view
                                        />
                                        <p>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </div>
                <div
                    className={`ClipPathImageContainer ${animateWidth ? "animateWidth" : ""} ${
                        animateTransform ? "animateTransform" : ""
                    }`}
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
