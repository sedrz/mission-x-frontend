import React from "react";

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
import "./App.css";


function App() {
  return (
      <div>
      <Navbar />
      <Banner />
      <Contentoffer />
      <Contentb />
      <Contentcomp />
      <Contentstart />
      <Footer />
      <Navbar />
      <Toptext />
   <div className="sidePic">
        <SideCheckbox />
        <div className="pics">
        <Projects />
        </div>
   </div>
   <Buttonend />
      <Footer />
    </div>
  );
}
export default App;