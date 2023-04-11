import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApiCallState from "../Context/ApiCall/ApiCallState";
import MainPage from "./MainPage";
import OpeningPage from "./OpeningPage";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;

    const response = await fetch("http://localhost:3000/api/auth/createUser", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        // authToken:
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwYmNlNmRlOTVlNjljNmQ5YzQ1NjcyIn0sImlhdCI6MTY3ODQ5NTM2MH0.put-xWySnH-_Zk0K48G4Az605F4DqgaYvJMyczWwZRY",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      // navigate("/");
      alert("sign up Successful");
    } else {
      // props.showAlert("invalid credentials", "danger")
      alert("sign up Failed");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="username">Username:</label>
        <input
          type="text"
          onChange={onChange}
          id="username"
          name="username"
          required
        />

        <label for="email">Email:</label>
        <input
          type="email"
          onChange={onChange}
          id="email"
          name="email"
          required
        />

        <label for="password">Password:</label>
        <input
          type="password"
          onChange={onChange}
          id="password"
          name="password"
          required
        />
        {/* 
  <label for="confirm-password">Confirm Password:</label>
  <input type="password" id="confirm-password" name="confirm-password" required/> */}

        <input type="submit" value="Sign up" />
      </form>
    </>
  );
};

export default SignUpPage;
