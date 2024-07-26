import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Form from "./components/Form";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/create" element={<Form />} />
          <Route path="/:id" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
