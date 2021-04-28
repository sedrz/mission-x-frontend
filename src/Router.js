import React from 'react';
import { Route,Switch } from 'react-router-dom';
import App from './App';
import TopPage from "./pages/TopPage";
import Toptext from "./pages/Toptext"
import Buttonend from "./pages/Buttonend"
import SideCheckbox from "./pages/sidebarcheckbox"
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Contentoffer from './Components/Contentoffer'
import Contentb from './Components/Contentb'
import Contentcomp from './Components/Contentcomp'
import Contentstart from './Components/Contentstart'
import Footer from './Components/Footer'
import Projects from "./pages/Projects/Projects"
//  * All routes go here.
//  * Don't forget to import the components above after adding new route.
 function Router() {
     return(
 <switch>
    <Route exact path="/" component={App}>
    <Route exat path="/Components/Banner" component={ Navbar} />
    <Route exact path="/Components/Banner" component={ Banner} />
    <Route exact path="/Components/Contentoffer" component={Contentoffer} />
    <Route exact path="/Components/Contentb" component={Contentb} />
    <Route exact path="/Components/Contentcomp" component={Contentcomp} />
    <Route exact path="/pages/Toptext" component={Toptext} />
    <Route exact path="/pages/TopPage" component={TopPage} />
    <Route exact path="/Components/Contentstart" component={Contentstart} />
    <Route exact path="/Components/Footer" component={Footer} />
    <Route exact path="/pages/Projects/Projects" component={Projects} />
    <Route exact path="/pages/sidebarcheckbox" component={SideCheckbox} />
    <Route exact path="/pages/Buttonend" component={Buttonend} />
  </Route>
  </switch>
);
 }
export default Router;