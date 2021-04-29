import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./sharedComponents/Navbar/Navbar";
import Footer from "./sharedComponents/Footer/Footer";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";
import StudentPage from "./pages/StudentPage/StudentPage";
import StudentProfile from "./pages/StudentProfile/StudentProfile";


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
        <Route exact path="/StudentPage" component={StudentPage}></Route>
        <Route exact path="/StudentProfile" component={StudentProfile}></Route>

      </switch>
      <Footer />
    </>
  );
}
export default App;
