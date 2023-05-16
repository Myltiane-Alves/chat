import React from "react";

import "./Home.css";
import Aside from "../components/aside";
import Main from "../components/main";
const Home = () => {
  return (
    <div className="container">

      <Aside />
      <Main className="main-total"/>
     
    </div>
  );
};

export default Home;
