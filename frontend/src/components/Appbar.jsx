import Avatar from "@mui/material/Avatar";
import memories from "../images/memories.png";
import { deepOrange } from "@mui/material/colors";

const Appbar = () => {
  const user = null;

  return (
    <div className="grid grid-flow-col justify-between shadow-slate-400 shadow-lg pl-4 pr-4 items-center w-full">
      <div to="/" className="flex items-center">
          <span className="text-blue-400 text-[50px]">Memories</span>
          <img src={memories} alt="memories" className="w-14 ml-2"/>
      </div>
      <>
        {!user ? (
          <div to="/auth" className="bg-blue-600 p-1 pl-3 pr-3 text-white rounded-md uppercase cursor-pointer">sign in</div>
        ) : (
          <div className="flex items-center justify-around">
            <button className="pointer cursor-pointer">Logout</button>
            <Avatar sx={{ bgcolor: deepOrange[500], cursor: "pointer" }}>
              E
            </Avatar>
          </div>
        )}
      </>
    </div>
  );
};

export default Appbar;
