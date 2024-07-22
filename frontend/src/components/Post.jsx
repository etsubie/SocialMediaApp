import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../actions/posts";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [likeCount, setLikeCount] = useState(post.likeCount);

  const handleEdit = (id) => {
    navigate(`/${id}`);
  };

  const handleLike = (id) => {
    dispatch(likePost(id));
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="flex flex-col w-56 md:w-72 shadow-md shadow-slate-700 rounded-lg h-[400px]">
      <img src={post.file} alt="img" className="w-full h-52 rounded-t-lg" />
      <div className="p-3">
        <div className="relative top-[-205px] text-white text-xl grid grid-flow-col justify-between">
          <div className="grid grid-flow-row">
            <span>{post.creator}</span>
            <span>{moment(post.createdAt).fromNow()}</span>
          </div>
          <MoreHorizIcon
            className="cursor-pointer"
            onClick={() => handleEdit(post._id)}
          />
        </div>
        <div className="flex flex-col relative top-[-55px]">
          <span className=" text-gray-400">{post.tags.map((tag) => `#${tag}`)}</span>
          <span className="text-2xl mt-2 mb-2 font-medium">{post.title}</span>
          <span className="text-xl text-gray-600 ">{post.message}</span>
          <div className="flex justify-between">
            <div onClick={() => handleLike(post._id)}>
              <ThumbUpAltIcon className="cursor-pointer text-blue-700" />
              <span className="ml-1 text-xl">{likeCount}&nbsp;likes</span>
            </div>
            <DeleteIcon
              className="cursor-pointer text-blue-700"
              onClick={() => dispatch(deletePost(post._id))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
