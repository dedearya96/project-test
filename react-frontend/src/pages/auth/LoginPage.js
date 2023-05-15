import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../actions/auth/auth";
import { useNavigate, Navigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { cleareMessage } from "../../actions/auth/message";

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const { message } = useSelector(state => state.message);
    const { isLoading } = useSelector(state => state.auth);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const isButtonDisabled = email === '' || password === '';

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    useEffect(() => {
        dispatch(cleareMessage());
    }, [dispatch]);

    function handleLogin(e) {
        e.preventDefault();
        dispatch(login(email, password))
            .then(() => {
                navigate('/home');
                window.location.reload();
            })
            .catch(() => {

            })
    }

    if (user) {
        return <Navigate to="/home" />;
    }

    return (
        <div className="flex justify-center items-center h-screen w-full md:w-1/3 mx-auto">
            <div className="container">
                <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-lg font-medium mb-4 text-center">Login</h2>
                    {message && (
                        <div className="form-group text-center m-2">
                            <div className="alert alert-danger text-red-600" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded"
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input className="w-full border border-gray-400 p-2 rounded"
                                id="password"
                                type={isPasswordVisible ? 'text' : 'password'}
                                name="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                            <span className="absolute right-0 mt-2 mr-2">
                                <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye}
                                    onClick={togglePasswordVisibility}
                                />
                            </span>
                        </div>
                    </div>
                    {isLoading ? (
                        <button
                            className="bg-gray-400 hover:bg-gray-400 cursor-not-allowed w-full text-white font-medium py-2 px-4 rounded"
                            type="submit"
                            disabled={true}
                        >
                            Mohon tunggu.....
                        </button>
                    ) : (
                        <button
                            className={`bg-blue-500 hover:bg-blue-700 w-full text-white font-medium py-2 px-4 rounded ${isButtonDisabled ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' : ''}`}
                            type="submit"
                            disabled={isButtonDisabled}
                        >
                            Login
                        </button>
                    )}

                    <div className="text-center mt-4">
                        <p>Don't have an account? <Link className="text-blue-500" to="/register">Register here</Link></p>
                    </div>
                </form>

            </div>
        </div>

    );
}