import React, { createContext } from 'react';

import Navigation from './components/navigation/Navigation';
import Banner from './components/banner/Banner';
import About from './components/about/About.component';
import Offer from './components/offer/Offer.component';
import Contact from './components/contact/Contact.component';
import Footer from './components/footer/Footer';

import './App.css';

export const BoundingRectTop = createContext<any>(null);

const App: React.FC = () => {
  const [distance, setDistance] = React.useState(0);
  return (
    <div className="App">
      <BoundingRectTop.Provider value={{distance, setDistance}}>
        <Navigation />
        <Banner />
      </BoundingRectTop.Provider>
      <About />
      <Offer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
