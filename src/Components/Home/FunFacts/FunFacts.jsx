import React from "react";

const FunFacts = () => {
  const facts = [
    "Japanese has three writing systems: Hiragana, Katakana, and Kanji.",
    "It’s estimated that there are over 50,000 Kanji characters, but only about 2,000 are commonly used in daily life.",
    "Japanese is one of the fastest spoken languages in the world, averaging 7.84 syllables per second!",
    "The Japanese language doesn’t use spaces between words in writing.",
    "Learning Japanese can help you enjoy anime, manga, and Japanese movies in their original form!",
  ];

  return (
    <section className="py-12 bg-[#052fadaf] rounded-lg p-6 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-9">
          Fun Facts About Japanese
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#ffffffc0]">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="p-6 bg-[#102f8d] rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 border-t-4 border-indigo-400"
            >
              <p className="text-lg font-semibold">{fact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
