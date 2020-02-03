import React from "react";
import s from "./Home.module.css";
import example1 from "../../assets/img/example1.jpg";
import example2 from "../../assets/img/example2.jpg";
import example3 from "../../assets/img/example3.jpg";
import example4 from "../../assets/img/example4.jpg";

const Home = (props) => {
    return (
        <div className={s.home}>
            <div className={s.home__item}>
                <a href="https://sergiyomelchuk.github.io/mobile/youtube_player/" target="_blank">
                    <img src={example3} alt="" className="home__item-img"/>
                </a>

            </div>
            <div className={s.home__item}>
                <img src={example4} alt="" className="home__item-img"/>
            </div>
            <div className={s.home__item}>
                <img src={example1} alt="" className="home__item-img"/>
            </div>
            <div className={s.home__item}>
                <img src={example2} alt="" className="home__item-img"/>
            </div>
            <div className={s.home__item}>
                <img src={example1} alt="" className="home__item-img"/>
            </div>
            <div className={s.home__item}>
                <img src={example2} alt="" className="home__item-img"/>
            </div>
            <div className={s.home__item}>
                <img src={example1} alt="" className="home__item-img"/>
            </div>
            <div className={s.home__item}>
                <img src={example2} alt="" className="home__item-img"/>
            </div>
            <div className={s.home__item}>
                <img src={example1} alt="" className="home__item-img"/>
            </div>
            <div className={s.home__item}>
                <img src={example2} alt="" className="home__item-img"/>
            </div>
        </div>);
}

export default Home;
