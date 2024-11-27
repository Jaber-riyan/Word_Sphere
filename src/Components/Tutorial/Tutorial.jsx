import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Tutorial = () => {
    const navigate = useNavigate();

    const videos = [
        'https://www.youtube.com/embed/sISIVKJh_EA?si=He2q15J3jkwQLqH9',
        'https://www.youtube.com/embed/WIL8rOIenZ0?si=mWrNRtqvax8TfLPB',
        'https://www.youtube.com/embed/T09w34WME5Q?si=T9ADRGT2BRTcThVU',
        'https://www.youtube.com/embed/4CvoPRZsejc?si=MsjllcWh0iN_kzCg',
        'https://www.youtube.com/embed/7fvCb5_Nzq4?si=p9jwNSlEM7_mi63B',
        'https://www.youtube.com/embed/fGcf-gzxVNc?si=uQJG764iEORJMh8X',
        'https://www.youtube.com/embed/G_oC7anVuA8?si=4HD_cVouXrZAsnsg',
        'https://www.youtube.com/embed/TmH1B4wxM7M?si=4g6tX7Z4808InQOn',
    ];

    return (
        <div className="min-h-screen bg-[#151b31] p-4 rounded-lg">
            <Helmet><title>Tutorial || WordSphere</title></Helmet>
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-center text-blue-600 animate__animated animate__fadeInDown">
                Learn Japanese Tutorials <FaYoutube className="inline-block text-red-600 ml-2" />
            </h1>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="bg-[#05295ca8] rounded-lg border-2 border-blue-900 p-3 overflow-hidden animate__animated animate__zoomIn shadow-xl"
                    >
                        <iframe
                            className="w-full h-72 rounded-lg"
                            src={video}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                            allowfullscreen>
                        </iframe>
                        {/* <iframe
                            src={video}
                            title={`Japanese Tutorial ${index + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-56"
                        ></iframe> */}
                    </div>
                ))}
            </div>

            {/* Learn Vocabularies Button */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => navigate('/start-learning')}
                    className="btn btn-primary animate__animated animate__pulse"
                >
                    Learn Vocabularies
                </button>
            </div>
        </div>
    );
};

export default Tutorial;
