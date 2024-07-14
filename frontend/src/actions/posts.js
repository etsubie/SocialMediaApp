import * as api from "../api/index";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data.posts });
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPost(post)
    dispatch({type: 'CREATE', payload: data})
  } catch (error) {
    console.log({message: error})
  }
}