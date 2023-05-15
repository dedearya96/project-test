import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { register } from "../../actions/auth/auth";
import { cleareMessage } from "../../actions/auth/message";
import { useNavigate, Navigate } from "react-router-dom";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [c_password, setCPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const { isLoading } = useSelector(state => state.auth);
    const { user } = useSelector((state) => state.auth);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(cleareMessage());
    }, [dispatch]);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const isButtonDisabled = name === '' || email === '' || password === '';

    if (user) {
        return <Navigate to="/home" />;
    }

    function handleRegister(e) {
        e.preventDefault();
        dispatch(register(name, email, password, c_password))
            .then(() => {
                navigate('/login');
                toast.success('Register successfully', {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
            .catch(() => {

            })
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-full md:w-1/3 mx-auto">
                <h2 className="text-lg font-medium mb-4 text-center">Register</h2>
                {message && (
                        <div className="form-group text-center m-2">
                            <div className="alert alert-danger text-red-600" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full border border-gray-400 p-2 rounded"
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>
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

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                        Confirmation Password
                    </label>
                    <div className="relative">
                        <input className="w-full border border-gray-400 p-2 rounded"
                            id="c_password"
                            type={isPasswordVisible ? 'text' : 'password'}
                            name="c_password"
                            value={c_password}
                            onChange={(event) => setCPassword(event.target.value)}
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
                        className="'bg-gray-400 hover:bg-gray-400 cursor-not-allowed w-full text-white font-medium py-2 px-4 rounded"
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
                        Register
                    </button>
                )}
            </form>
        </div>

    );
}