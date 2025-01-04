import React, { useState, useEffect } from "react";
import { Drawer, Button, Menu, Dropdown, Space, Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Navigationlinks from "./NavigationLinksData";// Assuming Navigationlinks file is imported here
import "../../assets/Styles/NavigationBar.css";

const { Panel } = Collapse;

const NavigationBar = () => {
    const [scrollingDown, setScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [drawerVisible, setDrawerVisible] = useState(false);

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
                <Menu.Item key={index}>{subLink.link}</Menu.Item>
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
                    >
                        <Button className="navButton">
                            {navItem.link} <DownOutlined />
                        </Button>
                    </Dropdown>
                );
            } else {
                return (
                    <Button className="navButton" key={index}>
                        {navItem.link}
                    </Button>
                );
            }
        });
    };

    const renderMobileNavigationLinks = () => {
        return Navigationlinks.map((navItem, index) => (
            <Collapse key={index} defaultActiveKey={navItem.subLinks ? ['1'] : []}>
                <Panel header={navItem.link} key="1">
                    {navItem.subLinks &&
                        navItem.subLinks.map((subLink, idx) => (
                            <Button
                                key={idx}
                                type="link"
                                onClick={() => handleMobileMenuItemClick(subLink.link)}
                            >
                                {subLink.link}
                            </Button>
                        ))}
                </Panel>
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
                        {/* Logo content goes here */}
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
