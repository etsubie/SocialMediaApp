import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost } from "../actions/posts";

const Post = ({ post,setCurId }) => {
  const dispatch = useDispatch()

  return (
    <div className="w-80 shadow-md shadow-slate-700 rounded-lg h-[400px] flex flex-col">
      <img src={post.file} alt="img" className="w-full h-60 rounded-t-lg" />
      <div className="p-3">
        <div className="relative top-[-230px] text-white text-xl grid grid-flow-col justify-between">
          <div className="grid grid-flow-row">
            <span>{post.creator}</span>
            <span>{moment(post.createdAt).fromNow()}</span>
          </div>
          <MoreHorizIcon className="cursor-pointer" onClick={() => setCurId(post._id)}/>
        </div>
        <span className="text-xl text-gray-600">{post.tags}</span>
        <span className="text-2xl font-medium">{post.message}</span>
        <div className="flex justify-between">
          <div>
            <ThumbUpAltIcon className="cursor-pointer text-blue-700" />
            <span className="ml-1 text-xl">likes</span>
          </div>
          <DeleteIcon className="cursor-pointer text-blue-700" onClick={() => dispatch(deletePost(post._id))}/>
        </div>
      </div>
    </div>
  );
};

export default Post;
