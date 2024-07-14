import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../actions/posts'

const Post = () => {
    const dispatch = useDispatch()
    
    useEffect(() =>{
        dispatch(getPosts())
    }, [dispatch])
  return (
    <div>
      post
    </div>
  )
}

export default Post
