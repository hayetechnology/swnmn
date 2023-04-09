import React, { useState } from 'react';
import Home from '../components/Home';
import Sidebar from '../components/Sidebar'
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
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Home/>
      <Contact/>
      <Footer />
    </React.Fragment>
  );
}

export default Home1;