import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Reviews from './Reviews';
import Recommendations from './Recommendations';
import Gallery from './Gallery';
import Footer from './Footer';
import BackgroundStory from './BackgroundStory';
import HouseCats from './HouseCats'; // Ensure this is correct
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="menu">
        <Menu />
      </section>
      <section id="background-story">
      <BackgroundStory />
      </section>
      <section id="house-cats">
        <HouseCats /> {/* Add the HouseCats component here */}
      </section>
      <section id="recommendations">
        <Recommendations />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="gallery">
        <Footer /> {/* Add the Footer component here */}
      </section>
    </div>
  );
}

export default App;
