import React from 'react';

const Header = () => {
  return (
    <div className="header container">
      <h1>My Portfolio</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
