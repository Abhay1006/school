import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">History</h2>
          <p className="text-lg">
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">Vision</h2>
          <p className="text-lg">
            To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">Mission</h2>
          <p className="text-lg">
            To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">Principal's Message</h2>
          <p className="text-lg">
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">Infrastructure and Facilities</h2>
          <ul className="list-disc list-inside pl-5">
            <li className="text-lg">State-of-the-art science and computer labs</li>
            <li className="text-lg">Spacious and well-equipped classrooms</li>
            <li className="text-lg">Library with a vast collection of books and digital resources</li>
            <li className="text-lg">Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
