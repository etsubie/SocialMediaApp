import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Form from "./components/Form";
import Holder from "./components/Holder";

const App = () => {
  return (
    <div className="p-5">
      <Appbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Holder />} />
            <Route path="/:id" element={<Form />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
