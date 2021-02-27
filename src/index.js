import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/admin/dashboard" render={(props) => <App {...props} />} />
      <Redirect from="/admin/logout" to="/" /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
