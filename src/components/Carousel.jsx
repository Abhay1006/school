import React from "react";
import "./Carousel.css"; // Ensure this path is correct for your project structure

function Carousel() {
  return (
    <div className="relative">
      <div className="carousel-item w-full h-64 overflow-hidden rounded-lg">
        <img
          className="carousel-image w-full h-full object-cover"
          src="frankie-lopez-jI3PmZZscBs-unsplash.jpg"
          alt="Annual Sports Day"
        />
        <div className="carousel-caption absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">
          <h3 className="text-xl">Annual Sports Day</h3>
        </div>
      </div>
      <div className="carousel-item w-full h-64 overflow-hidden rounded-lg mt-4">
        <img
          className="carousel-image w-full h-full object-cover"
          src="jesse-orrico-rmWtVQN5RzU-unsplash.jpg"
          alt="Science Exhibition"
        />
        <div className="carousel-caption absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">
          <h3 className="text-xl">Science Exhibition</h3>
        </div>
      </div>
      <div className="carousel-item w-full h-64 overflow-hidden rounded-lg mt-4">
        <img
          className="carousel-image w-full h-full object-cover"
          src="dibakar-roy-uWPHo9iC9Wg-unsplash.jpg"
          alt="Cultural Fest"
        />
        <div className="carousel-caption absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">
          <h3 className="text-xl">Cultural Fest</h3>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
