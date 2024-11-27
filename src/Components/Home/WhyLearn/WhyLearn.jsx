import React from "react";

const WhyLearn = () => {
    return (
        <section className="py-12 bg-[#151b31] rounded-tl-lg rounded-tr-lg text-base-100 p-6 min-h-[85vh]">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-6">
                    Why Learn Japanese?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmYwJ2GnVelEygtvPq1a5FQn084BCViCxTCw&s"
                            alt="Language Learning"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                    <div>
                        <p className="text-lg mb-4">
                            Learning Japanese opens doors to exciting opportunities! Whether it’s for travel, work, or cultural appreciation, mastering this language will:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Enhance your career prospects in global markets.</li>
                            <li>Help you connect with millions of native speakers.</li>
                            <li>Provide insight into a rich and unique culture.</li>
                            <li>Boost your cognitive abilities and memory.</li>
                        </ul>
                        <p className="text-lg mt-4">
                            Start your journey with <strong>WordsPere</strong> today and embrace the joys of language learning!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyLearn;
