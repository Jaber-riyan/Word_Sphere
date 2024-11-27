import React from 'react';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import AboutUs from './AboutUs/AboutUs';
import HomeSuccess from './HomeSuccess/HomeSuccess';
import WhyLearn from './WhyLearn/WhyLearn';
import FunFacts from './FunFacts/FunFacts';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet><title>WordSphere</title></Helmet>
            <div>
                <HomeCarousel></HomeCarousel>
            </div>
            <div>
                <AboutUs></AboutUs>
            </div>
            <div>
                <HomeSuccess></HomeSuccess>
            </div>
            <div>
                <WhyLearn></WhyLearn>
            </div>
            <div>
                <FunFacts></FunFacts>
            </div>
        </div>
    );
};

export default Home;