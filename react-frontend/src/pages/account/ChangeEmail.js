import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail, getCurrentUser } from "../../actions/users/users";
import { Navigate, useNavigate } from "react-router-dom";
import { cleareMessage } from "../../actions/auth/message";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChangeEmail() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, currentUser } = useSelector(state => state.users);
    const { user } = useSelector((state) => state.auth);
    const { message } = useSelector(state => state.message);
    const isButtonDisabled = email === '';

    useEffect(() => {
        dispatch(getCurrentUser());
        dispatch(cleareMessage());
    }, [dispatch]);

    useEffect(() => {
       setEmail(currentUser.email);
    }, [currentUser]);

    function changeEmailAction(e) {
        e.preventDefault();
        dispatch(changeEmail(email))
            .then(() => {
                navigate('/profile');
                toast.success('Email successfully updated', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }).catch((e) => {

            });
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header />
            <ToastContainer />
            <div className="flex flex-col justify-center items-center">
                <form onSubmit={changeEmailAction} className="bg-white p-6 rounded shadow-md w-full md:w-1/3 mx-auto">
                    <h2 className="text-lg font-medium mb-4 text-center">Change Email</h2>
                    {message && (
                        <div className="form-group text-center m-2">
                            <div className="alert alert-danger text-red-600" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full border border-gray-400 p-2 rounded"
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    {isLoading ? (
                        <button
                            className="bg-gray-400 hover:bg-gray-400 cursor-not-allowed w-full text-white font-medium py-2 px-4 rounded"
                            type="button"
                            disabled={true}
                        >
                            Mohon tunggu.....
                        </button>
                    ) : (
                        <button
                            className={`bg-blue-500 hover:bg-blue-700 w-full text-white font-medium py-2 px-4 rounded ${isButtonDisabled ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' : ''}`}
                            type="submit"
                            disabled={isButtonDisabled}
                        >
                            Change
                        </button>
                    )}
                </form>
            </div>
        </div>

    );
}