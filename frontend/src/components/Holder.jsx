import React, { useState } from "react";
import Posts from "./Posts";
import Form from "./Form";

const Holder = () => {
    const [curId, setCurId] = useState(null)

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between m-4">
      <Posts setCurId={setCurId}/>
      <Form curId={curId} setCurId={setCurId}/>
    </div>
  );
};

export default Holder;
