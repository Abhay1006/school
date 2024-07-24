import React from 'react';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-8">
        <img
          src="schoollogo.jpg" // Placeholder for logo
          alt="Springdale Public School Logo"
          className="w-32 h-32 object-cover mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">Springdale Public School</h1>
        <p className="text-lg mb-6">
          Welcome to Springdale Public School, where we nurture young minds for a brighter future.
        </p>
      </div>
      <Carousel />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <a href="/about" className="text-blue-600 font-bold">About Us</a>
          </li>
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <a href="/academics" className="text-blue-600 font-bold">Academics</a>
          </li>
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <a href="/admissions" className="text-blue-600 font-bold">Admissions</a>
          </li>
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <a href="/faculty" className="text-blue-600 font-bold">Faculty</a>
          </li>
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <a href="/students" className="text-blue-600 font-bold">Students</a>
          </li>
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <a href="/gallery" className="text-blue-600 font-bold">Gallery</a>
          </li>
          <li className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <a href="/contact" className="text-blue-600 font-bold">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
