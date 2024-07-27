import React, { useEffect } from "react";
import Post from "./Post";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const { posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      {!posts.length ? (
        <div className="flex  justify-between">
          <CircularProgress />
          <AddCircleRoundedIcon
            className="cursor-pointer"
            onClick={() => navigate("/create")}
          />
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="flex gap-6 flex-wrap justify-center">
            {posts.map((post) => (
              <div key={post._id}>
                <Post post={post} />
              </div>
            ))}
          </div>
          <AddCircleRoundedIcon
            className="cursor-pointer"
            onClick={() => navigate("/create")}
          />
        </div>
      )}
    </>
  );
};

export default Posts;
