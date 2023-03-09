import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';

function Home1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <React.Fragment>
      <Navbar toggle={toggle} />
      <Home/>
      <Footer />
    </React.Fragment>
  );
}

export default Home1;