import axios from 'axios';
import { API_URL } from '../utils/BaseUrl';

class AuthServices {
    register = async (name, email, password, c_password) => {
        return axios.post(API_URL + "/register", {
            name,
            email,
            password,
            c_password
        })
    }

    login = async (email, password) => {
        return axios.post(API_URL + "/login", {
            email,
            password
        }).then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data;
        })
    }

    currentUser = async () => {
        return axios.post(API_URL + "/current-user").then((response) => {
            return response.data;

        })
    }

    logout = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = user.accessToken
        return axios.post(API_URL + "/logout", {
            token
        }).then((response) => {
            localStorage.removeItem("user");
            return response.data;
        })
    }
}

export default new AuthServices();