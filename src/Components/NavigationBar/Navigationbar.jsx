import React, { useState, useEffect } from "react";
import { Drawer, Button, Menu, Dropdown, Space, Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Navigationlinks from "./NavigationLinksData";// Assuming Navigationlinks file is imported here
import "../../assets/Styles/NavigationBar.css";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

const NavigationBar = () => {
    const [scrollingDown, setScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setScrollPosition(currentScrollPos);
            setScrollingDown(currentScrollPos > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setScrollingDown(true);
        } else {
            setScrollingDown(false);
        }
        setLastScrollY(window.scrollY);
    };

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    const handleCloseDrawer = () => {
        setDrawerVisible(false);
    };

    const handleMobileMenuItemClick = (key) => {
        // Close the drawer when an item is clicked (optional)
        setDrawerVisible(false);
    };

    const renderDropdownMenu = (subLinks) => (
        <Menu>
            {subLinks.map((subLink, index) => (
                <Link to={`/practices/${subLink.path}`} style={{ background: "transparent" }}><Menu.Item key={index}>{subLink.link}</Menu.Item></Link>
            ))}
        </Menu>
    );

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const renderNavigationLinks = () => {
        return Navigationlinks.map((navItem, index) => {
            if (navItem.subLinks) {
                return (
                    <Dropdown
                        overlay={renderDropdownMenu(navItem.subLinks)}
                        trigger={['hover']}
                        key={index}
                        style={{ background: "transparent" }}
                    >

                        <Button className="navButton">
                            {navItem.link} <DownOutlined />
                        </Button>

                    </Dropdown>
                );
            } else {
                return (
                    <Button className="navButton" key={index}>
                        <Link to={navItem.path}>{navItem.link}</Link>
                    </Button>
                );
            }
        });
    };

    const renderMobileNavigationLinks = () => {
        return Navigationlinks.map((navItem, index) => (
            <Collapse accordion>
            {/* {Navigationlinks.map((navItem, index) => ( */}
                <Panel 
                    header={
                        navItem.subLinks ? (
                            // If subLinks exist, header is just a title (no direct link)
                            <span className="mobileNavHeader">{navItem.link}</span>
                        ) : (
                            // If no subLinks, header is a clickable link
                            <Link
                                to={navItem.path}
                                className="mobileNavHeaderLink"
                                onClick={handleCloseDrawer}
                            >
                                {navItem.link}
                            </Link>
                        )
                    }
                    key={index}
                >
                    {navItem.subLinks && 
                        navItem.subLinks.map((subLink, idx) => (
                            <Button
                                key={idx}
                                type="link"
                                className="mobileNavSubLink"
                                onClick={handleCloseDrawer}
                            >
                                <Link to={`/practices/${subLink.path}`}>{subLink.link}</Link>
                            </Button>
                        ))
                    }
                </Panel>
            {/* ))} */}
        </Collapse>
        ));
    };

    return (
        <>
            <section
                id="NavigationBarContainer"
                className={scrollingDown ? "hide" : "show"}


            >
                <div className="NavigationBarMainContainer">
                    <div className="LogoContainer">
                        <Link to="/"><img src="https://mschhajedandco.com/wp-content/uploads/2020/09/MS-Logo.png" alt="" /></Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="NavigationLinksContainer">
                        {renderNavigationLinks()}
                    </div>

                    {/* Mobile Navigation Drawer */}
                    <div className="ContactInfoContainer">
                        <Button
                            className="menuButton"
                            type="primary"
                            onClick={toggleDrawer}
                        >
                            Menu
                        </Button>

                        <Drawer
                            title="Navigation"
                            placement="right"
                            onClose={handleCloseDrawer}
                            visible={drawerVisible}
                            width={300}
                        >
                            {renderMobileNavigationLinks()}
                        </Drawer>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NavigationBar;
