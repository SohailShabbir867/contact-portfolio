import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects'
import Footer from './components/Footer';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';


import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animation only once per element
    });
  }, []);

  return (
    <>
      <Navbar />
      <About />
      <Projects/>
      <Education />
      <Skills/>
     <Contact/>
   
      <Footer/>
    </>
  );
}

export default App;
