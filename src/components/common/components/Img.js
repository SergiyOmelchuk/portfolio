import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

import "./Img.css";

const Img = ({src, alt, className, width, height, circle, ...attrs}) => {

    const classes = classNames(
        className,
        { circle }
    );
    if (!src) {
        src = `https://via.placeholder.com/${width}x${height}`
    }
    return (
        <img
            src={src}
            alt={alt}
            className={classes}
            width={width}
            height={height}
            { ...attrs}
        >
        </img>
    );
}
Img.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
}

Img.defaultProps = {
    src: "",
    classNames: "",
    alt: "image name",
    width: 200,
    height: 200
}


export default Img;
