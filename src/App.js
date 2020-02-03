import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import s from "./components/Header/Header.module.css";
import logo from "./assets/img/logo.png";
import Home from "./components/Home/Home";
import {Route, Switch} from "react-router-dom";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Services from "./components/Services/Services";
import Contacts from "./components/Contacts/Contacts";
import Work from "./components/Work/Work";
import {useRoutes, A} from "hookrouter";
import routes from "./components/Routs"
import NoPageFound from "./components/NoPageFound/NoPageFound";
import Navbar from "./components/Header/Navbar/Navbar";

import './i18n';

function App() {
    // React Hook Router
    const routeResult = useRoutes(routes);
    return (
        <div>
            <HeaderContainer/>
            {routeResult || <NoPageFound/>}
        </div>)

    // React Router

    // return (
    //     <div>
    //         <HeaderContainer/>
    //         <Switch>
    //             <Route exact path='/home' render={() => <Home />}/>
    //             <Route exact path='/work' render={() => <Work />}/>
    //             <Route exact path='/about' render={() => <About />}/>
    //             <Route exact path='/blog' render={() => <Blog/>}/>
    //             <Route exact path='/services' render={() => <Services />}/>
    //             <Route exact path='/contacts' render={() => <Scrolling />}/>
    //             <Route path="/*" render={() => <div >404 page not found 404 page not found 404 page not found 404 page not found </div>}/>
    //         </Switch>
    //     </div>
    // );
}

export default App;
