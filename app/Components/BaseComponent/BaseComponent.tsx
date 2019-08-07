import * as React from 'react';
import { Route, Switch } from "react-router-dom";
import { Header } from "../Header/Header";
import {About} from '../About/About';
import {ContactUs} from '../ContactUs/ContactUs';

export const BaseComponent = () => { return (
    <div>
    <Header/>
    <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/contact-us" component={ContactUs} />
    </Switch>
    </div>
)
};