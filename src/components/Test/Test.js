import React from "react";
import s from "./Test.module.css";
import {test} from "./testjs";


const Test = (props) => {
    return (
        <div className={s.test}>

            <div id="div" className={s.div}>
                <sub>Нижний индекс</sub>
            </div>
            <button id="button" className={s.button} onClick={test}>Жми</button>
        </div>);
}

export default Test;
