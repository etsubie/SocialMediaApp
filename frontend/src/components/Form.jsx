import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { addPost, updatePost } from "../actions/posts";

const Form = ({ curId, setCurId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    tags: "",
    message: "",
    file: "",
  });

  const dispatch = useDispatch();
  const post = useSelector((state) => curId ? state.posts.posts.find((p) => p._id === curId) : null);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const onChange = (e) => {
    setPostData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clear = () => {
    setPostData({ creator: "", title: "", tags: "", message: "", file: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (curId) {
      dispatch(updatePost(curId, postData));
    } else {
      dispatch(addPost(postData));
    }
    clear();
    setCurId(null)
  };

  return (
    <div className="grid gap-5 justify-items-center grid-flow-row shadow-md shadow-slate-400 p-4 mt-4 h-1/3">
      <form className="w-full md:w-[350px]" onSubmit={handleSubmit}>
        <div className="grid gap-5 justify-items-center grid-flow-row">
          <h4 className="text-2xl">{curId ? `Editing a Memory` : `Creating a Memory`}</h4>
          <input
            type="text"
            name="creator"
            placeholder="Creator"
            className="input"
            value={postData.creator}
            onChange={onChange}
          />
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
            onChange={onChange}
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
  );
};

export default Form;
