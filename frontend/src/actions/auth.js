import * as api from "../api/index";
import { AUTH } from "../constants/actionTypes";
import { toast } from 'react-toastify';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    toast.error(error.response.data)
    console.log(error);
  }   
};
export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    navigate("/");
    console.log(data)
  } catch (error) {
    console.log(error);
  }
};
