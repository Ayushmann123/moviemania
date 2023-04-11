import React, { useCallback, useEffect } from "react";
import logo from "../Css/Nlogo.png";
import "../Css/navbarCss.css";

import { useState } from "react";
import { useContext } from "react";
import ApiCallContext from "../Context/ApiCall/ApiCallContext";
import {
  BrowserRouter,
  Link,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import SearchResults from "./SearchResults";

const Navbar = () => {
  const { query, setQuery } = useContext(ApiCallContext);
  // console.log(query)
  // const [query, setQuery] = useState("hacker");
  // const navigate = useNavigate();
  // const [homeOpen, setHomeOpen] = useState(true);
  // console.log(homeOpen + " 1st ")

  const navigate = useNavigate(); // <-- add this line
  const element = document.getElementById("query");

  function btnClick() {
// const [movies, setMovies] = useState([]);


setTimeout(() => {
  // navigate("/page");

  element.className = "input-expand";

}, 0);

   

  }

  useEffect(() => {
    if (query.trim().length > 0 ) {

      navigate("/page");

      const element = document.getElementById("query");
      element.className = "input-expand";
   
      const handleEscKey = (event) => {
        if (event.keyCode === 27) {
          const element = document.getElementById("query");
          element.className = "input";
          navigate("/home");
        }
      };
 

      document.addEventListener("keydown", handleEscKey);
    } 
    else {
      const element = document.getElementById("query");
      element.className = "input";
      navigate("/home");
    }
  }, [query]);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27) {
        const element = document.getElementById("query");
        element.className = "input";
        navigate("/home");
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <div className="div">
      <ul className="nav">
        <div className="logo-image">
          <img src={logo} className="img-fluid" />
        </div>
        <li className="nav-item">
          <Link className="nav-link " to="/home">
            Home
          </Link>
        </li>

        <div className="searchCont">
          <form id="form" onSubmit={(e) => e.preventDefault()}>
            <input
              className={""}
              type="search"
              id="query"
              onClick={btnClick}
              onChange={(e) => setQuery(e.target.value)}
              // {(e) => setQuery(e.target.value)}
              value={query}
              name=""
              placeholder="Search..."
            />
          </form>
          {/* <div className="button-search-div"  >
            <button className="button-search"  id="btn-search"  >
              Search
            </button>
          </div> */}
        </div>
      </ul>
    </div>
  );
  // function handleOnChange() {

  //   // {(e) => setQuery(e.target.value)}
  //   navigate('/SearchResults');
  // }
};

export default Navbar;
