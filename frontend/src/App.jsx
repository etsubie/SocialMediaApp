import React from "react";
import Appbar from "./components/Appbar";
import Form from "./components/Form";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="p-5">
      <Appbar />
      <div className="flex flex-col-reverse md:flex-row justify-between m-4">
        <div className="mt-6">
        <Posts />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default App;
