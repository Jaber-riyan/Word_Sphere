import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#151b31] text-white rounded-tl-lg rounded-tr-lg p-6 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg font-semibold mb-9">
          Your gateway to mastering new languages and expanding your horizons.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Mission Section */}
        <div className="card shadow-lg bg-[#05295c]"> 
          <div className="card-body">
            <h2 className="font-bold text-xl">Our Mission</h2>
            <p>
              At <strong>WordsPere</strong>, we aim to make language learning an enjoyable and 
              rewarding experience for everyone. Whether you're a beginner or an advanced 
              learner, we provide tools to expand your vocabulary, improve communication 
              skills, and discover new cultures through words.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="card shadow-lg bg-[#05295c]">
          <div className="card-body">
            <h2 className="font-bold text-xl">Our Vision</h2>
            <p>
              We believe that language connects people. Our vision is to create a global 
              platform where learners can immerse themselves in the beauty of languages, 
              making connections and breaking barriers through effective learning tools.
            </p>
          </div>
        </div>
      </div>

      {/* Skills and Projects Section */}
      <div className="mt-8 bg-[#05295c] card-body rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p className="text-base-100 rounded-lg">
          We are a passionate team of developers and linguists dedicated to creating a
          platform that bridges gaps between cultures and languages. With modern 
          technologies like React, Firebase, and Tailwind CSS, we deliver a seamless 
          user experience. Explore our other projects and initiatives to learn more about 
          our journey in tech and education.
        </p>
      </div>

      
    </div>
  );
};

export default AboutUs;
