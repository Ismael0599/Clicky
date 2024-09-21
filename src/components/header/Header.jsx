import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import IconCart from "./CartWidget";
import "../../global/styles.scss";

const Header = () => {
    return (
        <div className="header-box">
            <Logo></Logo>
            <NavBar></NavBar>
            <IconCart></IconCart>
        </div>
    );
};

export default Header;
