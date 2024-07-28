import * as api from "../api/index";
import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchApi();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createApi(post)
    dispatch({type: CREATE, payload: data})
  } catch (error) {
    console.log({message: error})
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const {data} = await api.updateApi(id, post)
    dispatch({type: UPDATE, payload: data})
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deleteApi(id)
    dispatch({type: DELETE, payload: id})
  } catch (error) {
    console.log({message: error})
  }
} 

export const likePost = (id) => async (dispatch) => {
  try {
    const {data} = await api.likePost(id)
    dispatch({type: LIKE, payload: data})
    console.log('Liking post:', id);
  } catch (error) {
    console.log(error)
  }
}