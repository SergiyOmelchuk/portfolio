import React from "react";
import s from "./Work.module.css";
import {useTitle} from "hookrouter";
const Work = (props) => {
    useTitle('Work page');
    return (
        <div className={s.work}>

            Work Section - id = {props.id}
        </div>);
}

export default Work;
