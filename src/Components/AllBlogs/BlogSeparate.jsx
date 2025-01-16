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
                <p>Amidst the global pandemic and with phase wise re-opening of the economy, the Central Board of Direct Taxes has extended the due dates for various direct tax compliances.</p>
                <div className="AnimatedBtnContainer">
                    <Link to=""><button className="CommonBtnStyle"><FaArrowRightLong />&nbsp;&nbsp;READ MORE&nbsp;&nbsp;<FaArrowRightLong /></button></Link>
                </div>
            </>
        ),
        "gst-return": (
            <>
                <div className="BlogImageAndHeadingContainer">
                    <h2>GST Return</h2>
                </div>
                <p>The document is intended for private circulation and for knowledge sharing purpose only. This
                    material and the information contained herein is intended to provide general information on a
                    particular subject or subjects and is not an exhaustive treatment of such subject(s). The information
                    is not intended to be relied upon as the sole basis for any decision which may affect you or your
                    business.

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
                <p>Under the leadership of our Hon’ble Prime Minister, India is undertaking the largest renewable capacity expansion programme in the world. Ministry of New and Renewable Energy (‘MNRE’) has taken several steps to fructify the clean energy goal of current government by implementing various schemes such as Solar Park, Solar Roof Top Scheme, Solar PV power plants on Canal Bank and Canal Tops etc.</p>
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
                <p>Vide Finance Act, 2020, new clause (1H) has been inserted in section 206C of the Income Tax Act, 1961 (“the Act”) to expand the scope of Tax Collection at Source (“TCS”) provisions. A seller of goods is now required to collect tax at source at the rate of 0.1% from a buyer of goods on receipt of consideration for sale of goods. Prior to the above insertion, TCS provisions were applicable on sale of selected goods namely, alocholic liquor for human consumption, scrap, tendu leaves, timber obtained from forest, lease contract of parking lots and toll plaza.</p>
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
                <p>This guide has been prepared by M.S. Chhajed & Co. with the intent to giving stakeholders an overview of the demographic profile of India, key sectors, an insight into the regulatory framework, form of business enterprises and relevant tax regimes in India in a concise manner. The information presented in this guide has been validated upto 31st March 2020.</p>
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
                <p>Business in today’s digital age is to a significant extent agnostic to geographical
                    boundaries. New and innovative business models have the taxman grappling with
                    numerous challenges regarding the taxing provisions of such transaction. The
                    conventional approach of taxation based on physical presence of a business in a particular
                    jurisdiction seems out dated.</p>
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