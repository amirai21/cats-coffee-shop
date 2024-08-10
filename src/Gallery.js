import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const Gallery = () => {
  const images = [
    'https://assets-metrostyle.abs-cbn.com/prod/metrostyle/attachments/1a4c347e-78cf-4707-a7ed-332c63d1b551_inshot_20230619_202043760.jpg',
    'https://www.siouxlandproud.com/wp-content/uploads/sites/68/2022/10/AP18013706797236.jpg?w=1280',
    'https://images.squarespace-cdn.com/content/v1/59014ed8db29d637250fa476/1511726587674-62FWNT72LCGTBO4AXRP5/IMG_2232.jpg',
    'https://south.tours/wp-content/uploads/2021/09/cafe-cats-looking-out-window-at-crowd_alexandra-steedman-1024x683-1.jpeg',
    'https://www.liveabout.com/thmb/I2r_bjNvznT98AgHFm_uR2F_b4Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/girl-playing-with-cats-in-cat-cafe-1063781456-613a218c722a4c79ba869ab5bf2d0bd1.jpg',
  ];

  return (
    <div>
      <h2>Cats & Coffee Vibes</h2>
      <Carousel 
        showThumbs={false} 
        autoPlay={true} 
        infiniteLoop={true} 
        interval={1500}        // Set the interval to 3000ms (3 seconds)
        transitionTime={750}   // Control the speed of the transition (in ms)
        showArrows={true}      // Ensure arrows are shown
        stopOnHover={true}     // Pause auto-rotation on hover
        showStatus={false}     // Hide the status indicator
        showIndicators={true}  // Show indicators (dots) below the carousel
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Cat ${index + 1}`} />
          </div>
        ))}
    </Carousel>

    </div>
  );
};

export default Gallery;
