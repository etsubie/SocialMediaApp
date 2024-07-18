import React, { useEffect } from "react";
import Post from "./Post";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";

const Posts = ({ setCurId }) => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <div className=" mt-9 md:mt-4 flex gap-6 flex-wrap justify-center">
          {posts.map((post) => (
            <div key={post._id}>
              <Post post={post} setCurId={setCurId} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
