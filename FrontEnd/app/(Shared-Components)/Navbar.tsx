"use client";

import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu, Button } from "antd";
import { motion } from "framer-motion";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps["items"] = [
    getItem(
        <a className={"navbarLink"} href="#about" rel="noopener noreferrer">
            About
        </a>,
        "sub1",
        null
    ),
    getItem(
        <a
            className={"navbarLink"}
            href="#challenges"
            rel="noopener noreferrer"
        >
            Solutions
        </a>,
        "sub2",
        null
    ),
    getItem(
        <a className={"navbarLink text-2xl"} href="/" rel="noopener noreferrer">
            FinAdvisor
        </a>,
        "sub3",
        null
    ),
    getItem(
        <a className={"navbarLink"} href="#faq" rel="noopener noreferrer">
            FAQ
        </a>,
        "sub4",
        null
    ),
    getItem(
        <a className={"navbarLink"} href="#schedule" rel="noopener noreferrer">
            Login
        </a>,
        "sub5",
        null
    ),
];

type Props = {};

const Navbar = (props: Props) => {
    const [navbarToggle, setNavbarToggle] = useState<boolean>(false);
    return (
        <header className="z-[999] relative invisible md:visible">
            <motion.div
                className="headerDiv md:w-1/2 sm:w-[36rem]"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>
            <nav className="navbarStyle">
                <motion.div
                    className="mx-auto md:min-w-[600px] md:visible invisible w-0"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <Menu
                        mode="horizontal"
                        theme="dark"
                        items={items}
                        className="flex items-center justify-between px-2 text-lg transition py-2"
                    />
                </motion.div>

                <motion.div
                    className="w-0 invisible md:min-w-[50px] md:visible ml-auto mr-4"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                ></motion.div>
            </nav>
            <div className="block ml-auto md:hidden fixed visible">
                <Button
                    type="primary"
                    onClick={() => setNavbarToggle(!navbarToggle)}
                    className=""
                >
                    {navbarToggle ? (
                        <MenuUnfoldOutlined />
                    ) : (
                        <MenuFoldOutlined />
                    )}
                </Button>

                {navbarToggle && (
                    <Menu
                        mode="inline"
                        theme="dark"
                        items={items}
                        className="bg-black right-0 z-[9999] w-full transition"
                    />
                )}
            </div>
        </header>
    );
};

export default Navbar;
