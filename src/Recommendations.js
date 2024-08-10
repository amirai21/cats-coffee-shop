import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

const Recommendations = () => {
  const recommendations = [
    'Indulge in our signature Catnip Tea, a soothing infusion that transports you to a place where time flows as gently as a cat’s purr.',
    'Our Mocha is a harmony of rich chocolate and robust espresso, creating a melody that lingers like a favorite song. Savor each sip as the warmth envelops you.',
    'Don’t miss the Tuna Sandwich, a masterpiece of flavor where fresh ingredients meet in perfect harmony. Each bite is a love letter to the sea, embraced by the softest bread.',
    'Experience our Latte Art, where the finest coffee meets the skillful hands of our baristas. Each cup is a work of art, with foamy masterpieces that tell stories of distant lands.',
    'For the adventurous, our Seasonal Special is a must-try. Crafted with the freshest ingredients of the season, each sip captures the essence of the moment.'
  ];

  return (
    <div>
      <h2>Customer Recommendations</h2>
      <Carousel 
        autoPlay 
        interval={3000} 
        transitionTime={1350}   // Control the speed of the transition (in ms)
        infiniteLoop 
        showThumbs={false} 
        showArrows={true} 
        showStatus={false}
        showIndicators={true}
        stopOnHover={true}
      >
        {recommendations.map((recommendation, index) => (
          <div key={index}>
            <p className="recommendation-item">{recommendation}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Recommendations;
