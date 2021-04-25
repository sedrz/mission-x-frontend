import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import logolevelup from "../assets/img/logolevelup.png";
import register from "../assets/img/register.png"
import nzflag from "../assets/img/nzflag.jpg";
import maoriflag from "../assets/img/maoriflag.jpg";

import './TopPage.css';


function TopPage() {
  return (
  
      <div classname="TopPage">
      
      <header className="AppHeader">
      <img className="Star" src={logolevelup.png} alt="Logo" />
       <div>
 <BrowserRouter>
     <NavBar />
 <Switch>
    <Route exact path="/">Home</Route>
    <Route exact path="/Projects.js">Teacher</Route>
  <Route exact path="/Teachers.js">Project</Route>
</Switch>
</BrowserRouter>
</div>
<img className="register" src={register.png} alt="Logo" />
<div className="flag">
<p className="lang">Lang</p>
  <img className="flag" src={nzflag.jpg} alt="Logo" />
  <img className="flag" src={maoriflag.jpg} alt="Logo" />
</div>
</header>

</div>

 );
    
 }

export default TopPage;
