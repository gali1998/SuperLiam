import * as React from 'react';
import { Route, Switch } from "react-router-dom";
import { Header } from "../Header/Header";
import {Home} from '../Home/Home';
import './BaseComponent.scss'; 
export const BaseComponent = () => { return (
    <div className="body">
    <Header/>
    <Switch>
        <Route exact path="/" component={Home} />
    </Switch>
    </div>
)
};