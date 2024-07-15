import express from 'express'
import { createPost, deletePost, fechPost, fechPosts, updatePost } from '../controllers/post.js'

const postRouter = express.Router()

postRouter.get('/', fechPosts)
postRouter.get('/:id', fechPost)
postRouter.post('/', createPost)
postRouter.patch('/:id', updatePost)
postRouter.delete('/:id', deletePost)

export default postRouter