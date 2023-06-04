import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, updateProfile } from "../../actions/users/users";
import { useNavigate, Navigate } from "react-router-dom";
import { cleareMessage } from "../../actions/auth/message";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateProfile() {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { message } = useSelector(state => state.message);
    const { isLoading, currentUser } = useSelector(state => state.users);
    const { user } = useSelector((state) => state.auth);
    const isButtonDisabled = name === '';

    useEffect(() => {
        dispatch(getCurrentUser());
        dispatch(cleareMessage());
    }, [dispatch]);

    useEffect(() => {
        setName(currentUser.name);
    }, [currentUser]);

    function updateProfileAction(e) {
        e.preventDefault();
        dispatch(updateProfile(name))
            .then(() => {
                navigate('/profile');
                toast.success('Profile successfully updated', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }).catch((e) => {

            });
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header />
            <ToastContainer />
            <div className="flex flex-col justify-center items-center">
                <form onSubmit={updateProfileAction} className="bg-white p-6 rounded shadow-md w-full md:w-1/3 mx-auto">
                    <h2 className="text-lg font-medium mb-4 text-center">Update Profile</h2>
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

                    {isLoading ? (
                        <button
                            className="bg-gray-400 hover:bg-gray-400 cursor-not-allowed w-full text-white font-medium py-2 px-4 rounded"
                            type="button"
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
                            Update
                        </button>
                    )}
                </form>
            </div>
        </div>

    );
}