import React from 'react';

import Navigation from './components/navigation/Navigation';
import Banner from './components/banner/Banner';
import About from './components/about/About.component';
import Offer from './components/offer/Offer.component';
import Contact from './components/contact/Contact.component';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <About />
      <Offer />
      <Contact />
    </div>
  );
}

export default App;
