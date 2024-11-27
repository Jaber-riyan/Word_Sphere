import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../Authentication/Authentication';

const MainLayout = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="bg-black bg-opacity-95">
            <Marquee pauseOnHover={true} className='cursor-pointer bg-gray-800 text-white p-2 text-xl font-semibold italic mb-3'>
                {user && <h2>
                    Welcome back, <span className='text-blue-500'>{user?.displayName}</span>
                </h2>}
            </Marquee>
            <div className='md:w-[80%] mx-auto container'>
                <header className='sticky top-0 z-10'>
                    <Navbar></Navbar>
                </header>
                <section>
                    <Outlet></Outlet>
                </section>
            </div>
            <footer className='mt-10'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;