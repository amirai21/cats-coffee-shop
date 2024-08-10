import React from 'react';

const Menu = () => {

  const menuItems = [
    { name: 'Espresso', price: '$3.00', description: 'A rich and bold espresso shot, perfect to start your day.' },
    { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk and foam, topped with a sprinkle of cocoa.' },
    { name: 'Catnip Tea', price: '$2.50', description: 'A soothing herbal tea with a hint of catnip, a favorite of our feline friends.' },
    { name: 'Latte', price: '$4.00', description: 'A creamy blend of espresso and steamed milk, topped with delicate foam.' },
    { name: 'Mocha', price: '$4.75', description: 'A chocolatey twist on a classic espresso, mixed with steamed milk and topped with whipped cream.' },
    { name: 'Tuna Sandwich', price: '$6.50', description: 'A delightful tuna sandwich, served with a side of fresh greens.' },
  ];

  const menuContainerStyle = {
    position: 'relative',
    color: '#fff',
    padding: '20px',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    margin: '20px',
  };

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/miau.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 0.6, /* Set the background image opacity */
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -2, /* Ensure the background stays behind the text */
    borderRadius: '15px',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Semi-transparent black overlay */
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, /* Ensure the overlay is behind the text but above the background image */
    borderRadius: '15px',
  };

  return (
    <div style={menuContainerStyle}>
      <div style={overlayStyle}></div> {/* Semi-transparent overlay */}
      <div style={backgroundStyle}></div> {/* Background image */}
      <h2>Our Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <h3>{item.name} {item.price}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
