import React, { useState } from "react";
import Headers from "./header/Headers";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import { useDispatch } from "react-redux";
import { setAuthentication } from "../feautres/AuthSlice";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInputValue, setIsInputValue] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setIsInputValue({ ...isInputValue, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthentication(true));
    navigate('/')
  };

  return (
    <>
      <Headers />
      <br />
      <form action="">
        <input
          type="text"
          name="email"
          value={isInputValue.email}
          placeholder="email"
          onChange={handlechange}
        />
        <input
          type="text"
          name="password"
          value={isInputValue.password}
          placeholder="password"
          onChange={handlechange}
        />
        <button onClick={handlesubmit}>save</button>
      </form>
    </>
  );
};

export default Registration;
