import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import router from './routes';

const routes = (router) => {
  return router.map((item, key) => {
    if(item.path !== "/")
    return (
       <Route exact path={`/admin${item.path}`} render={(props) => <App {...props} />} key={key} />
    )
    else
    return (
      <Route exact path="/" component={Signin} key={key}/>
    )
   })}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      {routes(router)}
      <Redirect from="/admin/" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
