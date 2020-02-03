import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

import "./Chip.css";
import Img from "../Img";
import Icon from "../Icon";

const Chip = ({text, withImg, withIcon, withClose, imgSrc, imgAlt, iconName, className,
              id, onChipClick, onChipClose}) => {

    const classes = classNames(
        "chip",
        className
    );

    const onChipClickAction = () => {
        onChipClick(id);
    };

    const onCloseClickAction = e => {
        e.stopPropagation();
        onChipClose(e, id);
    };



    return (
        <div className={classes} onClick={onChipClickAction}>
            {withImg &&
            <span className="chipImage">
                <Img src={imgSrc} alt={imgAlt} width={24} height={24}/>
            </span>
            }
            {withIcon &&
            <span className="chipIcon">
                <Icon name={iconName}/>
            </span>
            }
            <span className="chipText"> {text} </span>
            { withClose &&
            <span className="chipClose" onClick={onCloseClickAction}>
                <Icon name="times"/>
            </span>
            }
        </div>
    );
}
Chip.propTypes = {
    text: PropTypes.string.isRequired,
    withImg: PropTypes.bool,
    withIcon: PropTypes.bool,
    withClose: PropTypes.bool,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    iconName: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    onChipClick: PropTypes.func,
    onChipClose: PropTypes.func,

}

Chip.defaultProps = {
    withImg: false,
    withIcon: false,
    withClose: false,
    imgSrc: "",
    imgAlt: "",
    iconName: "user-tie",
    className: "",
    id: null,
    onChipClick: () => {},
    onChipClose: () => {},

}


export default Chip;
