import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import IconCart from "./CartWidget";

const Header = () => {
    return (
        <div className="header-box">
            <Logo />
            <NavBar />
            <IconCart />
        </div>
    );
};

export default Header;
