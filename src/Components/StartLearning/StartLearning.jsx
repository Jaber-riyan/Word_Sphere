import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';

const StartLearning = () => {
    const lessons = useLoaderData();
    console.log(lessons);
    // const lessons = Array.from({ length: 10 }, (_, index) => index + 1); // Generate an array of 10 lessons (1 to 10)

    return (
        <div className="bg-[#052fadaf] md:h-[70vh] justify-center flex flex-col rounded-lg items-center py-10">
            <Helmet><title>Start Learning || WordSphere</title></Helmet>
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-[#6585e7] mb-10">Learn Japanese - Lessons</h1>

            {/* Lessons Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {lessons.map((lesson) => (
                    <Link
                        to={`/lesson/${lesson.id}`}
                        key={lesson.lesson}
                        className="bg-[#1d42b1] hover:bg-[#2c5be7] hover:text-white rounded-lg shadow-lg p-6 flex justify-center items-center transition duration-300 ease-in-out text-[#ffffffa9]"
                    >
                        <h2

                            className="text-lg font-semibold"
                        >
                            Lesson {lesson.lesson}
                        </h2>
                    </Link>
                ))}
            </div>
            <Link className='mt-5' to={'/tutorial'}>
                <button className='px-5 py-2 bg-[#4461b9] hover:bg-[#2c5be7] text-[#ffffffc4] rounded-lg'>View more</button>
            </Link>
        </div>
    );
};

export default StartLearning;
