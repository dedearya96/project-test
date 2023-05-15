import React from 'react';
import { formatDay } from "../utils/FormatDay";

function UsersList({ users }) {
    return (users.length === 0 ? (
        <p className='text-center'>No users found</p>
    ) : (
        <table className='table-auto border-collapse'>
            <thead>
                <tr className="bg-gray-100">
                    <th className="border px-4 py-2">Id</th>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Join</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td className="border px-4 py-2">{user.id}</td>
                        <td className="border px-4 py-2">{user.name}</td>
                        <td className="border px-4 py-2">{user.email}</td>
                        <td className="border px-4 py-2">{formatDay(user.created_at)}</td>
                    </tr>
                ))}
            </tbody>
        </table>)
    );
}

export default UsersList;
