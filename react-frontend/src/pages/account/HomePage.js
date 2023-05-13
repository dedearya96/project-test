import React  from "react";
import Header from "../../components/Header";
export default function HomePage() {
   
    return (
        <div>
            <Header/>
            <div class="container w-full flex flex-col items-center">
                <div class="bg-white p-4 rounded-lg">
                    <ul class="divide-y divide-gray-200">
                        <div class="max-w-sm rounded overflow-hidden shadow-md">
                            <div class="px-4 py-4">
                                <div class="font-bold text-md mb-2">Jane Doe</div>
                                <p class="text-gray-500 text-base">jane.doe@example.com</p>
                            </div>
                        </div>
                        <div class="max-w-sm rounded overflow-hidden shadow-md">
                            <div class="px-4 py-4">
                                <div class="font-bold text-md mb-2">Jane Doe hwihfwihfwifhwif dwdhwdhwjhd</div>
                                <p class="text-gray-500 text-base">jane.doe@example.com</p>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>

        </div>

    );
}