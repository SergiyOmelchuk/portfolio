import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/img/logo.png";
import Navbar from "./Navbar/Navbar";
import Filter from "./Filter/Filter";

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt="" className={s.logo_img}/>
            </div>
            <Navbar />
            <Filter />
            {/*<Social_buttons />*/}
            <div className={s.footer__copy}>
                © 2014 Kappe, All Rights Reserved
            </div>

        </div>);
}

export default Header;
