import React from "react";
import Header from "../../components/Header";
export default function UsersPage() {
    return (
        <div>
            <Header />
            <div class="container w-full flex flex-col items-center">
                <div class="bg-white p-4 rounded-lg">
                    <ul class="divide-y divide-gray-200">
                        <div class="max-w-sm rounded shadow-md">
                            <div class="px-4 py-4">
                                <div class="font-bold text-md mb-2">Jane Doe</div>
                                <p class="text-gray-500 text-base">jane.doe@example.com</p>
                            </div>
                            <div class="flex justify-center m-4 p-4">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mr-2">Edit Profile</button>
                                <button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 mr-2">Change Email</button>
                                <button class="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 mr-2">Change Password</button>
                                <button class="bg-red-500 hover:bg-red-700 text-white py-2 px-4">Delete Account</button>
                            </div>
                        </div>

                    </ul>
                </div>

            </div>
        </div>

    );
}