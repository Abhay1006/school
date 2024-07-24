import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p>We'd love to hear from you. Please fill out the form below, and we'll get back to you as soon as possible.</p>
        <ContactForm />
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold">Address</h3>
            <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
            <h3 className="text-xl font-semibold mt-4">Phone</h3>
            <p>+1 (123) 456-7890</p>
            <h3 className="text-xl font-semibold mt-4">Email</h3>
            <p><a href="mailto:info@springdale.edu" className="text-blue-600 hover:underline">info@springdale.edu</a></p>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold">Find Us on the Map</h3>
            <div className="h-80">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.118080386736!2d-122.08560968468299!3d37.42206597982503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e6a5df02e3%3A0x5c93f9e9a16d11d6!2sGoogleplex!5e0!3m2!1sen!2sus!4v1634575332518!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
