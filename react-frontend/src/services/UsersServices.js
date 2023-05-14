import axios from 'axios';
import { API_URL } from '../utils/BaseUrl';
import AuthHeader from '../utils/AuthHeader';


class UsersServices {

    getAllUser = async () => {
        return axios.get(API_URL + "/all-users", {
            headers: AuthHeader()
        });
    }

    changeEmail = async (email) => {
        return axios.post(API_URL + "/change-email", { email }, {
            headers: AuthHeader()
        });
    }

    changePassword = async (old_password, new_password, new_password_confirmation) => {
        return axios.post(API_URL + "/change-password", { old_password, new_password, new_password_confirmation }, {
            headers: AuthHeader()
        });
    }

    updateProfile = async (name) => {
        return axios.post(API_URL + "/user-update", { name }, {
            headers: AuthHeader()
        });
    }

    deleteAccount = async () => {
        return axios.get(API_URL + "/delete-account", {
            headers: AuthHeader()
        });
    }
}

export default new UsersServices();