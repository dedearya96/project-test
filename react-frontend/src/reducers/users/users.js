import {
    REQUEST_RETRIEVE_USERS,
    RETRIEVE_USERS,
    RETRIEVE_USERS_FAIL,
    REQUEST_CURRENT_USER,
    CURRENT_USER,
    CURRENT_USER_FAIL,
    REQUEST_CHANGE_EMAIL,
    CHANGE_EMAIL_SUCCESS,
    CHANGE_EMAIL_FAIL,
    REQUEST_CHANGE_PASSWORD,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,
    REQUEST_UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    REQUEST_DELETE_ACCOUNT,
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
        case REQUEST_CURRENT_USER:
            return {
                ...state,
                isLoading: true
            }
        case CURRENT_USER:
            return {
                ...state,
                isLoading: false,
                currentUser: payload,
            };
        case CURRENT_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                currentUser: null,
            };
        case REQUEST_CHANGE_EMAIL:
            return {
                ...state,
                isLoading: true,
                changeEmailSuccess: false,
            }
        case CHANGE_EMAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                changeEmailSuccess: true,
            };
        case CHANGE_EMAIL_FAIL:
            return {
                ...state,
                isLoading: false,
                changeEmailSuccess: false,
            };
        case REQUEST_CHANGE_PASSWORD:
            return {
                ...state,
                isLoading: true,
                changePasswordSuccess: false,
            }
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                changePasswordSuccess: true,
            };
        case CHANGE_PASSWORD_FAIL:
            return {
                ...state,
                isLoading: false,
                changePasswordSuccess: false,
            };
        case REQUEST_UPDATE_PROFILE:
            return {
                ...state,
                isLoading: true,
                updateProfileSuccess: false,
            }
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                updateProfileSuccess: true,
            };
        case UPDATE_PROFILE_FAIL:
            return {
                ...state,
                isLoading: false,
                updateProfileSuccess: false,
            };
        case REQUEST_DELETE_ACCOUNT:
            return {
                ...state,
                isLoading: true,
                deleteAccountSuccess: false,
            }
        case DELETE_ACCOUNT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                deleteAccountSuccess: true,
            };
        case DELETE_ACCOUNT_FAIL:
            return {
                ...state,
                isLoading: false,
                deleteAccountSuccess: false,
            };
        default:
            return state;
    }
};

export default usersReducer;
