import React from "react";
import s from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={s.header}>
            <img src="../../assets/img/logo.png" alt="" className="logo"/>
        </div>);
}

export  default Header;
