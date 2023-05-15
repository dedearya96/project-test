import React from "react";

function UsersPlaceholder() {
    const rows = Array(8).fill().map((_, i) => (
        <tr key={i}>
            <td className="border px-4 py-2">
                <div className="h-8 w-28 rounded bg-gray-100"></div>
            </td>
            <td className="border px-4 py-2">
                <div className="h-8 w-28 rounded bg-gray-100"></div>
            </td>
            <td className="border px-4 py-2">
                <div className="h-8 w-28 rounded bg-gray-100"></div>
            </td>
            <td className="border px-4 py-2">
                <div className="h-8 w-28 rounded bg-gray-100"></div>
            </td>
        </tr>
    ));
    return (
        <table className='table-auto animate-pulse border-collapse'>
            <thead>
                <tr className="bg-white">
                    <th className="border px-4 py-2 "><div className="h-12 w-40 bg-gray-100 rounded"></div></th>
                    <th className="border px-4 py-2 "><div className="h-12 w-40 bg-gray-100 rounded"></div></th>
                    <th className="border px-4 py-2 "><div className="h-12 w-40 bg-gray-100 rounded"></div></th>
                    <th className="border px-4 py-2 "><div className="h-12 w-40 bg-gray-100 rounded"></div></th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

export default UsersPlaceholder;