import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

import "./Icon.css";

const Icon = ({name, className, onClick, size, disabled, ...attrs}) => {

    const classes = classNames(
        "fas",
        `fa-${name}`,
        className,
        {func: onClick},
        {disabled}
    );
    const elemSize = size ? {fontSize: `${size}rem`} : null;
    ;
    return (
        <i
            {...attrs}
            onClick={disabled ? null : onClick}
            className={classes}
            style={elemSize}
        >
        </i>
    );
}
Icon.propTypes = {
    name: PropTypes.string,
    classNames: PropTypes.string,
    size: PropTypes.string,
    textColor: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

Icon.defaultProps = {
    name: "",
    classNames: "",
    size: null,
    textColor: null,
    disabled: false,
    onClick: null
}


export default Icon;
