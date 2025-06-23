import React from 'react';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <VideoShowcase />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
