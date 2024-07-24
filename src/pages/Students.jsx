import React from "react";

function Students() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Students</h1>
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">
          Life at Springdale
        </h2>
        <p className="text-lg mb-4">
          Extracurricular Activities: Music, Dance, Drama, Art, Sports,
          Robotics, Debate Club, Science Club.
        </p>
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">
          Achievements
        </h2>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li className="text-lg">
            John Smith - National Level Math Olympiad Winner
          </li>
          <li className="text-lg">
            Sarah Lee - Gold Medalist in State Swimming Championship
          </li>
          <li className="text-lg">
            Tech Innovators Club - Winners of Inter-School Robotics Competition
          </li>
        </ul>
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">
          Student Council
        </h2>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li className="text-lg">
            <strong>President:</strong> Amy Parker, Grade 12
          </li>
          <li className="text-lg">
            <strong>Vice President:</strong> Rajiv Mehta, Grade 11
          </li>
          <li className="text-lg">
            <strong>Secretary:</strong> Lisa Wong, Grade 10
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Students;
