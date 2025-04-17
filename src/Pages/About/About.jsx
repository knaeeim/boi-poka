import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-xl">Learn more about who we are and what we do</p>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-6 text-center md:text-left">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a team of passionate individuals dedicated to providing high-quality products and services. Our journey began with a simple mission: to make an impact in the world by delivering value to our customers. Over the years, we have grown and evolved, but our commitment to excellence has remained unchanged.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {/* Team Member 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img className="rounded-full w-32 h-32 mx-auto mb-4 object-cover" src="https://i.ibb.co/zWGpwGpr/profile-p.jpg" alt="Team Member 1" />
              <h3 className="text-xl font-semibold text-gray-800">Khairul Bashar Naeeim</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img className="rounded-full w-32 h-32 mx-auto mb-4 object-cover" src="https://i.ibb.co/99C5y0Qb/images-q-tbn-ANd9-Gc-Q7-KSLx-Ae-H40e7p-Zf-Sy-Vgx9a-s-NX8-Sg0-S6-WTA-s.jpg" alt="Team Member 2" />
              <h3 className="text-xl font-semibold text-gray-800">Tourist</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img className="rounded-full w-32 h-32 mx-auto mb-4 object-cover" src="https://i.ibb.co/bgDLP7x3/images-q-tbn-ANd9-Gc-Sj4-UJEh-Ll-Fo-Egg-Np6p-QNLRhq-Cj2-IVw9-YFBQ-s.jpg" alt="Team Member 3" />
              <h3 className="text-xl font-semibold text-gray-800">Alen Swapon</h3>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to provide innovative solutions that empower individuals and businesses to succeed. We are dedicated to continuous improvement, and our focus is always on delivering exceptional customer experiences. Through our products and services, we strive to make a positive impact on the world.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-cyan-700 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">Have any questions? Feel free to reach out to us!</p>
          <a href="mailto:contact@company.com" className="bg-white text-blue-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
