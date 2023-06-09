import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./userRedux";
import axios from "axios";


export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("https://ecommerce-server-k26h.onrender.com/api/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const register = async (dispatch,user) =>{
    dispatch(registerStart());
    try {
        const res = await axios.post("https://ecommerce-server-k26h.onrender.com/api/auth/register",user);
        dispatch(registerSuccess(res.data));
    } catch (error) {
        dispatch(registerFailure());   
    }
}