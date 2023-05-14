import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Modal({ children, onClose }) {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-4">{children}</div>
            <button
                onClick={onClose}
                className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900"
            >
            </button>
        </div>
    );
}

export default Modal;
