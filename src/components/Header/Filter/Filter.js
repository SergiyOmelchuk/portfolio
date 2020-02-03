import React from "react";
import s from "./Filter.module.css";
import {A} from "hookrouter";


const Filter = (props) => {
    return (
        <div className={s.filter}>
            <div className={s.title}>
                Components
            </div>
            <div className={s.items_inner}>
                <div><a className={s.active} href="#">All Works </a></div>
                <div><a href="img">Img</a></div>
                <div><a href="thefamily">thefamily</a></div>
                <div><a href="badge">Badge</a></div>
                <div><a href="multilanguage">Multilanguage</a></div>
                <div><a href="chip">Chip</a></div>
                <div><a href="list-group">ListGroup</a></div>
                <div><a href="icon">Icon</a></div>
                <div><a href="input">Input</a></div>
                <div><a href="tooltip">tooltip</a></div>
                <div><a href="modal">Modal</a></div>
                <div><a href="/button-component">button Component</a></div>
                <div><a href="/button-group-component">buttonGroup Component</a></div>
                <div><A href="/scrolling">scrolling</A> </div>
                <div><A href="/test">test</A> </div>

            </div>
        </div>);
}

export default Filter;
