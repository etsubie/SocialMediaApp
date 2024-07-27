import express from 'express'
import { createPost, deletePost, fechPosts, likePost, updatePost } from '../controllers/post.js'
import auth from '../middleware/auth.js'

const postRouter = express.Router()

postRouter.get('/', fechPosts)
postRouter.post('/create', auth, createPost)
postRouter.patch('/:id', auth, updatePost)
postRouter.delete('/:id', auth, deletePost)
postRouter.patch('/:id/like', auth, likePost)

export default postRouter