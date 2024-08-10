import React from 'react';
import './Reviews.css'; // Import the CSS for styling

const Reviews = () => {
  const reviews = [
    { 
      name: 'Eli Cohen', 
      city: 'Tel Aviv', 
      age: 32, 
      review: 'Cat’s Coffee Shop is absolutely amazing! The atmosphere is so warm and inviting, and the cats are just the sweetest. I love coming here to unwind after a long day. The coffee is top-notch, and the staff always makes me feel at home. I’ve even brought my friends here, and they all loved it just as much. This place has become my go-to spot whenever I need a break from the city’s hustle and bustle.' 
    },
    { 
      name: 'Maya Levi', 
      city: 'Jerusalem', 
      age: 28, 
      review: 'This place is a gem! I’m a huge cat lover, and being able to enjoy a cup of delicious coffee while surrounded by adorable cats is a dream come true. The Catnip Tea is my favorite, and the staff here are incredibly friendly and attentive. Every time I visit, I discover something new on the menu that I just have to try. The peaceful vibe here makes it the perfect place to relax and recharge.' 
    },
    { 
      name: 'Yossi Ben-David', 
      city: 'Haifa', 
      age: 45, 
      review: 'I visit Cat’s Coffee Shop whenever I’m in Tel Aviv, and it never disappoints. The vibe is so chill, and the cats are so playful and friendly. The Tuna Sandwich is out of this world, and the coffee is simply the best I’ve had in Israel. Highly recommended! I’ve tried many coffee shops around the country, but none offer the unique experience that this place does. It’s more than just a café – it’s a sanctuary.' 
    },
    { 
      name: 'Rivka Shlomi', 
      city: 'Eilat', 
      age: 37, 
      review: 'I discovered Cat’s Coffee Shop on my last trip to Tel Aviv, and now it’s my go-to spot whenever I’m in town. The combination of great coffee, cozy atmosphere, and adorable cats is unbeatable. The staff are wonderful, and the cappuccino is to die for! I can spend hours here reading or working, and the cats always provide great company. It’s truly a hidden gem in the heart of the city.' 
    },
    { 
      name: 'Avi Goldstein', 
      city: 'Rishon LeZion', 
      age: 29, 
      review: 'Cat’s Coffee Shop is a must-visit! The environment is so relaxing, and the cats add a unique charm that you can’t find anywhere else. The Mocha is my personal favorite, and I always look forward to visiting whenever I’m in the area. Every time I come, I feel like I’m part of a special community of cat lovers. The staff’s passion for both coffee and cats shines through in everything they do. It’s the perfect escape from the everyday grind.' 
    }
  ];

  return (
    <div className="review-container">
      <h2 className="review-title">Customer Reviews</h2>
      <div className="review-content">
        <ul>
          {reviews.map((review, index) => (
            <li key={index} className="review-box">
              <p className="review-text">{review.review}</p>
              <hr className="review-separator" />
              <p className="reviewer-details"><strong>{review.name}</strong>, {review.city}, Age {review.age}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
