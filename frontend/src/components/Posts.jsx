import React, { useEffect } from "react";
import Post from "./Post";
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";

const Posts = () => {
  const {posts} = useSelector((state) => state.posts);
  const dispatch = useDispatch()
    
  useEffect(() =>{
      dispatch(getPosts())
  }, [dispatch]);
    return (

    <div>
   {!posts.length ? <CircularProgress/> : (
   <div className="flex gap-6 flex-wrap">
    {posts.map((post) => (
      <div key={post._id}>
        <Post post={post}/>
      </div>
    ))}
   </div>
   )} 
    </div>
  );
};

export default Posts;
