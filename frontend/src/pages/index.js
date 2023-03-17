import React, { useState } from 'react';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <React.Fragment>
      <Navbar toggle={toggle} />
      <Home/>
      <Contact/>
      <Footer />
    </React.Fragment>
  );
}

export default Home1;