import React from "react";

import Navbar from "./sharedComponents/Navbar/Navbar";
import Footer from "./sharedComponents/Footer/Footer";
import Router from "./Router";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}
export default App;
