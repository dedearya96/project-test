import axios from 'axios';
import { API_URL } from '../utils/BaseUrl';
import AuthHeader from '../utils/AuthHeader';


class UsersServices {
    getAllUser = async () => {
        return axios.get(API_URL + "/all-users", {
            headers: AuthHeader()
        }).then((response) => {
            return response.data;
        })
    }

    changeEmail = async (email) => {

    }

    changePassword = async (old_password, new_password, confirmation_new_password) => {

    }

    updateProfile = async (name) => {

    }

    deleteAccount = async () => {

    }
}

export default new UsersServices();