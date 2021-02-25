import React from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

import routes from "../routes.js";

import image from "../assets/img/logoNITJSR.png";

function Admin() {
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={prop.layout + prop.path} render={(props) => <prop.component {...props} />} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <>
      <div className="wrapper">
        <Sidebar image={image} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Admin;
