import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Projects from "./pages/Projects/Projects";

function Router() {
  return (
    <switch>
      {/* <Route exact path="/">
        <Redirect to="/home" />
      </Route> */}
      <Route exact path="/projects" component={Projects}></Route>
      {/* <Route exact path="/home" component={Home}></Route> */}
    </switch>
  );
}
export default Router;
