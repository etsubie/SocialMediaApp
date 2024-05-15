import express from 'express'
import { createPost, deletePost, fechPost, fechPosts, updatePost } from '../controllers/post.js'

const postRouter = express.Router()

postRouter.get('/', fechPosts)
postRouter.get('/:id', fechPost)
postRouter.post('/add', createPost)
postRouter.patch('/edit/:id', updatePost)
postRouter.delete('/delete/:id', deletePost)

export default postRouter