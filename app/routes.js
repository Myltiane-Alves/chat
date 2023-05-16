import React from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import Login from "./pages/LoginPage/Login";
import Home from "./pages/Home";



function MainRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      

        <Redirect exact from="/" to="/login" />
      
      </Switch>
    </BrowserRouter>
  );
}

export default MainRoutes;
