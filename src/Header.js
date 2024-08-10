import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Miau Coffee Ramat Gan</h1>
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
