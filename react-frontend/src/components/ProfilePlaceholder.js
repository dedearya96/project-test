import React from "react";

function ProfilePlaceholder() {
    return (
        <div className="max-w-sm animate-pulse rounded shadow-md">
            <div className="px-4 py-4">
                <div className="font-bold text-md mb-2 w-full"><div className="h-4 w-48 rounded bg-gray-100"></div></div>
                <div className="text-gray-500 text-base"><div className="h-4 w-48 rounded bg-gray-100"></div></div>
                <div className="text-gray-500 text-base mt-1"><div className="h-4 w-48 rounded bg-gray-100"></div></div>
                <div className="text-gray-500 text-base mt-1"><div className="h-4 w-48 rounded bg-gray-100"></div></div>
            </div>
            <div className="flex justify-center m-4 p-4">
                <button className="bg-gray-100 text-white py-2 px-4 mr-2 h-16 w-20"></button>
                <button className="bg-gray-100 text-white py-2 px-4 mr-2 h-16 w-20"></button>
                <button className="bg-gray-100 text-white py-2 px-4 mr-2 h-16 w-20"></button>
                <button className="bg-gray-100 text-white py-2 px-4 mr-2 h-16 w-20"></button>
            </div>
        </div>
    );
}

export default ProfilePlaceholder;