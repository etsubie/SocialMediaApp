import React from "react";
import Posts from "./Posts";
import Form from "./Form";

const Appp = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between m-4">
      <Posts />
      <Form />
    </div>
  );
};

export default Appp;
