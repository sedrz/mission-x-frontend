import React from "react";
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import ContentOffer from './components/ContentOffer/ContentOffer';
import ContentOption from './components/ContentOption/ContentOption';
import KeyCompetencies from './components/KeyCompetencies/KeyCompetencies';
import ContentStart from './components/ContentStart/ContentStart';
import Footer from './components/Footer/Footer';

import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ContentOffer />
      <ContentOption />
      <KeyCompetencies />
      <ContentStart />
      <Footer />
    </div>
  );
}
export default App;