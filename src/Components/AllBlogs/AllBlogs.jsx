import React from "react";
import { Tabs, Row, Col } from "antd";
import BlogData from "../InSights/BlogData";
import "../../assets/Styles/AllBlogs.css";

const AllBlogs = () => {
    const { TabPane } = Tabs;

    // Filter blogs by tag
    const getBlogsByTag = (tag) => {
        return BlogData.filter((blog) => blog.tag === tag);
    };

    return (
        <>
            <section id="AllBlogsContainer">
                <div className="AllBlogsMainContainer">
                    <div className="ContainerDefault">
                        <div className="TopBigHeading">
                            <h1>Insights from Gujarat’s Top Chartered Accountants</h1>
                            <p>Discover how M. S. Chhajed & Co. is shaping financial strategies for success.</p>
                        </div>
                        <div className="TabsContainer">
                            <Tabs defaultActiveKey="1">
                                {/* Insights Tab */}
                                <TabPane tab="Insights" key="1">
                                    <Row gutter={[16, 16]}>
                                        {getBlogsByTag("Insights").map((item, index) => (
                                            <Col lg={12} md={24} key={index}>
                                                <div className="BlogPostCardContainer">
                                                    <div className="BlogPostImageContainer">
                                                        <img src={item.blogImage} alt={item.blogTitle} />
                                                    </div>
                                                    <div className="BlogPostContentContainer">
                                                        <h2>{item.blogTitle}</h2>
                                                        <hr />
                                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                            <p>
                                                                {item.blogDate} &nbsp;
                                                                <b>
                                                                    <span>({item.tag})</span>
                                                                </b>
                                                            </p>
                                                            <p>{item.blogCustomName}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </TabPane>

                                {/* Newsroom Tab */}
                                <TabPane tab="Newsroom" key="2">
                                    <Row gutter={[16, 16]}>
                                        {getBlogsByTag("Newsroom").map((item, index) => (
                                            <Col lg={12} md={24} key={index}>
                                                <div className="BlogPostCardContainer">
                                                    <div className="BlogPostImageContainer">
                                                        <img src={item.blogImage} alt={item.blogTitle} />
                                                    </div>
                                                    <div className="BlogPostContentContainer">
                                                        <h2>{item.blogTitle}</h2>
                                                        <hr />
                                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                            <p>
                                                                {item.blogDate} &nbsp;
                                                                <b>
                                                                    <span>({item.tag})</span>
                                                                </b>
                                                            </p>
                                                            <p>{item.blogCustomName}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllBlogs;
