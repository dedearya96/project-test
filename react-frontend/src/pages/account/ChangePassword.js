import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../actions/users/users";
import { useNavigate } from "react-router-dom";
import { cleareMessage } from "../../actions/auth/message";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChangePassword() {
    const [oldpassword, setOldPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [confpassword, setConfPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const { message } = useSelector(state => state.message);

    useEffect(() => {
        dispatch(cleareMessage());
    }, [dispatch]);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const isButtonDisabled = oldpassword === '' || newpassword === '' || confpassword === '';

    function changePasswordAction(e) {
        e.preventDefault();
        setIsLoading(true);
        dispatch(changePassword(oldpassword, newpassword, confpassword))
            .then((res) => {
                console.log(res);
                setIsLoading(false);
                navigate("/profile");
                toast.success('Password successfully updated', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }).catch(() => {
                setIsLoading(false);
            })
    }

    return (
        <div>
            <Header />
            <ToastContainer />
            <div className="flex flex-col justify-center items-center">
                <form onSubmit={changePasswordAction} className="bg-white p-6 rounded shadow-md w-full md:w-1/3 mx-auto">
                    <h2 className="text-lg font-medium mb-4 text-center">Change Password</h2>

                    {message && (
                        <div className="form-group text-center m-2">
                            <div className="alert alert-danger text-red-600" role="alert">
                                {message}
                            </div>
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                            Old Password
                        </label>
                        <div className="relative">
                            <input className="w-full border border-gray-400 p-2 rounded"
                                id="old_password"
                                type={isPasswordVisible ? 'text' : 'password'}
                                name="old_password"
                                value={oldpassword}
                                onChange={(event) => setOldPassword(event.target.value)}
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
                            New Password
                        </label>
                        <div className="relative">
                            <input className="w-full border border-gray-400 p-2 rounded"
                                id="new_password"
                                type={isPasswordVisible ? 'text' : 'password'}
                                name="new_password"
                                value={newpassword}
                                onChange={(event) => setNewPassword(event.target.value)}
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
                            Confir Password
                        </label>
                        <div className="relative">
                            <input className="w-full border border-gray-400 p-2 rounded"
                                id="conf_password"
                                type={isPasswordVisible ? 'text' : 'password'}
                                name="conf_password"
                                value={confpassword}
                                onChange={(event) => setConfPassword(event.target.value)}
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
                            Change
                        </button>
                    )}
                </form>
            </div>
        </div>

    );
}