import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App";
import Singin from "./components/Singin";
import Singup from "./components/Singup";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Singin} />
      <Route exact path="/signup" component={Singup} />
      {/* <Route path="/admin/dashboard" component={App} /> */}
      <Route exact path="/admin/dashboard" render={(props) => <App {...props} />} />
      <Redirect from="/admin/logout" to="/" /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
