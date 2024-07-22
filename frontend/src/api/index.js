import axios from "axios";

const url = 'http://localhost:5002/posts/'

export const fetchApi = () => axios.get(url)
export const createApi = (post) => axios.post(`${url}/create`, post)
export const updateApi = (id, post) => axios.patch(`${url}/${id}`,post)
export const deleteApi = (id) => axios.delete(`${url}/${id}`)
export const likePost = (id) => axios.patch(`${url}/${id}/like`)