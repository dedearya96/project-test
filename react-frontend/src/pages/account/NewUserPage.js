import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthHeader from "../../utils/AuthHeader";

export default function NewUserPage() {
    const [users, setUsers] = useState([]);
    const API_URL = 'http://localhost:8000/api/all-users';

    useEffect(() => {
        getAllUser();
    }, []);

    const getAllUser = () => {
        axios.get(API_URL, {
            headers: AuthHeader(),
        }).then(response => {
            console.log(response.data);
            setUsers(response.data);
        }).catch(errr => {
            console.log(errr);
        })
    }

    return (
        <div className="w-full flex flex-col items-center">
            <div className="mt-2">
                <table className="table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td className=" bordder px-4 py-2">{user.name}</td>
                                <td className=" bordder px-4 py-2">{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}