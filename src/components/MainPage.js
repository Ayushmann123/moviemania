import React, { useEffect, useState } from "react";
import LargeImage from "./LargeImage";
import MovieItem from "./MovieItem";
// import "../Css/MainPage.css"

import "../Css/ApiState.css";
import { useContext } from "react";
import ApiCallState from "../Context/ApiCall/ApiCallState";
import ApiCallContext from "../Context/ApiCall/ApiCallContext.js";
import { render } from "@testing-library/react";
import Footer from "./Footer.js";
import Navbar from "./Navbar";
// import Footer from "./Footer.html"
const MainPage = () => {
  // console.log(movies)
  


  const { popular, TopRated, NowPlaying, upcoming , action,animation,documentry,horror} = useContext(ApiCallContext);

  // const [Popular, setPopular] = Popular;

  const [movies, setMovies] = popular;
  const [TopMovies, setTopMovies] = TopRated;
  const [nowPlaying, setNowPlaying] = NowPlaying;
  const [upComing, setUpcoming] = upcoming;
  const [Action, SetAction]=action;
  const [Animation,SetAnimation] = animation;
  const[Documentry,SetDocumentry] = documentry;
  const [Horror,SetHorror] = horror
  document.body.style.backgroundColor = "black";


  
  return (
    <>
<Navbar/>
      <LargeImage />

      <span>
        <h2 className="headings">Popular</h2>
      </span>
      <div className="items">
        {movies.map((moviesReq) => (
          <MovieItem key={moviesReq.id} {...moviesReq} />
        ))}
      </div>
      <span>
        <h2 className="headings">Top Movies</h2>
      </span>
      <div className="items">
        {TopMovies.map((moviesReq) => (
          <MovieItem key={moviesReq.id} {...moviesReq} />
        ))}
      </div>
      <span>
        <h2 className="headings">Now Playing</h2>
      </span>
      <div className="items">
        {nowPlaying.map((moviesReq) => (
          <MovieItem key={moviesReq.id} {...moviesReq} />
        ))}
      </div>
      <span>
        <h2 className="headings">Upcoming</h2>
      </span>
      <div className="items">
        {upComing.map((moviesReq) => (
          <MovieItem key={moviesReq.id} {...moviesReq} />
        ))}
      </div>

      <span>
        <h2 className="headings">Action Movies</h2>
      </span>
      <div className="items">
        {Action.map((moviesReq) => (
          <MovieItem key={moviesReq.id} {...moviesReq} />
        ))}
      </div>


      <span>
        <h2 className="headings">Animation Movies</h2>
      </span>
      <div className="items">
        {Animation.map((moviesReq) => (
          <MovieItem key={moviesReq.id} {...moviesReq} />
        ))}
      </div>



      <span>
        <h2 className="headings">Documentry Movies</h2>
      </span>
      <div className="items">
        {Documentry.map((moviesReq) => (
          <MovieItem key={moviesReq.id} {...moviesReq} />
          
        ))}
      </div>


      <span>
        <h2 className="headings">Horror Movies</h2>
      </span>
      <div className="items">
        {Horror.map((moviesReq) => (
          <MovieItem key={moviesReq.id} {...moviesReq} />
        ))}
      </div>

<Footer/>

      {/* </div> */}
    </>
  );
};

export default MainPage;
