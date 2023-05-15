import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { retrieveUsers } from "../../actions/users/users";
import UsersList from "../../components/UsersList";
import UsersPlaceholder from "../../components/UsersPlaceholder";
import { Navigate } from "react-router-dom";

export default function HomePage() {
    const users = useSelector(state => state.users);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveUsers());
    }, [dispatch]);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header />
            <div className="container w-full flex flex-col items-center mt-2">
                {users.isLoading ? (
                    <UsersPlaceholder />
                ) : (
                    <UsersList users={users.usersList} />
                )}

            </div>

        </div>

    );
}