import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>
        <span style={{ color: '#565595' }}>Miau</span> {/* Blue */}
        <span style={{ color: '#C56277' }}> Coffee</span> {/* Orange */}
        <span style={{ color: '#D4B66A' }}> Ramat</span> {/* Yellow */}
        <span style={{ color: '#008000' }}> Gan</span> {/* Green */}
      </h1>
      <nav>
        <a href="#menu">Menu</a>
        <a href="#reviews">Reviews</a>
        <a href="#gallery">Gallery</a>
        <a href="#house-cats">House Cats</a> {/* New link for House Cats */}
      </nav>
    </header>
  );
};

export default Header;
