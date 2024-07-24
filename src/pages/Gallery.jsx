import React from 'react';

function Gallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      
      <h2 className="text-2xl font-semibold mb-4">Photos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="relative bg-white rounded-lg shadow">
          <img
            src="sports_day.jpg"
            alt="Sports Day"
            className="w-full h-48 object-cover object-center rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Annual Sports Day</h3>
            <p>Students participating in various sports events.</p>
          </div>
        </div>
        <div className="relative bg-white rounded-lg shadow">
          <img
            src="science_exhibition.jpg"
            alt="Science Exhibition"
            className="w-full h-48 object-cover object-center rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Science Exhibition</h3>
            <p>Students presenting their science projects.</p>
          </div>
        </div>
        <div className="relative bg-white rounded-lg shadow">
          <img
            src="cultural_fest.jpg"
            alt="Cultural Fest"
            className="w-full h-48 object-cover object-center rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Cultural Fest</h3>
            <p>Students performing in the cultural fest.</p>
          </div>
        </div>
        <div className="relative bg-white rounded-lg shadow">
          <img
            src="classroom.jpg"
            alt="Classroom"
            className="w-full h-48 object-cover object-center rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Interactive Classroom</h3>
            <p>A glimpse of our interactive classrooms.</p>
          </div>
        </div>
        <div className="relative bg-white rounded-lg shadow">
          <img
            src="library.jpg"
            alt="Library"
            className="w-full h-48 object-cover object-center rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Library</h3>
            <p>Students reading and studying in the school library.</p>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative bg-white rounded-lg shadow">
          <video
            src="school_tour.mp4"
            controls
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">School Tour</h3>
            <p>Virtual tour of Springdale Public School.</p>
          </div>
        </div>
        <div className="relative bg-white rounded-lg shadow">
          <video
            src="annual_function.mp4"
            controls
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Annual Function Highlights</h3>
            <p>Highlights from the Annual Function 2023.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
