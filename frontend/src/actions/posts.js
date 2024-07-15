import * as api from "../api/index";

export const getPostById = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchByIdApi(id);
    dispatch({ type: "FETCH_BY_ID", payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchApi();
    dispatch({ type: "FETCH_ALL", payload: data.posts });
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createApi(post)
    dispatch({type: 'CREATE', payload: data})
  } catch (error) {
    console.log({message: error})
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const {data} = await api.updateApi(id, post)
    dispatch({type: 'UPDATE', payload: data})
  } catch (error) {
    console.log({message: error})
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deleteApi(id)
    dispatch({type: 'DELETE', payload: id})
  } catch (error) {
    console.log({message: error})
  }
} 