import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signin, signup } from '../actions/auth';
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setFormData({
      firstName: "",
      secondName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (isSignup) {
      if (!formData.firstName) tempErrors.firstName = "First name is required";
      if (!formData.secondName) tempErrors.secondName = "Second name is required";
    }
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters long";
    }
    if (isSignup && formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isSignup) {
        dispatch(signup(formData, navigate));
      } else {
        dispatch(signin(formData, navigate));
      }
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="flex flex-col p-4 items-center mt-9 w-[400px] shadow-md shadow-slate-500 gap-4"
        onSubmit={handleSubmit}
      >
        <LockOutlinedIcon className="bg-pink-700 text-white text-lg p-1 rounded-full" />
        <span className="text-xl">{isSignup ? "Sign Up" : "Sign In"}</span>
        {isSignup && (
          <div className="flex gap-3">
            <input
              value={formData.firstName}
              type="text"
              name="firstName"
              className="input"
              placeholder="First Name *"
              onChange={handleChange}
              autoComplete="given-name"
            />
            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
            <input
              value={formData.secondName}
              type="text"
              name="secondName"
              className="input"
              placeholder="Second Name *"
              onChange={handleChange}
              autoComplete="family-name"
            />
            {errors.secondName && <span className="text-red-500 text-sm">{errors.secondName}</span>}
          </div>
        )}
        <input
          value={formData.email}
          type="email"
          name="email"
          className="input"
          placeholder="Email Address *"
          onChange={handleChange}
          autoComplete="email"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        <input
          value={formData.password}
          type="password"
          name="password"
          className="input"
          placeholder="Password *"
          onChange={handleChange}
          autoComplete="current-password"
        />
        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
        {isSignup && (
          <>
            <input
              value={formData.confirmPassword}
              name="confirmPassword"
              type="password"
              className="input"
              placeholder="Confirm Password *"
              onChange={handleChange}
              autoComplete="new-password"
            />
            {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
          </>
        )}
        <button type="submit" className="bg-blue-600 text-white text-center uppercase w-full p-1 rounded-md">
          {isSignup ? "Sign Up" : "Sign In"}
        </button>
        <button type="button" onClick={switchMode}>
          {isSignup
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
