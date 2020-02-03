import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Button from "../common/components/Button";
import ButtonGroup from "../common/components/ButtonGroup";
import Icon from "../common/components/Icon";


class IconComponent extends React.Component {
    state = {
        activeIcon: 1
    }
    changeActiveIconNumber = (num) => {
        this.setState({
            activeIcon: num
        })
    }

    render() {
        return <div>
            <div>
                <a href="https://www.youtube.com/watch?v=oSe7_r-H_Wo&list=PLNkWIWHIRwMHC8qUfTzfxPuGrz4o9tmeE&index=5">Видео</a>
            </div>

            <div>
                <div>
                    1. Одна иконка + Button + курсор при disabled:
                </div>
                <div>
                    <Button>
                        <Icon disabled textColor="red" name="futbol" onClick={() => alert("Footbal")} pointer size={"3"}/>
                    </Button>
                </div>
            </div>
            <div>
                <div>
                    1. Иконки в ButtonGroup + Button - hover=false + ФУНКЦИОНАЛ ПЕРЕКЛЮЧАТЕЛЯ + курсор pointer при наличии функции:
                </div>
                <ButtonGroup>
                    <Button  hover={false} active={ this.state.activeIcon == 1 } onClick={() => this.changeActiveIconNumber(1)} >
                        <Icon name="align-left"/>
                    </Button>
                    <Button hover={false} active={ this.state.activeIcon == 2 } onClick={() => this.changeActiveIconNumber(2)} >
                        <Icon name="align-justify" />
                    </Button>
                    <Button hover={false} active={ this.state.activeIcon == 3 } onClick={() => this.changeActiveIconNumber(3) } >
                        <Icon name="align-center" />
                    </Button>
                    <Button hover={false} active={ this.state.activeIcon == 4 } onClick={() => this.changeActiveIconNumber(4)} >
                        <Icon name="align-right"/>
                    </Button>
                </ButtonGroup>
            </div>
            <div>
                <div>
                    1. Иконки в ButtonGroup + vertical:
                </div>
                <ButtonGroup vertical>
                    <Icon name="futbol"/>
                    <Icon name="futbol"/>
                    <Icon name="futbol"/>
                </ButtonGroup>
            </div>


        </div>
            ;
    }
}

export default IconComponent;
