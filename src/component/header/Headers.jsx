import React from "react";
import "./Headers.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Headers = () => {
  const navigate = useNavigate();
  const authentication = useSelector((store) => store.authentication);

  return (
    <div className="main">
      <div className="logo" onClick={() => navigate("/")}>
        logo
      </div>
      <div className="log-reg">
        {authentication.isAuthenticated && (
          <div onClick={() => navigate("/login")}>login</div>
        )}
        {!authentication.isAuthenticated && (
          <div onClick={() => navigate("/registration")}>Registration</div>
        )}
      </div>
    </div>
  );
};

export default Headers;
