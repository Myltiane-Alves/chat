import React from "react";
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import { useSelector } from "react-redux";

function MainRoutes() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="login" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="../home" /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
