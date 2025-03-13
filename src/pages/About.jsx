import React from 'react';

const About = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          TastyBites was founded in 1995 with a passion for bringing authentic flavors to the table. Our chefs use only the freshest ingredients to create dishes that delight.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Meet Our Chef</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Chef John Doe has over 20 years of experience in culinary arts, specializing in Italian and Mediterranean cuisine.
        </p>
      </div>
    </section>
  );
};

export default About;