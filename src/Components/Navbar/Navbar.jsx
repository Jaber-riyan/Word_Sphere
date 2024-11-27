import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/Authentication';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { toast } from 'react-toastify';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, handleLogout, setUser } = useContext(AuthContext);
    console.log(user);
    const logoutHandler = () => {
        handleLogout()
            .then(res => {
                toast.success("Logout Successful");
                setUser(null);
                navigate('/login');
            })
            .catch(error => {
                const errorCode = error.code.split("auth/")[1];
                const formattedError = errorCode
                    .split("-")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
                toast.error(formattedError);
            })

    }

    const links = <>
        <NavLink to={'/'}
            className="hover:text-[#4b4bed] text-white font-[700] text-[14px] cursor-pointer">
            Home
        </NavLink>
        <NavLink to={'/start-learning'}
            className="hover:text-[#4b4bed] text-white font-[700] text-[14px] cursor-pointer">
            Start Learning
        </NavLink>
        <NavLink to={'/tutorial'}
            className="hover:text-[#4b4bed] text-white font-[700] text-[14px] cursor-pointer">
            Tutorial
        </NavLink>
        <NavLink to={'/about-us'}
            className="hover:text-[#4b4bed] text-white font-[700] text-[14px] cursor-pointer">
            About Us
        </NavLink>
        {
            user?.email ?
                <>
                    <NavLink to={'/my-profile'}
                        className="hover:text-[#4b4bed] text-white font-[700] text-[14px] cursor-pointer mr-2">
                        My Profile
                    </NavLink>
                    <Link onClick={logoutHandler}
                        className="hover:text-[#4b4bed] text-white font-[700] text-[14px] cursor-pointer">
                        Logout
                    </Link>

                </> :
                <>
                    <NavLink to={'/register'}
                        className="hover:text-[#4b4bed] text-white font-[700] text-[14px] cursor-pointer mr-2">
                        Register
                    </NavLink>
                    <NavLink to={'/login'}
                        className="hover:text-[#4b4bed] text-white font-[700] text-[14px] cursor-pointer">
                        Login
                    </NavLink>
                </>
        }
        <NavLink
            className="flex gap-2 justify-center items-center text-[14px]">
            {user &&
                <Link to={'/my-profile'}>
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                            <img src={user && user?.photoURL} />
                        </div>
                    </div>
                </Link>}
        </NavLink>
    </>
    return (
        <div>
            <nav className="mb-7">
                <div className="navbar rounded-lg border-2 text-white backdrop-blur-sm bg-transparent">
                    <div className="navbar-start">
                        <Link to={'/'}><h2 className='text-white font-bold text-3xl'>WordSphere</h2></Link>
                    </div>
                    <div className="navbar-end">
                        <div className="md:block hidden">
                            <ul className="menu-horizontal p-2 space-x-4 items-center justify-center">
                                {links}
                            </ul>
                        </div>
                        <div className="dropdown">
                            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex="0"
                                className="menu menu-sm dropdown-content bg-[#00000050] rounded-box z-[1] mt-3 w-52 p-2 shadow right-0">
                                {links}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;