import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const switchMode = () =>{
    setIsSignup((prevIssignup) => !prevIssignup)
  }
  const handelChange = () => {

  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col p-4 items-center mt-9 w-[400px] shadow-md shadow-slate-500 gap-4">
        <LockOutlinedIcon className="bg-pink-700 text-white text-lg p-1  rounded-full" />
        <span className="text-xl">{isSignup ? "Sign Up" : "Sign In"}</span>
        {isSignup && (
          <div className="flex gap-3">
            <input type="text" name="firstName" className="input" placeholder="First Name *"  onChange={handelChange}/>
            <input type="text" name="secondName" className="input" placeholder="Second Name *" onChange={handelChange} />
          </div>
        )}
        <input type="email" name="email" className="input" placeholder="Email Adrress *" onChange={handelChange}/>
        <input type='password' name="password" className="input" placeholder="Password *" onChange={handelChange}/>
        {isSignup && (
          <input
            type='password'
            className="input"
            placeholder="Confirm Password *"
            onChange={handelChange}
          />
        )}
        <button className="bg-blue-600 text-white text-center uppercase w-full p-1 rounded-md">
          {isSignup ? 'sign up' : 'sign in'}
        </button>
        <button onClick={switchMode}>{isSignup ? 'Already have an account ? Sign In': 'Don`t have an account ? Sign Up'}</button>
      </div>
    </div>
  );
};

export default Auth;
