import React from "react";
import "../../assets/Styles/Footer.css"
import { Row, Col, Input } from "antd";
import { MdKeyboardArrowRight } from "react-icons/md";
import Navigationlinks from "../NavigationBar/NavigationLinksData";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section id="FooterContainer">
                <div className="ContainerDefault">
                    <Row>
                        <Col lg={10} md={12}>
                            <div className="LogoandNewsLaterContainer">
                                <h1>LogoImage</h1>
                                <p>Subscribe to our newsletter</p>
                                <span>Creative thinkers work collaboratively to bring</span>

                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "30px" }}>
                                    <Input placeholder="Enter You Newsletter" />
                                    <MdKeyboardArrowRight />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={12}>
                            <div className="SocialContainer">
                                <h4>Socials</h4>
                                <ul>
                                    <li><FaFacebook />Facebook</li>
                                    <li><FaLinkedin />Linkedin</li>
                                    <li><FaYoutube />YouTube</li>
                                    {/* <li>+91 79 4890 2330</li> */}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4} md={12}>
                            <div className="CompanyContainer">
                                <h4>Company</h4>
                                <ul>
                                    {Navigationlinks.map((item, index) => (
                                        <li key={index}>
                                            {item.link}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                      
                        <Col lg={4} md={12}>
                            <div className="LegalInfo">
                                <h4>Legal Info</h4>
                                <ul>
                                    <li>Regulatory Disclosures</li>
                                    <li>Privacy and Security</li>
                                    <li>Terms of Use</li>
                                    <li>Cookie Policy</li>
                                    <li>Archives</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="CopyWriteTextContainer">
                    <p>@2025 <Link to="https://www.outleadsolutions.com/" target="_blank">OutLead solutions.</Link> All rights reserved.</p>
                </div>
            </section>
        </>
    )
}
export default Footer