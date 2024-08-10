import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Reviews from './Reviews';
import Gallery from './Gallery';
import Footer from './Footer';
import BackgroundStory from './BackgroundStory';
import HouseCats from './HouseCats'; // Ensure this is correct
import './App.css';

const sectionStyle = {
  backgroundColor: 'rgba(255, 245, 250, 0.9)', // Light pink with opacity
};

function App() {
  return (
    <div className="App">
      <Header />
      <section id="menu" >
        <Menu />
      </section>
      <section id="background-story" style={sectionStyle}>
      <BackgroundStory />
      </section>
      <section id="house-cats" style={sectionStyle}>
        <HouseCats />
      </section>
      <section id="reviews" style={sectionStyle}>
        <Reviews />
      </section>
      <section id="gallery" style={sectionStyle}>
        <Gallery />
      </section>
      <section id="gallery" style={sectionStyle}>
        <Footer />
      </section>
    </div>
  );
}

export default App;
