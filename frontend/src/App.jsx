import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Form from "./components/Form";
import Auth from "./components/Auth";
import Posts from "./components/Posts";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <BrowserRouter>
        <Appbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/create" element={<Form />} />
          <Route path="/:id" element={<Form />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
