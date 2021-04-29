import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./sharedComponents/Navbar/Navbar";
import Footer from "./sharedComponents/Footer/Footer";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <switch>
        <Route exact path="/">
        <Redirect to="/home" />
      </Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/home" component={Home}></Route>
      </switch>
      <Footer />
    </>
  );
}
export default App;
