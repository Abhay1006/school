import React from 'react';

function Academics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Academics</h1>
      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">Curriculum</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Primary (Grades 1-5)</h3>
            <p className="text-lg">Subjects: English, Mathematics, Science, Social Studies, Art, Physical Education</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Secondary (Grades 6-10)</h3>
            <p className="text-lg">Subjects: English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Senior Secondary (Grades 11-12)</h3>
            <p className="text-lg"><strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
            <p className="text-lg"><strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English</p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">Teaching Methodologies</h2>
          <p className="text-lg">We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">Educational Resources</h2>
          <p className="text-lg">Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
        </div>
      </section>
    </div>
  );
}

export default Academics;
