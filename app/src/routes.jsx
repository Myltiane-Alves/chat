import React from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';

function MainRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Home} />
       

        <Redirect exact from="/" to="/login" />
        <Redirect to="/not_found" />
      </Switch>
    </BrowserRouter>
  );
}

export default MainRoutes;
