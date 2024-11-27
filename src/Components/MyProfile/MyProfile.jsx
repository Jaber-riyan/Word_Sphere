import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { FaUserEdit } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authentication/Authentication';
import { deleteUser } from 'firebase/auth';
import auth from '../../Firebase/Firebase.config';
import { toast } from 'react-toastify';
import { ImCross } from 'react-icons/im';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const { photoURL, displayName, email } = user || {};
    const navigate = useNavigate();

    const handleDeleteAccount = () => {
        deleteUser(auth.currentUser)
            .then(res => {
                toast.success("Account Deleted Successfully");
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
    return (
        <div>
            <Helmet>
                <title>My Profile || WordSphere</title>
            </Helmet>
            <div className="flex items-center justify-center min-h-screen bg-[#01185e] rounded-lg">
                <div className="w-full max-w-lg p-8 bg-[#132c77] shadow-lg rounded-lg animate__animated animate__zoomIn text-white">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-white mb-2">Welcome, <span className='text-blue-300'>{displayName}</span>!</h1>
                        <p className="">Here's your profile information</p>
                    </div>
                    <div className="flex flex-col items-center">
                        {/* User Image */}
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-gray-300 ring-offset-base-100 ring-offset-2">
                                <img
                                    src={photoURL || 'https://via.placeholder.com/150'}
                                    alt={`${displayName}'s Avatar`}
                                />
                            </div>
                        </div>
                        <div className="mt-4 space-y-2 text-center">
                            {/* User Info */}
                            <p className="text-2xl font-medium">{displayName}</p>
                            <p className="text-sm text-[#ffffffb2]">{email}</p>
                        </div>
                        <div className='flex gap-3'>
                            {/* Update Button */}
                            <Link
                                to={'/update-profile'}
                                className="mt-6 flex items-center px-4 py-2 transition-all duration-300 ease-in-out text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md"
                            >
                                <FaUserEdit className="mr-2" />
                                Update Profile
                            </Link>
                            {/* Delete Account Button */}
                            <button 
                                onClick={handleDeleteAccount}
                                className="mt-6 flex items-center px-4 py-2 text-white transition-all duration-300 ease-in-out bg-red-600 hover:bg-red-700 rounded-md shadow-md"
                            >
                                <ImCross  className="mr-2" />
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;