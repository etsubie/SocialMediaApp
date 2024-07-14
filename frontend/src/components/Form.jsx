import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { addPost } from "../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    tags: "",
    message: "",
    file: "",
  });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setPostData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const Clear = () => {
    setPostData({ creator: "", title: "", tags: "", message: "", file: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(postData));
    Clear();
    console.log(postData);
  };

  return (
    <div className="grid gap-5 justify-items-center grid-flow-row shadow-md shadow-slate-400 p-4 mt-4 h-1/3 ">
      <form className="w-full md:w-[350px]" onSubmit={handleSubmit}>
        <div className="grid gap-5 justify-items-center grid-flow-row">
          <h4 className="text-2xl">Creating a Memory</h4>
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
              value={postData.file}
              onDone={({base64}) => setPostData({ ...postData, file: base64 })}
            />
          </div>
          <button className="w-full bg-blue-700 p-2 text-white text-[17px]">
            submit
          </button>
          
        </div>
        
      </form>
      <button className="w-full bg-red-700 text-white p-1 text-[17px]" onClick={Clear}>
            clear
          </button>
    </div>
  );
};

export default Form;
