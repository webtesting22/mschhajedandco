import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BlogSeparate.css"
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const BlogSeparate = () => {
    const { Blogsname } = useParams();

    const BlogsContent = {
        "relaxation-in-due-dates": (
            <>
                <div className="BlogImageAndHeadingContainer">
                    <h2>Relaxation in Due Dates</h2>
                </div>
                <p>Amidst the global pandemic and the phased reopening of the economy, the Central Board of Direct Taxes has extended the due dates for various direct tax compliances.
                </p>
                <div className="AnimatedBtnContainer">
                    <Link to=""><button className="CommonBtnStyle"><FaArrowRightLong />&nbsp;&nbsp;READ MORE&nbsp;&nbsp;<FaArrowRightLong /></button></Link>
                </div>
            </>
        ),
        "gst-return": (
            <>
                <div className="BlogImageAndHeadingContainer">
                    <h2>GST Return</h2>
                    <div>
                    <img src="/Images/GST.jpg" alt="" />
                    </div>
                </div>
                <p>The document is intended for private circulation and knowledge-sharing purposes only. The material and information contained herein are intended to provide general information on a particular subject or subjects and do not constitute an exhaustive treatment of such subject(s). The information is not intended to be relied upon as the sole basis for any decision that may affect you or your business.

                </p>
                <div className="AnimatedBtnContainer">
                    <Link to=""><button className="CommonBtnStyle"><FaArrowRightLong />&nbsp;&nbsp;READ MORE&nbsp;&nbsp;<FaArrowRightLong /></button></Link>
                </div>
            </>
        ),
        "relief-from-gst-brouhaha-solar-industry": (
            <>
                <div className="BlogImageAndHeadingContainer">
                    <h2>Relief from GST brouhaha-Solar Industry</h2>
                </div>
                <p>Under the leadership of our Hon’ble Prime Minister, India is undertaking the largest renewable capacity expansion program in the world. The Ministry of New and Renewable Energy (MNRE) has taken several steps to achieve the clean energy goals of the current government by implementing various schemes, such as the Solar Park Scheme, Solar Rooftop Scheme, and Solar PV power plants on canal banks and canal tops.</p>
                <div className="AnimatedBtnContainer">
                    <Link to=""><button className="CommonBtnStyle"><FaArrowRightLong />&nbsp;&nbsp;READ MORE&nbsp;&nbsp;<FaArrowRightLong /></button></Link>
                </div>
            </>
        ),
        "tax-collected-at-source-on-sale-of-goods": (
            <>
                <div className="BlogImageAndHeadingContainer">
                    <h2>Tax Collected at Source on Sale of Goods</h2>
                </div>
                <p>Vide the Finance Act, 2020, a new clause (1H) has been inserted into Section 206C of the Income Tax Act, 1961 (“the Act”), to expand the scope of Tax Collection at Source (“TCS”) provisions. A seller of goods is now required to collect tax at source at the rate of 0.1% from a buyer of goods upon receipt of consideration for the sale of goods. Prior to this insertion, TCS provisions were applicable only to the sale of selected goods, namely alcoholic liquor for human consumption, scrap, tendu leaves, timber obtained from forests, and lease contracts for parking lots and toll plazas.</p>
                <div className="AnimatedBtnContainer">
                    <Link to=""><button className="CommonBtnStyle"><FaArrowRightLong />&nbsp;&nbsp;READ MORE&nbsp;&nbsp;<FaArrowRightLong /></button></Link>
                </div>
            </>
        ),
        "doing-business-in-india": (
            <>
                <div className="BlogImageAndHeadingContainer">
                    <h2>Doing Business in India</h2>
                </div>
                <p>This guide has been prepared by M.S. Chhajed & Co. with the intent of providing stakeholders with an overview of India’s demographic profile, key sectors, insights into the regulatory framework, forms of business enterprises, and relevant tax regimes in a concise manner. The information presented in this guide has been validated up to 31st March 2020.</p>
                <div className="AnimatedBtnContainer">
                    <Link to=""><button className="CommonBtnStyle"><FaArrowRightLong />&nbsp;&nbsp;READ MORE&nbsp;&nbsp;<FaArrowRightLong /></button></Link>
                </div>
            </>
        ),
        "equalisation-levy": (
            <>
                <div className="BlogImageAndHeadingContainer">
                    <h2>Equalisation Levy</h2>
                </div>
                <p>In today’s digital age, business operations are largely agnostic to geographical boundaries. New and innovative business models present tax authorities with numerous challenges in interpreting and applying taxing provisions to such transactions. The conventional approach to taxation, based on the physical presence of a business in a particular jurisdiction, now seems outdated.</p>
                <div className="AnimatedBtnContainer">
                    <Link to=""><button className="CommonBtnStyle"><FaArrowRightLong />&nbsp;&nbsp;READ MORE&nbsp;&nbsp;<FaArrowRightLong /></button></Link>
                </div>
            </>
        )
    }


    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // Adds smooth scrolling
        });
    }, []);
    return (
        <>
            <section id="BlogSeparateContentContainer">
                <div className="AllBlogsMainContainer">
                    <div className="ContainerDefault">
                        {BlogsContent[Blogsname] || (
                            <p>Sorry, no content available for this practice.</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
export default BlogSeparate