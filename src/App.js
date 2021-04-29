import React from "react";

import Navbar from './sharedComponents/Navbar/Navbar'
import Footer from './sharedComponents/Footer/Footer'
import Projects from "./pages/Projects/Projects"

import "./App.css";

function App() {
  return (
      <div>
        <Navbar />
        <Projects/>
        <Footer />
      </div>
  );
}
export default App;