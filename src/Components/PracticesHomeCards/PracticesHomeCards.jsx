import React from "react";
import { Row, Col } from "antd";
import "../../assets/Styles/PracticesHomeCards.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const PracticesHomeCards = () => {

    const PracticeCardData = [
        {
            cardImage: "https://images.unsplash.com/photo-1684512872939-74a65528b829?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardTitle: "India Strategy- Doing Business in India",
            cardContent: "India business advisory and set-up services",
            practiceName: "india-strategy-doing-business-india",
        },
        {
            cardImage: "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardTitle: "Start Up services",
            cardContent: "Set-up, compliance and business advisory services",
            practiceName: "start-up-services"
        },
        {
            cardImage: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardTitle: "Assurances",
            cardContent: "Statutory audit, tax audit, internal audit and risk assessments",
            practiceName: "assurances"
        },

        {
            cardImage: "https://images.unsplash.com/photo-1556740772-1a741367b93e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardTitle: "Transaction Advisory",
            cardContent: "Financial due diligence, business valuation and model-building",
            practiceName: "transaction-advisory"
        },
        {
            cardImage: "https://images.unsplash.com/photo-1635859890085-ec8cb5466806?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardTitle: "Direct Taxes",
            cardContent: "Tax planning, optimisation and filing for corporates",
            practiceName: "direct-taxes"
        },
        {
            cardImage: "https://images.unsplash.com/photo-1554224155-a1487473ffd9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardTitle: "Goods and Service Tax",
            cardContent: "GST planning, advisory and compliance services for corporates",
            practiceName: "goods-and-services-tax"
        },
        {
            cardImage: "https://images.unsplash.com/photo-1615406839587-0276084b72bb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardTitle: "Transfer Pricing",
            cardContent: "Benchmarking and transfer pricing studies, documentation, planning and advisory",
            practiceName: "transfer-pricing"
        },
        {
            cardImage: "https://plus.unsplash.com/premium_photo-1726797661357-f7897f35f865?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardTitle: "Knowledge Process Outsourcing",
            cardContent: "Financial accounting and tax compliances for corporates",
            practiceName: "knowledge-process-outsourcing"
        },
        {
            cardImage: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardTitle: "Commercial and Legal Assistance",
            cardContent: "Business model building, assistance for agreements and in negotiations",
            practiceName: "Commertial-and-legal-assistance"
        },
    ]
    return (
        <>
            <section id="PracticesHomeCardsContainer">
                <div className="PracticesHomeMainContainer ContainerDefault">
                    <div>
                        <h1>PRACTICES</h1>
                    </div>
                    <Row>
                        {PracticeCardData.map((item, index) => (
                            <Col lg={8} md={12} style={{ width: "100%" }} key={index}>

                                <div className="PracticeCardStyleContainer">
                                    <div className="CardBodyContainer">
                                        <div className="CardImageHomeContainer">
                                            <img src={item.cardImage} alt="" />
                                        </div>
                                        <div className="CardContentContainer">
                                            <h4>{item.cardTitle}</h4>
                                            <p>{item.cardContent}</p>
                                            <div className="AnimatedBtnContainer">
                                                <Link to={`/practices/${item.practiceName}`}>
                                                    <button className="CommonBtnStyle"><FaArrowRightLong />&nbsp;&nbsp;READ MORE&nbsp;&nbsp;<FaArrowRightLong /></button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </>
    )
}
export default PracticesHomeCards