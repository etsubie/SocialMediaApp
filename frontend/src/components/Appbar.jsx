import Avatar from "@mui/material/Avatar";
import memories from "../images/memories.png";
import { deepOrange } from "@mui/material/colors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Appbar = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  return (
    <div className="grid grid-flow-col justify-between shadow-slate-400 shadow-lg pl-4 pr-4 items-center w-full">
      <Link to="/" className="flex items-center">
        <span className="text-blue-400 text-[50px]">Memories</span>
        <img src={memories} alt="memories" className="w-14 ml-2" />
      </Link>
      <>
        {!user ? (
          <Link
            to="/auth"
            className="bg-blue-600 p-1 pl-3 pr-3 text-white rounded-md uppercase cursor-pointer"
          >
            sign in
          </Link>
        ) : (
          <div className="flex items-center justify-around">
            <button className="pointer cursor-pointer" onClick={logout}>
              Logout
            </button>
            <Avatar sx={{ bgcolor: deepOrange[500], cursor: "pointer" }}>
              {user?.result?.name.charAt[0]}
            </Avatar>
          </div>
        )}
      </>
    </div>
  );
};

export default Appbar;
