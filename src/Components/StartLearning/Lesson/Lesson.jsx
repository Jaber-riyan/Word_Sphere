import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { AiFillSound, AiOutlineSound } from 'react-icons/ai';
import { useLoaderData, useParams, Link } from 'react-router-dom';

const Lesson = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const lessons = data.filter(lesson => lesson.Lesson_no === parseInt(id));
    // state for the voice icon 
    const [voice, setVoice] = useState(false);


    const voiceListen = (word) => {
        setVoice(!voice);
        console.log(")--");
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
    }

    // State for the modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    // Open modal with content
    const openModal = (lesson) => {
        const utterance = new SpeechSynthesisUtterance(lesson.word);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
        setModalContent(lesson);
        setIsModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setVoice(false);
        setIsModalOpen(false);
        setModalContent({});
    };

    // Function to set card color based on difficulty
    const getCardColor = (difficulty) => {
        switch (difficulty) {
            case 'easy':
                return 'bg-[#05295c]';
            case 'medium':
                return 'bg-[#0a6faa]';
            case 'hard':
                return 'bg-[#206158]';
            default:
                return 'bg-[#05295c]';
        }
    };

    return (
        <div className="bg-[#151b31] h-full min-h-screen flex flex-col items-center py-10">
            <Helmet><title>Lesson {id} || WordSphere</title></Helmet>
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-blue-600 mb-10">Lesson {id}: Vocabulary</h1>

            {/* Vocabulary Cards */}

            {
                lessons?.length > 0 ?
                    <div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 justify-center">
                            {lessons.map((lesson) => (
                                <div
                                    key={lesson.Id}
                                    className={`rounded-lg shadow-lg p-6 ${getCardColor(lesson.difficulty)} flex flex-col items-center w-60 transition duration-300 ease-in-out hover:scale-105`}
                                >
                                    <h3 className="text-lg mb-3 text-[#b6c6f1] font-black">{lesson.word}</h3>
                                    <p className="text-sm text-[#ffffffc2]"><span className='font-bold'>Meaning: </span> {lesson.meaning}</p>
                                    <p className="text-sm text-[#ffffffc2]"><span className='font-bold'>Pronunciation: </span>{lesson.pronunciation}</p>
                                    <p className="text-sm text-[#ffffffc2]"><span className='font-bold'>Part of Speech: </span> {lesson.part_of_speech}</p>

                                    <button
                                        onClick={() => openModal(lesson)}
                                        className="mt-4 text-[1.2rem] text-[#ffffffde] hover:text-blue-700 font-semibold"
                                    >
                                        When to Say
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    :
                    <h2 className='text-red-500 font-bold text-4xl mb-10 italic'>No Vocabulary Found In this Lesson</h2>
            }


            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-10 ">
                    <div className="bg-[#151b31] text-[#ffffffb7] p-8 rounded-lg shadow-lg space-y-3">
                        <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                            <span className='mr-3'>
                                {modalContent.word}
                            </span>
                            <button className='transition duration-800 ease-in-out' onClick={() => voiceListen(modalContent.word)}>
                                <AiFillSound />
                            </button>
                        </h2>
                        <p className='font-semibold text-xl'><strong>Meaning:</strong> {modalContent.meaning}</p>
                        <p className='font-semibold text-xl'><strong>When to Say:</strong> {modalContent.when_to_say}</p>
                        <p className='font-semibold text-xl'><strong>Example:</strong> {modalContent.example}</p>
                        <button
                            onClick={closeModal}
                            className="mt-4 transition duration-500 ease-in-out bg-blue-500 text-white px-9 py-2 rounded hover:bg-blue-900"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Back Button */}
            <div className="mt-8">
                <Link
                    to="/start-learning"
                    className="bg-[#025381] transition-all duration-300 ease-in-out text-white p-3 rounded hover:bg-[#0889d3]"
                >
                    Back to Lesson List
                </Link>
            </div>
        </div>
    );
};

export default Lesson;
