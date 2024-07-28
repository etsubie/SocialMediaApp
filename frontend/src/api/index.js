import axios from "axios";

const API = axios.create({baseURL: 'https://socialmediaapp-bm3e.onrender.com/'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const fetchApi = () => API.get('/posts/')
export const createApi = (post) => API.post('/posts/create', post)
export const updateApi = (id, post) => API.patch(`/posts/${id}`,post)
export const deleteApi = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/like`)
export const signIn = (formData) => API.post('/users/signin', formData)
export const signUp = (formData) => API.post('/users/signup', formData)