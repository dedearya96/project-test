import {
    REQUEST_RETRIEVE_USERS,
    RETRIEVE_USERS,
    RETRIEVE_USERS_FAIL,
    CURRENT_USER,
    CURRENT_USER_FAIL,
    CHANGE_EMAIL_SUCCESS,
    CHANGE_EMAIL_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    DELETE_ACCOUNT_SUCCESS,
    DELETE_ACCOUNT_FAIL,
} from "../../actions/users/types";

const initialState = {
    usersList: [],
    isLoading: false,
    currentUser: null,
    changeEmailSuccess: false,
    changePasswordSuccess: false,
    updateProfileSuccess: false,
    deleteAccountSuccess: false,
};

const usersReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case REQUEST_RETRIEVE_USERS:
            return {
                ...state,
                isLoading: true
            };
        case RETRIEVE_USERS:
            return {
                ...state,
                isLoading: false,
                usersList: payload,
            };
        case RETRIEVE_USERS_FAIL:
            return {
                ...state,
                isLoading: false,
                usersList: [],
            };
        case CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        case CURRENT_USER_FAIL:
            return {
                ...state,
                currentUser: null,
            };
        case CHANGE_EMAIL_SUCCESS:
            return {
                ...state,
                changeEmailSuccess: true,
            };
        case CHANGE_EMAIL_FAIL:
            return {
                ...state,
                changeEmailSuccess: false,
            };
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                changePasswordSuccess: true,
            };
        case CHANGE_PASSWORD_FAIL:
            return {
                ...state,
                changePasswordSuccess: false,
            };
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                updateProfileSuccess: true,
            };
        case UPDATE_PROFILE_FAIL:
            return {
                ...state,
                updateProfileSuccess: false,
            };
        case DELETE_ACCOUNT_SUCCESS:
            return {
                ...state,
                deleteAccountSuccess: true,
            };
        case DELETE_ACCOUNT_FAIL:
            return {
                ...state,
                deleteAccountSuccess: false,
            };
        default:
            return state;
    }
};

export default usersReducer;
