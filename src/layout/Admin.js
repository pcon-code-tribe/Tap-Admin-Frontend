import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AdminSidebar from '../components/AdminSidebar';
import routes from '../routes';

function Admin() {
   const mainPanel = React.useRef(null);
   const getRoutes = (routes) => {
     return routes.map((prop, key) => {
       if (prop.layout === "/admin"&& prop.path !== "/signout") {
        return (
          <Route exact path={prop.layout + prop.path} render={(props) => <prop.component {...props} />} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <>
      <div className="wrapper d-flex">
      <BrowserRouter>
        <AdminSidebar routes={routes}/>
        <div className="main-panel" ref={mainPanel}>
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
        </div> 
        </BrowserRouter>
      </div>
    </>
  );
}

export default Admin;
