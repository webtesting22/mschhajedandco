import React from "react";
import "../../assets/Styles/AboutCompanyHome.css"
import { Row, Col } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const AboutComapanyHome = () => {
    return (
        <>
            <section id="AboutCompanyHomeContainer">
                <div className="ContainerDefault">
                    <div className="AboutCompanyHomeMainContainer ">
                        <h4>About&nbsp;M.S. CHHAJED AND CO.</h4>
                    </div>
                    <div className="SectionPadding">

                    </div>
                    <div className="AboutCompanyInfoHomeContainer">
                        <Row>
                            <Col lg={12}>
                                <div className="AboutCompanyImageHomeContainer">
                                    <img src="/Images/CA firms.jpg" alt="" />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="AboutCompanyContentHomeContainer">
                                    <h2>Top CA firms in Ahmedabad, Gujarat</h2>
                                    <p>M. S. Chhajed & Co. is one of the leading multi-disciplinary Top Chartered Accountants firm in Ahmedabad, Gujarat. Founded in 1988, the Accounting firms in Gujarat specializes in areas such as Audit, Assurance Services, Tax Structuring Services, Tax Dispute Resolution, Foreign Exchange Regulation, Project Finance and Corporate Laws.</p>
                                    <div className="AnimatedBtnContainer">
                                        <Link to="/about-us"><button className="CommonBtnStyle"><FaArrowRightLong />&nbsp;&nbsp;READ MORE&nbsp;&nbsp;<FaArrowRightLong /></button></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutComapanyHome