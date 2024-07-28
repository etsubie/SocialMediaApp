import express from 'express'
import { deleteUser, fechUsers, signin, signup } from '../controllers/auth.js'

const userRouter = express.Router()

userRouter.post('/signin', signin)
userRouter.post('/signup', signup)
userRouter.get('/', fechUsers)
userRouter.delete('/:id', deleteUser)

export default userRouter