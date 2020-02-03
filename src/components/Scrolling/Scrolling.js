import React from "react";
import s from "./Scrolling.module.css";

const Scrolling = () => {
    const w =  (i) => {
        alert(i)
    };
    return (
        <div className={s.scrolling}>
            <div>
                Window sizes
            </div>
            <div className={s.buttons}>
                <button onClick={ () => {w(document.documentElement.clientHeight)}}>alert(document.documentElement.clientHeight)</button>
                <button onClick={ () => {w(window.innerHeight )}}>alert(window.innerHeight )</button>
                <button onClick={ () => {alert( window.innerWidth )}}>alert( window.innerWidth )</button>
                <button onClick={ () => {alert( document.documentElement.clientWidth )}}>alert( document.documentElement.clientWidth )</button>
                <button onClick={ () => {alert( document.documentElement.clientWidth )}}>let scrollHeight = Math.max</button>
            </div>
        </div>
    )
}

export default Scrolling;