import React from 'react';
import {useTranslation} from "react-i18next";

const Multilanguage = () => {

    const { t, i18n } = useTranslation();

    // function handleClick(e) {
    //     i18n.changeLanguage(e.target.value);
    // }
    function handleButtonClick(lang) {
        i18n.changeLanguage(lang);
    }
    return (
        <>
            <select >
                <option value="en">En</option>
                <option value="uk">Uk</option>
                <option value="ru">Ru</option>
            </select>
            <button onClick={()=>handleButtonClick("en")}>En</button>
            <button onClick={()=>handleButtonClick("uk")}>Uk</button>
            <button onClick={()=>handleButtonClick("ru")}>Ru</button>
            <p>{t('Thanks.1')}</p>
        </>
    );
};

export default Multilanguage;
