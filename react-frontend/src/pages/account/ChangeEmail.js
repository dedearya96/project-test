import React, { useState } from "react";
import Header from "../../components/Header";

export default function ChangeEmail() {
    return (
        <div>
            <Header />
            <div class="flex flex-col justify-center items-center">
                <form class="bg-white p-6 rounded shadow-md w-full md:w-1/3 mx-auto">
                    <h2 class="text-lg font-medium mb-4 text-center">Change Eamil</h2>

                    <div class="mb-4">
                        <label class="block text-gray-700 font-medium mb-2" for="email">
                            Email
                        </label>
                        <input
                            class="w-full border border-gray-400 p-2 rounded"
                            id="email"
                            type="email"
                            name="email"
                            required
                        />
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