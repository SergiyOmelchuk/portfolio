import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Button from "../common/components/Button";


const ButtonComponent = () => {

    return <div>
        <div font-size="20px">
            <a  href="https://www.youtube.com/watch?v=cZIm24kxDzU">Видео</a>
        </div>
        <div>
            <Button></Button>
        </div>
        <div>
            <Button disabled>
                Disabled
            </Button>
        </div>
        <div>
            <Button className="active">
                Active
            </Button>
        </div>
        <div>
            <Button data-name="button">
                data-name="button"
            </Button>
        </div>
        <div>
            <Button type="Submit">
                type="Submit
            </Button>
        </div>
        <div>
            <Button type="Submit" onClick={() => alert("It is unic function")}>
                own onClick function
            </Button>
        </div>
        <div>
            <Button type="Submit" className="red" >
                Red
            </Button>
        </div>
        <div>
            <Button href="test" onClick={() => {
            }}>
                Link (а вместо button)
            </Button>
        </div>
        <div>
            <Button href="test" disabled onClick={() => {
            }}>
                Link disabled - настраиваем а
            </Button>
        </div>
    </div>
        ;

}

export default ButtonComponent;
