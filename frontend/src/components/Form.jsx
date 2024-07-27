import React, { Profiler, useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts, updatePost } from "../actions/posts";
import { useNavigate, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const Form = () => {
  const [postData, setPostData] = useState({
    title: "",
    tags: "",
    message: "",
    file: "",
  });
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const post = useSelector((state) =>
    id ? state.posts.posts.find((p) => p._id === id) : null
  );

  useEffect(() => {
    if (id) dispatch(getPosts());
  }, [id, dispatch]);

  useEffect(() => {
    if (post && id) setPostData(post);
  }, [post, id]);

  const onChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const clear = () => {
    setPostData({ title: "", tags: "", message: "", file: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      console.log('Updating post:', { ...postData, name: user?.result?.name });
      dispatch(updatePost(id, { ...postData, name: user?.result?.name }));
    } else {
      console.log('Adding post:', { ...postData, name: user?.result?.name });
      dispatch(addPost({ ...postData, name: user?.result?.name }));
    }
    clear();
    navigate("/");
  };
  
  if(!user?.result?.name) return (
   <span>please sign in to create and like memories</span> 
  )

  return (
    <>
      <KeyboardBackspaceIcon
        className="text-start cursor-pointer"
        onClick={() => navigate("/")}
      />

      <div className="grid gap-5 w-auto md:w-[450px] justify-center grid-flow-row shadow-md shadow-slate-400 p-4 mt-4 h-1/3">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid gap-5 justify-items-center grid-flow-row">
            <h4 className="text-2xl">
              {id ? `Editing a Memory` : `Creating a Memory`}
            </h4>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="input"
              value={postData.title}
              onChange={onChange}
            />
            <input
              type="text"
              name="message"
              placeholder="Message"
              className="input"
              value={postData.message}
              onChange={onChange}
            />
            <input
              type="text"
              name="tags"
              placeholder="Tags"
              className="input"
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value.split(",") })
              }
            />
            <div className="w-full">
              <FileBase
                name="file"
                onDone={({ base64 }) =>
                  setPostData({ ...postData, file: base64 })
                }
              />
            </div>
            <button className="w-full bg-blue-700 p-2 text-white text-[17px]">
              Submit
            </button>
          </div>
        </form>
        <button
          className="w-full bg-red-700 text-white p-1 text-[17px]"
          onClick={clear}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default Form;
