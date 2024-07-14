import React from "react";
import memories from "../images/memories.png";

const Appbar = () => {
  return (
    <div className="grid grid-flow-col shadow-slate-400 shadow-lg">
      <div className="flex justify-center">
        <div className="text-blue-400 text-[50px]">
          <span>Memories</span>
        </div>
        <div className="w-16 ml-2">
          <img src={memories} alt="memories" />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
