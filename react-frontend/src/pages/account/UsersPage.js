import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, deleteAccount } from "../../actions/users/users";
import { cleareMessage } from "../../actions/auth/message";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Navigate } from "react-router-dom";
import Modal from "../../components/Modal";
import { formatDay } from "../../utils/FormatDay";
import ProfilePlaceholder from "../../components/ProfilePlaceholder";

export default function UsersPage() {
    const dispatch = useDispatch();
    const currentuser = useSelector((state) => state.users);
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(cleareMessage());
        dispatch(getCurrentUser());
    }, [dispatch]);

    const handleDelete = () => {
        setShowModal(true);
    };

    const confirmDelete = () => {
        setShowModal(false);
        deleteAccountAction();
    };

    const cancelDelete = () => {
        setShowModal(false);
    };

    function deleteAccountAction() {
        dispatch(deleteAccount());
        localStorage.removeItem('user');
        toast.success('Delete account successfully', {
            position: toast.POSITION.TOP_RIGHT
        });
        navigate('/login');
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header />
            <ToastContainer />
            <div className="container w-full flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg">
                    <ul className="divide-y divide-gray-200">
                        {currentuser.isLoading ? (
                            <ProfilePlaceholder />
                        ) : currentuser.currentUser && (
                            <div className="max-w-sm rounded shadow-md">
                                <div className="px-4 py-4">
                                    <div className="font-bold text-md mb-2">{currentuser.currentUser.name}</div>
                                    <p className="text-gray-500 text-base">{currentuser.currentUser.id}</p>
                                    <p className="text-gray-500 text-base">{currentuser.currentUser.email}</p>
                                    <p className="text-gray-500 text-base">{formatDay(currentuser.currentUser.created_at)}</p>
                                </div>
                                <div className="flex justify-center m-4 p-4">
                                    <Link to="/update-profile">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mr-2">Edit Profile</button>
                                    </Link>
                                    <Link to="/change-email">
                                        <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 mr-2">Change Email</button>
                                    </Link>
                                    <Link to="/change-password">
                                        <button className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 mr-2">Change Password</button>
                                    </Link>
                                    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4">Delete Account</button>
                                    {showModal && (
                                        <Modal onClose={cancelDelete}>
                                            <div className="p-4">
                                                <p className="text-black">Are you sure you want to delete your account?</p>
                                                <div className="mt-4 flex justify-center">
                                                    <button onClick={cancelDelete} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
                                                        Cancel
                                                    </button>
                                                    <button onClick={confirmDelete} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                                                        Yes
                                                    </button>
                                                </div>
                                            </div>
                                        </Modal>
                                    )}
                                </div>
                            </div>
                        )}

                    </ul>
                </div>

            </div>
        </div>

    );
}