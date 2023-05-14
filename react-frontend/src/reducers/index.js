import { combineReducers } from "redux";
import auth from "./auth/auth";
import message from "./auth/message";
import users from "./users/users";

export default combineReducers({
    auth,
    message,
    users
})