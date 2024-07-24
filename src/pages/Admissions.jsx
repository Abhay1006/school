import React from "react";

function Admissions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admissions</h1>
      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">
            Admission Process
          </h2>
          <p className="text-lg">
            Admission forms are available for download. Submit the completed
            form along with required documents at the school office.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">
            Criteria
          </h2>
          <p className="text-lg">
            Admission is based on merit and availability of seats. Entrance
            tests may be conducted for certain grades.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">
            Important Dates
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">
            Download Admission Forms
          </h2>
          <a
            href="/path/to/admission-form.pdf"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Download Form
          </a>
        </div>
      </section>
    </div>
  );
}

export default Admissions;
