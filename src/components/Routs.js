import Home from "./Home/Home";
import Work from "./Work/Work.js";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Services from "./Services/Services";
import Contacts from "./Contacts/Contacts";
import React from "react";
import Scrolling from "./Scrolling/Scrolling";
import Test from "./Test/Test";
import ButtonComponent from "./ButtonComponent/ButtonComponent";
import PropTypes from "./PropTypes/PropTypes";
import ButtonGroupComponent from "./ButtonGroupComponent/ButtonGroupComponent";
import Icon from "./common/components/Icon";
import IconComponent from "./IconComponent/IconComponent";
import ImgComponent from "./ImgComponent/ImgComponent";
import ChipComponent from "./ChipComponent/ChipComponent";
import BadgeComponent from "./BadgeComponent/BadgeComponent";
import ListGroupComponent from "./ListGroupComponent/ListGroupComponent";
import InputComponent from "./InputComponent/InputComponent";
import TooltipComponent from "./Tooltip/TooltipComponent";
import ModalComponent from "./ModalComponent/ModalComponent";
import Multilanguage from "./Multilanguage/Multilanguage";
import Thefamily from "./Thefamily/Thefamily";

const Routes = {
    "/": () => <Home />,
    "/work/:id": ({id}) => <Work id={id}/>,
    "/work/": () => <Work />,
    "/about": () => <About />,
    "/blog": () => <Blog />,
    "/services": () => <Services />,
    "/contacts": () => <Contacts />,
    "/scrolling": () => <Scrolling />,
    "/multilanguage": () => <Multilanguage />,
    "/thefamily": () => <Thefamily />,
    "/test": () => <Test />,
    "/button-component": () => <ButtonComponent />,
    "/list-group": () => <ListGroupComponent />,
    "/badge": () => <BadgeComponent />,
    "/chip": () => <ChipComponent />,
    "/img": () => <ImgComponent />,
    "/input": () => <InputComponent />,
    "/tooltip": () => <TooltipComponent />,
    "/modal": () => <ModalComponent />,
    "/icon": () => <IconComponent />,
    "/prop-types": () => <PropTypes />,
    "/button-group-component": () => <ButtonGroupComponent />,
};
export default Routes;