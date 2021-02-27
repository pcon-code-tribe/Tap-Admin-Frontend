import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AdminSidebar from '../components/AdminSidebar';
import routes from '../routes';

function Admin() {
   const getRoutes = (routes) => {
     return routes.map((prop, key) => {
       if (prop.layout === "/admin"&& prop.path !== "/") {
        return (
          <Route exact path={prop.layout + prop.path} render={(props) => <prop.component {...props} />} key={key} />
        );
      } else {
        return (
          <Route exact path="/" render={(props) => <prop.component {...props} />} key={key} />
        );
      }
    });
  };

  return (
    <>
      <div className="wrapper d-flex">
      <BrowserRouter>
        <AdminSidebar routes={routes}/>
          <div className="content mt-2">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Admin;
