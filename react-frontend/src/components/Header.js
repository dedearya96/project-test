import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <header class="bg-white text-white flex justify-between items-center p-4 border-b border-gray-200">
            <div>
                <h1 class="text-xl font-bold text-black">APP</h1>
            </div>
            <div class="flex items-center">
                <nav class="mr-4">
                    <ul class="flex">

                    </ul>
                </nav>
                <div className="relative">
                    <button className="flex items-center text-black text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faUser}
                        />
                    </button>
                    {menuIsOpen && (
                        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-500 hover:text-white">Profile</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-500 hover:text-white">Logout</a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}