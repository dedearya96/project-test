import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from "../actions/auth/auth"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal';
import Logo from "../img/logo.png";

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    const handleLogout = () => {
        setShowModal(true);
    };

    const confirmLogout = () => {
        setShowModal(false);
        logoutAction();
    };

    const cancelLogout = () => {
        setShowModal(false);
    };

    function logoutAction() {
        dispatch(logout());
        localStorage.removeItem('user');
        toast.success('Logout successfully', {
            position: toast.POSITION.TOP_RIGHT
        });
        navigate('/login');
    }

    return (
        <header className="bg-white text-white flex justify-between items-center p-4 border-b border-gray-200">
            <div>
                <img className="h-8" src={Logo} alt="Logo" />
            </div>
            <div className="flex items-center">
                <nav className="mr-4">
                    <ul className="flex">

                    </ul>
                </nav>
                <div className="relative">
                    <button className="flex items-center text-black text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faUser}
                        />
                    </button>
                    {menuIsOpen && (
                        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                            <Link to="/home" className="block px-4 py-2 text-gray-800 hover:bg-gray-500 hover:text-white">Home</Link>
                            <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-500 hover:text-white">Profile</Link>
                            <a href="#" onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-500 hover:text-white">Logout</a>
                            {showModal && (
                                <Modal onClose={cancelLogout}>
                                    <div className="p-4">
                                        <p className="text-black">Are you sure you want to log out?</p>
                                        <div className="mt-4 flex justify-center">
                                            <button onClick={cancelLogout} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
                                                Cancel
                                            </button>
                                            <button onClick={confirmLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                </Modal>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}