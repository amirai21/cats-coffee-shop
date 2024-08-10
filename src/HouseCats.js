import React, { useState } from 'react';
import Modal from 'react-modal';
import './HouseCats.css'; // Assuming you'll add some custom styles here

const houseCatsData = [
  {
    name: 'Sir Whiskers McFluff',
    story: 'Sir Whiskers McFluff was once the esteemed mayor of Catnipville, where he ruled with a velvet paw. After a scandal involving a mysterious fish theft, he retired to our coffee shop, where he now presides over the milk foam on cappuccinos.',
    image: '/cats/sir_whiskers.jpg',
  },
  {
    name: 'Princess Purrfect',
    story: 'Princess Purrfect hails from the royal palace of Meowland. She was the top advisor to the queen, specializing in nap diplomacy. After a life of luxury, she decided to trade in her crown for a cozy spot by the fireplace at our café.',
    image: '/cats/princess_purrfect.jpg',
  },
  {
    name: 'Captain Claws',
    story: 'Captain Claws was once the most feared pirate on the Seven Litter Boxes. His crew of misfit mice sailed the high seas in search of treasure, but after a fateful battle with a vacuum cleaner, he hung up his eyepatch and settled here for a quieter life.',
    image: '/cats/captain_claws.jpg',
  },
  {
    name: 'Madame Furrball',
    story: 'Madame Furrball was a world-renowned opera singer, known for her ability to hit the highest notes during her performances. After her last tour, she decided to retire and now serenades our guests with purrs and the occasional meow in our coffee shop.',
    image: '/cats/madame_furrball.jpg',
  },
  {
    name: 'Professor Meowington',
    story: 'Professor Meowington is a former professor of feline philosophy at the prestigious Whisker University. He spent years contemplating the mysteries of the universe, only to conclude that the meaning of life is found in a warm sunbeam and a good nap.',
    image: '/cats/professor_meowington.jpeg',
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
