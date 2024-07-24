import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Springdale Public School</div>
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <li><Link className="text-white hover:underline block md:inline-block" to="/">Home</Link></li>
          <li><Link className="text-white hover:underline block md:inline-block" to="/about">About Us</Link></li>
          <li><Link className="text-white hover:underline block md:inline-block" to="/academics">Academics</Link></li>
          <li><Link className="text-white hover:underline block md:inline-block" to="/admissions">Admissions</Link></li>
          <li><Link className="text-white hover:underline block md:inline-block" to="/faculty">Faculty</Link></li>
          <li><Link className="text-white hover:underline block md:inline-block" to="/students">Students</Link></li>
          <li><Link className="text-white hover:underline block md:inline-block" to="/gallery">Gallery</Link></li>
          <li><Link className="text-white hover:underline block md:inline-block" to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
