import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomeCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const goToSlide = (slide) => {
        if (slide > 4) {
            setCurrentSlide(1);
        } else if (slide < 1) {
            setCurrentSlide(4);
        } else {
            setCurrentSlide(slide);
        }
    };

    return (
        <div className="mb-24">
            <div className="carousel w-full ">
                <div
                    className={`carousel-item relative w-full ${currentSlide === 1 ? "block" : "hidden"
                        }`}
                >
                    <img
                        src="https://i.ibb.co.com/kH4Q027/japan-travel-destination-horizontal-banner-template-with-japanese-symbols-23-2149436991.jpg"
                        className="w-full h-[80vh] object-contain"
                        alt="Slide 1"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={() => goToSlide(currentSlide - 1)} className="btn btn-circle">
                            ❮
                        </button>
                        <button onClick={() => goToSlide(currentSlide + 1)} className="btn btn-circle">
                            ❯
                        </button>
                    </div>
                </div>
                <div
                    className={`carousel-item relative w-full ${currentSlide === 2 ? "block" : "hidden"
                        }`}
                >
                    <img
                        src="https://i.ibb.co.com/2j3Njbr/japan-travel-destination-horizontal-banner-template-with-japanese-symbols-23-2149436990.jpg"
                        className="w-full h-[80vh]  object-contain"
                        alt="Slide 2"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={() => goToSlide(currentSlide - 1)} className="btn btn-circle">
                            ❮
                        </button>
                        <button onClick={() => goToSlide(currentSlide + 1)} className="btn btn-circle">
                            ❯
                        </button>
                    </div>
                </div>
                <div
                    className={`carousel-item relative w-full ${currentSlide === 3 ? "block" : "hidden"
                        }`}
                >
                    <img
                        src="https://i.ibb.co.com/XSkcMRd/japan-travel-destination-horizontal-banner-template-with-japanese-symbols-23-2149436988.jpg"
                        className="w-full h-[80vh] object-contain"
                        alt="Slide 3"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={() => goToSlide(currentSlide - 1)} className="btn btn-circle">
                            ❮
                        </button>
                        <button onClick={() => goToSlide(currentSlide + 1)} className="btn btn-circle">
                            ❯
                        </button>
                    </div>
                </div>
                <div
                    className={`carousel-item relative w-full ${currentSlide === 4 ? "block" : "hidden"
                        }`}
                >
                    <img
                        src="https://i.ibb.co.com/RgCmY74/japan-travel-destination-landing-page-template-with-japanese-symbols-23-2149436977.jpg"
                        className="w-full h-[80vh] object-contain"
                        alt="Slide 4"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={() => goToSlide(currentSlide - 1)} className="btn btn-circle">
                            ❮
                        </button>
                        <button onClick={() => goToSlide(currentSlide + 1)} className="btn btn-circle">
                            ❯
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-3 flex justify-center">
                <Link to='/start-learning' type="button" className="px-8 py-2 bg-blue-500 text-white text-xl">Let's Learn</Link>
            </div>
        </div>
    );
};

export default HomeCarousel;
