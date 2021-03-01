import React from "react";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import AdminSidebar from '../components/AdminSidebar';
import routes from '../routes';
import './Admin.css';

function Admin() {
   const getRoutes = (routes) => {
     return routes.map((prop, key) => {
       if (prop.layout === "/admin"&& prop.path !== "/") {
        return (
          <Route exact path={prop.layout + prop.path} render={(props) => 
          <>
          <div className="wrapper d-flex">
          <AdminSidebar routes={routes}/>
          <prop.component {...props} />
          </div>
          </>} key={key} />
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
      <BrowserRouter>
          <div className="content">
            <Switch>
            {getRoutes(routes)}
            <Redirect from="/admin/" to="/" />
            <Route exact path="/">

            </Route>
            </Switch>
          </div>
        </BrowserRouter>
    </>
  );
}

export default Admin;
