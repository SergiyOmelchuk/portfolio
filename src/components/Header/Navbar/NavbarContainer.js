import React from "react";
import Navbar from "./Navbar";


class NavbarContainer extends React.Component {
    render() {
        return (
            <Navbar {...this.props}/>
        );
    }
}

let mapStateToProps = () => {
    return {

    };
};

export default NavbarContainer;

