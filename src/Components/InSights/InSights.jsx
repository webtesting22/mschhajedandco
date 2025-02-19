import React from "react";
import "../../assets/Styles/Insights.css"
import { Row, Col } from "antd";
import BlogData from "./BlogData";
import { Link } from "react-router-dom";
const InSights = () => {
    // Filter for unique tags
    const uniqueBlogs = BlogData.filter(
        (blog, index, self) =>
            index === self.findIndex((b) => b.tag === blog.tag)
    );
    return (
        <>
            <section id="InSightsContainer">
                <div className="ContainerDefault">
                    <div className="InsightsHeaderContainer">
                        <h1>Legal News and Articles.</h1>
                    </div>
                    <div>
                        <Row>
                        {uniqueBlogs.map((item, index) => (
        <Col lg={12} md={24} style={{ width: "100%" }} key={index}>
          <Link to={`/insights-newsroom/${item.pathName}`}>
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
          </Link>
        </Col>
      ))}
                            {/* <Col lg={12} md={24} style={{ width: "100%" }}>
                                <div className="BlogPostCardContainer">
                                    <div className="BlogPostImageContainer">
                                        <img src="https://cdn.prod.website-files.com/672087ec85cbe61882560dcd/6741e489ce5fde257ea74bcb_Mask%20group%20(3).jpg" alt="" />
                                    </div>
                                    <div className="BlogPostContentContainer">
                                        <h2 >Tax Collected at Source on Sale of Goods</h2>
                                        <hr />
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <p>September 17, 2020</p>
                                            <p>Karan Patel</p>
                                        </div>
                                    </div>
                                </div>
                            </Col> */}
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}
export default InSights