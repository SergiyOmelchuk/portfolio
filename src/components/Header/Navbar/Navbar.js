import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {A, useRoutes, useTitle} from "hookrouter";
import routes from "../../Routs";
import NoPageFound from "../../NoPageFound/NoPageFound";


const Navbar = (props) => {

   // React Hook Router

    const routeResult = useRoutes(routes);
    return (
        <div className={s.navbar}>
            <div>
                <A activeClassName={s.active} href="/">Home</A> <br/>
            </div>
            <div>
                <A className={s.active} href="/work">work</A> <br/>
            </div>
            <div>
                <A href="/about">about</A> <br/>
            </div>
            <div>
                <A data-sergiy="my" href="/blog">blog</A> <br/>
            </div>
            <div>
                <A href="/services">services</A> <br/>
                <div>
                    <A href="/contacts">contacts</A> <br/>
                </div>
            </div>
        </div>);


     // React Router
    // return (
    //     <div className={s.navbar}>
    //         <div>
    //             <NavLink to='/home'  activeClassName={s.active}>HOME</NavLink>
    //         </div>
    //         <div>
    //             <NavLink to='/work'  activeClassName={s.active}>work</NavLink>
    //         </div>
    //         <div>
    //             <NavLink to='/about' activeClassName={s.active}>about</NavLink>
    //         </div>
    //         <div>
    //             <NavLink to='/blog'  activeClassName={s.active}>blog</NavLink>
    //         </div>
    //         <div>
    //             <NavLink to='/services'  activeClassName={s.active}>services</NavLink>
    //         </div>
    //         <div>
    //             <NavLink to='/contacts' activeClassName={s.active}>contacts</NavLink>
    //         </div>
    //
    //     </div>);
}

export default Navbar;
