import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Button from "../common/components/Button";
import ButtonGroup from "../common/components/ButtonGroup";


class ButtonGroupComponent extends React.Component {
    state = {
        toggleStateOn: true
    }

    changeToggleStatus = () => {
        this.setState({
            toggleStateOn: !this.state.toggleStateOn
        })
    }

    render() {
        return <div>
            <div>
                <a href="https://www.youtube.com/watch?v=tfTM3WecJx8">Видео</a>
            </div>

            <ButtonGroup>
                <div>
                    1. Горизонтально расположение кнопок:
                </div>
                <div>
                    <Button disabled className="red"/>
                    <Button/>
                    <Button/>
                    <Button/>
                </div>
            </ButtonGroup>
            <ButtonGroup vertical>
                <div>
                    1. Верикально расположение кнопок:
                </div>
                <div>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                </div>
            </ButtonGroup>
            <ButtonGroup>
                <div>
                    1. Переключатель:
                </div>
                <div>
                    <Button onClick={this.changeToggleStatus} active={this.state.toggleStateOn ? true : false}
                            hover={false}>On</Button>
                    <Button onClick={this.changeToggleStatus} active={!this.state.toggleStateOn ? true : false} hover={false}>Off</Button>
                </div>
            </ButtonGroup>
        </div>
            ;
    }
}

export default ButtonGroupComponent;
