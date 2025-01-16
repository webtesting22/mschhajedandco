import React from "react";
import "./Career.css"
import CareerJobData from "./CareerJobData";
import { Row, Col } from "antd";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

const Careers = () => {
    return (
        <>
            <section id="CareersContentContainer">
                <div className="ContainerDefault">
                    <div className="TopBigHeading">
                        <h1>Careers at M. S. Chhajed & Co.: Your Journey Starts Here</h1>
                        <p>Build a Successful Career in Accounting and Law.
                            Join a Team of Visionaries and Experts.</p>
                    </div>

                    <div className="CareersJobsContentContainer">
                        <Row style={{ width: "100%" }}>
                            <div className="CareersCardsFilterSearchContainer">

                            </div>
                            {CareerJobData.map((item, index) => (
                                <Col lg={8} md={12} style={{ width: "100%" }}>
                                    <div className="CareersCardsContainer">
                                        <div>
                                            <h4>{item.jobTitle}</h4>
                                            <div className="TagStyle">
                                                <p><BsSuitcaseLgFill />{item.jobType}</p>
                                                <p><IoLocationSharp />{item.jobLocation}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Careers