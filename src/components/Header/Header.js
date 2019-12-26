import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/img/logo.png";

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img  src={logo} alt="" className={s.logo_img}/>
            </div>

        </div>);
}

export  default Header;
