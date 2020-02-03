import React from "react";
import PropTypes from "prop-types";
import Button from "../common/components/Button";

class PropType extends React.Component {
    state = {
        name: null
    }
    onStatusChange = (e) => {
        this.setState({
            name: e.currentTarget.value
        })
    }
    deActivateEditMode = (e) => {
        this.setState({
            name: e.currentTarget.value
        })
    }

    render() {
        return <div>
            <div>
                Prop-types
            </div>
            Enter name: <br/>
            <input value={this.state.name} type="text" onChange={this.onStatusChange} autoFocus={true}
                   onBlur={this.deActivateEditMode}/>
            <br/>"Stranger" is default name
            {
                !this.state.name &&
            <Greeting/>
            }
            {
                this.state.name &&
            <Greeting name={this.state.name}/>
            }
        </div>
    }
}

export default PropType;

class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }

}

Greeting.defaultProps = {
    name: 'Stranger'
};