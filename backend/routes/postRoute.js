import express from 'express'
import { createPost, deletePost, fechPosts, likePost, updatePost } from '../controllers/post.js'

const postRouter = express.Router()

postRouter.get('/', fechPosts)
postRouter.post('/', createPost)
postRouter.patch('/:id', updatePost)
postRouter.delete('/:id', deletePost)
postRouter.patch('/:id/like', likePost)

export default postRouter