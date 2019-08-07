import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {BaseComponent} from "./Components/BaseComponent/BaseComponent";

ReactDOM.render(
  <Router>
  <BaseComponent />
</Router>,
    document.getElementById("app")
);