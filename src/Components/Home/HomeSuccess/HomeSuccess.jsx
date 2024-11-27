import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaBook, FaLanguage, FaVideo, FaUser } from "react-icons/fa";


const HomeSuccess = () => {
    const stats = [
        { id: 1, title: "Users", count: 1690, icon: <FaUser /> },
        { id: 2, title: "Lessons", count: 10, icon: <FaBook /> },
        { id: 3, title: "Vocabularies", count: 2000, icon: <FaLanguage /> },
        { id: 4, title: "Tutorials", count: 50, icon: <FaVideo /> },
    ];

    return (
        <section className="py-12 bg-[#052fadaf] p-6 rounded-tr-lg rounded-tl-lg min-h-[85vh] text-white">
            <div className="container mx-auto text-center grid items-center">
                <h2 className="text-4xl font-bold mb-6">
                    Our Achievements
                </h2>
                <p className="font-semibold text-xl mb-12">
                    See how far we’ve come with our language learning journey!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="card shadow-lg bg-[#102f8d] text-center p-6 rounded-lg"
                        >
                            <div className="text-6xl flex justify-center mb-4 text-[#ffffffc2]">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold">
                                <CountUp end={stat.count} duration={2.5} />
                            </h3>
                            <p className="text-lg font-semibold mt-2">{stat.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeSuccess;
