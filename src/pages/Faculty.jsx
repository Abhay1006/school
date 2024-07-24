import React from "react";

function Faculty() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Faculty</h1>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-lg">
              Principal, M.Ed, 20 years of experience in educational
              administration.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-lg">
              Vice Principal, M.Sc. in Physics, 15 years of teaching experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Emily Johnson</h3>
            <p className="text-lg">
              English Teacher, M.A. in English, 10 years of teaching experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Michael Brown</h3>
            <p className="text-lg">
              Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching
              experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Sophia Davis</h3>
            <p className="text-lg">
              Science Teacher, M.Sc. in Chemistry, 12 years of teaching
              experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-2">David Wilson</h3>
            <p className="text-lg">
              Computer Science Teacher, B.Tech in Computer Science, 5 years of
              teaching experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faculty;
