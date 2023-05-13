import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function LoginPage() {
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleInputChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="flex justify-center items-center h-screen w-full md:w-1/3 mx-auto">
            <div className="container">
                <form className="bg-white p-6 rounded shadow-md">
                    <h2 className="text-lg font-medium mb-4 text-center">Login</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" for="email">
                            Email
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded"
                            id="email"
                            type="email"
                            name="email"
                            required
                        />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 font-medium mb-2" for="password">
                            Password
                        </label>
                        <div class="relative">
                            <input class="w-full border border-gray-400 p-2 rounded"
                                id="password"
                                type={isPasswordVisible ? 'text' : 'password'}
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                                required
                            />
                            <span class="absolute right-0 mt-2 mr-2">
                                <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye}
                                    onClick={togglePasswordVisibility}
                                />
                            </span>
                        </div>
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 w-full text-white font-medium py-2 px-4 rounded"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>

    );
}