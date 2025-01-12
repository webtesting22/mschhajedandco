import React, { useState, useEffect } from "react";
import "../../assets/Styles/AboutUsComponent.css"
import { Row, Col, Image, Modal, Button } from "antd";
import { GiShakingHands } from "react-icons/gi";
import { PiUsersThreeFill } from "react-icons/pi";
import justiciaBack from "./justiciaBack.svg"
import MaheshChhajed from "./MaheshChhajed2.png"
import HemChhajed from "./HemChhajed2.png"
import KrunalPatel from "./KrunalPatel.jpg"
import PreyashiTated from "./PreyashiTated.jpg"
import { Counter } from "../HomeHero/HomeHero";
import { useInView } from "react-intersection-observer";
const AboutUs = () => {
    const [scale, setScale] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentTeamMember, setCurrentTeamMember] = useState(null);
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newScale = Math.min(1 + scrollY / 3000, 1.1);
            setScale(newScale);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        // Start animations after component mounts
        const timerWidth = setTimeout(() => setAnimateWidth(true), 0);
        const timerTransform = setTimeout(() => setAnimateTransform(true), 1000);

        return () => {
            clearTimeout(timerWidth);
            clearTimeout(timerTransform);
        };
    }, []);


    const CounterContainerData = [
        {
            counterTitle: "Years of Experience",
            counterNumber: 30,
            suffix: "+",
            iconImage: <GiShakingHands />
        },
        {
            counterTitle: "Happy Clients",
            counterNumber: 500,
            suffix: "+",
            iconImage: <PiUsersThreeFill />
        }
    ]


    const TeamPeopleCardsData = [
        {
            title: "Mahesh Chhajed",
            position: "Principal Partner",
            image: MaheshChhajed,
            description:
                <>
                    <p>With three decades of experience and focused exposure, Mahesh is well known for his competence & innovation in the field of Direct Taxation and Corporate Advisory Services, including M&A. He is considered as an authority on Income Tax.</p>
                    <p>Mahesh’s vast experience coupled with his knowledge in accountancy, economics and tax laws is immensely appreciated by clients. He focuses on the Mergers and Acquisitions practice of the firm, while providing technical leadership to the International Tax, Transfer Pricing and Direct Tax practice of the firm. He has successfully handled several cases of Mergers & Acquisitions, Joint Ventures and Restructuring including Domestic and Cross-border transactions, International Taxation, Transfer Pricing, Domestic Income Tax and Search and seizure. He has successfully litigated on tax matters for nearly two decades at various quasi-judicial fora like the Commissioner Appeals, Income Tax Tribunals and RERA Trinubnal.</p>
                    <p>He regularly delivers lectures and contributes to various newspapers on issue relating to direct tax laws.</p>
                </>,
            educationDetails: <>
                <p>LL.B. (Law) – Gujarat University</p>
                <p>Chartered Accountant</p>
                <p>Bachelor of Commerce – Gujarat University</p>
            </>
        },
        {
            title: "Hem Chhajed",
            position: "Managing Partner",
            image: HemChhajed,
            description: <>
                <p>Hem is the managing Partner and leads the Indirect Tax Division at the Firm. Afellow Chartered Accountant, Hemhas handled several complex tax disputes and has represented several clients before various departmental authorities. He has advised large number of corporate with theirIndirect Tax structuring and planning. He holds the merit of arguing various RERA, direct tax and indirect tax litigation matters before the Appellate authorities. Hem also focuses on the start-up advisory division started at the firm.</p>
                <p>Hem is a regular contributor to various newspapers in vernacular languages and has addressed various seminars on contemporary tax matters. He has served as Convenor of General Management and Communication Skills Committee and member of Indirect Tax Committee of Ahmedabad Branch and Co-opted Member of Exposure Draft Committee of the Institute of Chartered Accountants of India. To his credit, Hem has authored book titled Handbook on Service Tax published by Navsarjan Publication.</p>

            </>,
            educationDetails: <>
                <p>LL.B. (Law) – Gujarat University</p>
                <p>Chartered Accountant</p>
                <p>Post Graduate Diploma in Investment and Financial Analysis</p>
                <p>Bachelor of Commerce – Gujarat University</p>
            </>

        },
        {
            title: "Krunal Patel",
            position: "Manager- Assurance",
            image: KrunalPatel,
            description: <>
                <p>Presently, Krunal is heading Assurance division at the Firm. He possesses rich experience in the field of auditing and assurance services, corporate law as well as income tax and has successfully served clients across all service, trading and manufacturing industries during the course of his practice. His areas of expertise encompass Statutory and Internal Audit, Tax Audits and IFRS Services. He has handled various key assignments of statutory audits, internal audits, government audit, tax audit, internal control assessments and strategy formation and implementation. Heleads from the front, establishing cogent practices of team management and concepts based on principles of respect for integrity, hard work, dedication, and commitment.</p>
            </>,
            educationDetails: <>
                <p>Chartered Accountant</p>
                <p>Company Secretary</p>
                <p>Masters of Commerce – Gujarat University</p>
            </>
        },
        {
            title: "Preyashi Tated",
            position: "Manager- Direct Taxation",
            image: PreyashiTated,
            description: <>
                <p>Preyashi advises and represents clients on legal issues in direct tax law. Preyashiis dynamic, young and meticulous. She is a diverse professional who excels in handling multitude of legal issues in tax.She combines her understanding of businesses with in-depth knowledge in law to curate innovative solutions for his clients. She has assisted in wide various direct tax litigation issues involving matters such as search, seizures, survey, unexplained cash credits or unaccounted investments. Her Keen eyes for details and legal acumen has already made her an indispensable asset at the firm.</p>
            </>,
            educationDetails: <>
                <p>Chartered Accountant</p>
                <p>Bachelor of Commerce – Ahmedabad University
                </p>
            </>
        }
    ]
    // Replace space with non-breaking space
    const formattedTeamData = TeamPeopleCardsData.map(item => ({
        ...item,
        title: item.title.replace(' ', '\u00A0') // Replaces the first space with a non-breaking space
    }));
    const handleCardClick = (member) => {
        setCurrentTeamMember(member);
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
        setCurrentTeamMember(null);
    };
    return (
        <>
            <section className="AboutUsContainer">
                <div className="AboutUsComponentMainContainer">
                    <div className="ContainerDefault">
                        <div className="AboutUsMainHeaderContainer">
                            <div >
                                <h1>Pioneering Excellence in Chartered Accountancy Since 1988</h1>
                                <p>Delivering trusted financial and legal expertise since 1988. We provide assurance, tax, and advisory services tailored to diverse industries, ensuring transparency and confidentiality.</p>
                            </div>
                        </div>
                        <div className="TopAnimatedCommonBannerAllPages">
                            <div>
                                <img style={{
                                    transform: `scale(${scale})`,
                                    transition: "transform 0.2s ease-out",
                                }}
                                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="CompanyAnimatedNumbersContainer" ref={ref}>
                        <Row style={{ width: "100%" }}>
                        {CounterContainerData.map((item, index) => (
                                <Col lg={6} md={12} style={{ width: "100%" }} key={index}>
                                    <div className="CounterCardContainer">
                                        <div className="CounterCard">
                                            <span>{item.iconImage}</span>
                                            <Counter
                                                value={item.counterNumber} // Adjust this value based on your needs
                                                suffix="+"  // Adjust suffix as needed
                                                trigger={inView} // Use `inView` to trigger the animation when in view
                                            />
                                            <p>{item.counterTitle}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div className="AboutUsInfoContainer">
                        <div className="AboutImageContainer">
                            <img src={justiciaBack} alt="" />
                        </div>
                        <div className="ContainerDefault">
                            <div className="AboutContentContainerText">
                                <h2>Chartered Accountants in Ahmedabad</h2>
                                <p>Founded in 1988, M.S. Chhajed & Co.,specialises in providing assurance Services in Ahmedabad, advisory and tax services across various sectors. The firm is acclaimed for its legal acumen, transparency and confidentiality. Our expertise and opinion is regarded as an authority amongst the upper echelons of taxation law. The Accounting firms in Ahmedabad prides itself for its commitment towards knowing the law and encouraging its professionals to be at the forefront of the latest developments. Over the last three decades, we have worked with a variety of clients – start-ups, small & medium enterprises, large Indian corporates and multinational companies. Our professionals have experience of working in both traditional sectors such as commodities, automobile, pharmaceuticals, petrochemicals and modern sectors such as e-commerce, big data, renewables. We combine our knowledge of the law with industry experience to design legal solutions that our clients can implement.</p>
                                <p>As the world is converging into a single global entity, technology is blurring the lines between geographies, services and solutions. And in this era of a flat, borderless world, we are committed to going beyond service into value addition in the true sense of the word. As an intimately sized firm, we have an intensive client orientated approach in order to address clientele needs and add value to their requirements. To understanding not just what our customer’s want, but what their business needs; to meeting not just immediate requirements, but providing long term solutions; to being not just reactive to client needs but being proactive to solve their future issues. Our well-knit teams of professionals work in tandem focusing on making a difference to the client and providing them with the best and most comprehensive service.</p>
                                <p>Through our ethos and commitment we have earned our clients’ trust by delivering a consistently high level of professional expertise in the field of Assurance, Taxation and Advisory Services. Our clients value long-term relationship enabling us, as their advisers, to gain in-depth knowledge of their financial affairs and requirements. Our services are tailor made keeping in mind the client’s need and we pride ourselves on ensuring that clients are always able to reach decision-makers as and when they need to.</p>
                                <p>Founder and Principal Partner, Mahesh Chhajed has been inspired by the principles of transparency, trusteeship and democracy. Since its inception, M.S. Chhajed & Co. has continued to evolve based on these beliefs in its vision, values, policies and culture; and is rooted firmly in its ideological and philosophical approach on conducting fair business.</p>
                                <p>Infrastructure and technology is the cornerstone of our practice and we invest heavily in updating our system to match global demand. Our team consists of chartered accountant near Ahmedabad and company secretary who are well versed in providing solutions according to industry specifics. Further at we understand our role towards the society at large and various initiates are undertaken as an attempt to give back to the society.</p>
                            </div>
                        </div>
                    </div>
                    <div className="TeamPeoplesContaner">
                        <div className="ContainerDefault">
                            <div>
                                <h2>Team Peoples</h2>
                            </div>
                            <div className="TeamMembersDataContainer">
                                <Row>
                                    {formattedTeamData.map((item, index) => (
                                        <Col key={index} lg={6} md={12}>
                                            <div className="TeamMemberCardContainer" onClick={() => handleCardClick(item)}>

                                                <div>
                                                    <div className="hoverOverlayBlackContainer">

                                                    </div>
                                                    <img src={item.image} alt={item.title} />
                                                </div>
                                                <div>
                                                    <h3>{item.title}</h3>  {/* Corrected here */}
                                                    <span>({item.position})</span>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </div>
                    <Modal
                        title={false}
                        visible={isModalVisible}
                        onCancel={handleModalClose}
                        footer={false}
                        width={800}
                    >
                        {currentTeamMember && (
                            <>
                                <Row>
                                    <Col lg={12} md={12} style={{ width: "100%" }}>
                                        <div style={{ padding: "10px" }}>
                                            <img src={currentTeamMember.image} alt="" style={{ width: "100%" }} />
                                        </div>
                                    </Col>
                                    <Col lg={12} md={12} style={{ width: "100%" }}>
                                        <div className="ModalInsideInfo">
                                            <h1 style={{ marginBottom: "0px" }}>{currentTeamMember.title}</h1>
                                            <p style={{ marginTop: "0px" }}>
                                                <b>Position: </b>
                                                {currentTeamMember.position}
                                            </p>
                                            <br />
                                            <p><b>Education Details:</b> </p>
                                            <div>{currentTeamMember.educationDetails}</div>
                                        </div>
                                    </Col>

                                </Row>

                                <div>{currentTeamMember.description}</div>
                                <br /><br />


                            </>
                        )}
                    </Modal>

                </div>
            </section>
        </>
    )
}
export default AboutUs