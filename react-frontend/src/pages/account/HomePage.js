import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { retrieveUsers } from "../../actions/users/users";
import UsersList from "../../components/UsersList";

export default function HomePage() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveUsers());
    }, [dispatch]);


    return (
        <div>
            <Header />
            <div className="container w-full flex flex-col items-center mt-2">
                {users.isLoading ? (
                    <p>Loading Data...</p>
                ) : (
                    <UsersList users={users.usersList} />
                )}

            </div>

        </div>

    );
}