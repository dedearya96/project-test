import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Header from "../../components/Header";
export default function ChangePassword() {
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleInputChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div>
            <Header />
            <div class="flex flex-col justify-center items-center">
                <form class="bg-white p-6 rounded shadow-md w-full md:w-1/3 mx-auto">
                    <h2 class="text-lg font-medium mb-4 text-center">Change Password</h2>


                    <div class="mb-4">
                        <label class="block text-gray-700 font-medium mb-2" for="password">
                            Old Password
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

                    <div class="mb-4">
                        <label class="block text-gray-700 font-medium mb-2" for="password">
                            New Password
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

                    <div class="mb-4">
                        <label class="block text-gray-700 font-medium mb-2" for="password">
                            Confir Password
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
                        class="bg-blue-500 hover:bg-blue-700 w-full text-white font-medium py-2 px-4 rounded"
                        type="submit"
                    >
                        Change
                    </button>
                </form>
            </div>
        </div>

    );
}