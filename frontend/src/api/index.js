import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:5002/'})

export const fetchApi = () => API.get('/posts/')
export const createApi = (post) => API.post('/posts/create', post)
export const updateApi = (id, post) => API.patch(`/posts/${id}`,post)
export const deleteApi = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/like`)
