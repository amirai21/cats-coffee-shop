import React, { useState } from 'react';
import Modal from 'react-modal';
import './HouseCats.css'; // Assuming you'll add some custom styles here

const houseCatsData = [
  {
    name: 'Sir Whiskers McFluff',
    story: 'Sir Whiskers McFluff was once the esteemed mayor of Catnipville, where he ruled with a velvet paw. After a scandal involving a mysterious fish theft, he retired to our coffee shop, where he now presides over the milk foam on cappuccinos.',
    image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
  },
  {
    name: 'Princess Purrfect',
    story: 'Princess Purrfect hails from the royal palace of Meowland. She was the top advisor to the queen, specializing in nap diplomacy. After a life of luxury, she decided to trade in her crown for a cozy spot by the fireplace at our café.',
    image: 'https://cdn.theatlantic.com/thumbor/tO5tLGl38cH3MjWz3PypY1dPHX4=/0x62:2000x1187/960x540/media/img/mt/2018/03/AP_325360162607/original.jpg',
  },
  {
    name: 'Captain Claws',
    story: 'Captain Claws was once the most feared pirate on the Seven Litter Boxes. His crew of misfit mice sailed the high seas in search of treasure, but after a fateful battle with a vacuum cleaner, he hung up his eyepatch and settled here for a quieter life.',
    image: 'https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg',
  },
  {
    name: 'Madame Furrball',
    story: 'Madame Furrball was a world-renowned opera singer, known for her ability to hit the highest notes during her performances. After her last tour, she decided to retire and now serenades our guests with purrs and the occasional meow in our coffee shop.',
    image: 'https://static01.nyt.com/images/2024/03/05/autossell/00TB-MEOWS/00TB-MEOWS-square640.jpg',
  },
  {
    name: 'Professor Meowington',
    story: 'Professor Meowington is a former professor of feline philosophy at the prestigious Whisker University. He spent years contemplating the mysteries of the universe, only to conclude that the meaning of life is found in a warm sunbeam and a good nap.',
    image: 'https://www.thesprucepets.com/thmb/Wy9Vno45XeFtos7omJ80qkZrtZc=/3760x0/filters:no_upscale():strip_icc()/GettyImages-174770333-0f52afc06a024c478fafb1280c1f491f.jpg',
  },
];

const HouseCats = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);

  const openModal = (cat) => {
    setSelectedCat(cat);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h2>Meet Our House Cats</h2>
      <div className="house-cats-gallery">
        {houseCatsData.map((cat, index) => (
          <div 
            key={index} 
            className="house-cat-item" 
            onClick={() => openModal(cat)}
          >
            <img src={cat.image} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Cat Details"
        className="cat-modal"
        overlayClassName="cat-modal-overlay"
      >
        {selectedCat && (
          <div className="modal-content">
            <h2>{selectedCat.name}</h2>
            <img src={selectedCat.image} alt={selectedCat.name} />
            <p>{selectedCat.story}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default HouseCats;
