import React from 'react';
import './BackgroundStory.css'; // Keep this for other styles

const BackgroundStory = () => {
  const backgroundStyle = {
    backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/004/806/928/small/silhouettes-of-pads-of-the-cat-paws-animal-paw-prints-on-ground-simple-black-and-white-isolated-on-white-background-vector.jpg')`,
    backgroundColor: 'rgba(255, 245, 250, 0.9)', // Light pink with opacity
    backgroundBlendMode: 'overlay', // Blend the color with the image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '30px',
    borderRadius: '15px',
    margin: '20px auto',
    maxWidth: '800px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={backgroundStyle} className="background-story-container">
      <h2>Our Story</h2>
      <div className="background-story-content">
        <p>
          In the heart of Ramat Gan, on a quiet corner of Bialik Street, lies a coffee shop like no other. This is not just any café, but a haven for both humans and felines alike. It all began with a dream—a dream nurtured by a single mother named Sarah, who had always had a deep love for animals, especially cats.
        </p>
        <p>
          For years, Sarah worked tirelessly to make ends meet, all while caring for her young daughter and a small army of rescue cats that she had taken in over the years. The idea of owning her own café was something she often thought about during those quiet moments late at night, after putting her daughter to bed and tending to the needs of her beloved cats.
        </p>
        <p>
          When the COVID-19 pandemic hit, Sarah, like many others, faced uncertain times. Yet, it was during these challenging days that she found the courage to pursue her dream. With the support of her community and the love of her daughter, she transformed a small, vacant storefront into a cozy coffee shop where patrons could enjoy a warm cup of coffee in the company of playful, affectionate cats.
        </p>
        <p>
          Today, this little coffee shop has become a beacon of hope and joy for many. It’s a place where rescued cats find loving homes, where friendships are forged over lattes, and where the spirit of resilience and love is felt in every corner. Sarah’s dream, once just a flicker of hope, has grown into a thriving business, bringing comfort and happiness to all who visit.
        </p>
        <p>
          Every cup of coffee served here tells a story of perseverance, compassion, and the belief that even in the darkest times, dreams can come true.
        </p>
      </div>
    </div>
  );
};

export default BackgroundStory;
