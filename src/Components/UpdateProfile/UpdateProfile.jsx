import { updateProfile } from 'firebase/auth';
import React, { useState, useEffect, useContext } from 'react';
import { FiUser, FiImage } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.config';
import { AuthContext } from '../../Authentication/Authentication'

const UpdateProfile = () => {
    const navigate = useNavigate();

    // State to check user authentication
    const [user, NU] = useState(auth.currentUser);
    const { setUser } = useContext(AuthContext);


    useEffect(() => {
        if (!user) {
            toast.error('Please log in to update your profile.');
            navigate('/login');
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photoURL');

        if (!name || !photo) {
            toast.error('All fields are required!');
            return;
        }

        try {
            await updateProfile(user, { displayName: name, photoURL: photo })
            setUser(auth.currentUser);
            toast.success('Profile Updated Successfully!');
            navigate('/my-profile');
        } catch (error) {
            toast.error('Error updating profile: ' + error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#01185e]">
            <div className="w-full max-w-lg p-8 bg-[#132c77] shadow-lg rounded-lg animate__animated animate__zoomIn">
                <h1 className="text-3xl font-bold text-center text-white mb-6">Update Profile</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-white mb-2" htmlFor="name">
                            Name
                        </label>
                        <div className="flex items-center">
                            <FiUser className="text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 ml-2 border rounded-lg outline-none bg-gray-100 focus:border-gray-400"
                                defaultValue={user?.displayName || ''}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white mb-2" htmlFor="photoURL">
                            Photo URL
                        </label>
                        <div className="flex items-center">
                            <FiImage className="text-gray-400 w-5 h-5" />
                            <input
                                type="url"
                                id="photoURL"
                                name="photoURL"
                                placeholder="Enter photo URL"
                                className="w-full px-4 py-2 ml-2 border rounded-lg outline-none bg-gray-100 focus:border-gray-400"
                                defaultValue={user?.photoURL || ''}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900 shadow-md flex justify-center items-center"
                    >
                        Update Information
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
