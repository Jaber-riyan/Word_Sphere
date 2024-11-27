import React from 'react';
import { FiMail } from 'react-icons/fi';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { sendPasswordResetEmail, updatePassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.config';
import { Helmet } from 'react-helmet';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const param = useParams();
    const emailFromState = param.email;

    const handleResetPassword = async (e) => {
        e.preventDefault();
        console.log(location);
        console.log(emailFromState);
        const form = new FormData(e.target);
        const email = form.get('email'); // Get email from form input

        if (!email) {
            toast.error('Please provide your email address.');
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            toast.success('Password reset email sent! Check your inbox.');
            window.open('https://mail.google.com/', '_blank');
        } catch (error) {
            toast.error('Error: ' + error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#151b31]">
            <Helmet><title>Forgat Password || WordSphere</title></Helmet>
            <div className="w-full max-w-lg p-8 shadow-lg rounded-lg bg-[#05295c] animate__animated animate__zoomIn">
                <h1 className="text-3xl font-bold text-center text-white mb-6">Forgot Password</h1>
                <form onSubmit={handleResetPassword} className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-white mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <div className="flex items-center">
                            <FiMail className="text-gray-400 w-5 h-5" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                                defaultValue={emailFromState} // Set the default value from state
                                className="w-full px-4 py-2 ml-2 border rounded-lg outline-none bg-gray-100 focus:border-gray-400"
                            />
                        </div>
                    </div>
                    {/* Reset Password Button */}
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900 shadow-md flex justify-center items-center"
                    >
                        Reset Password
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-white">
                    Remembered your password?{' '}
                    <button
                        onClick={() => navigate('/login')}
                        className="text-red-500 hover:underline"
                    >
                        Login Here
                    </button>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
