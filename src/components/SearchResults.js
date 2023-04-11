import React from 'react'
import LargeImage from './LargeImage'
import Navbar from './Navbar'

import "../Css/SearchedResults.css";
import MovieItem from './MovieItem';
import ApiCallContext from '../Context/ApiCall/ApiCallContext';
import { useContext } from 'react';
const SearchResults = () => {
    document.body.style.backgroundColor = "black";
    const { Popular,popular, TopRated, NowPlaying, upcoming , action,animation,documentry,horror} = useContext(ApiCallContext);


    const [movies, setMovies] = Popular;


    
    // const [TopMovies, setTopMovies] = TopRated;
    // const [nowPlaying, setNowPlaying] = NowPlaying;
    // const [upComing, setUpcoming] = upcoming;
    // const [Action, SetAction]=action;
    // const [Animation,SetAnimation] = animation;
    // const[Documentry,SetDocumentry] = documentry;
    // const [Horror,SetHorror] = horror
  return (
    <>
      <Navbar/>

      <span>
        <h2 className="headings">Results</h2>
      </span>
      <div className="SearchedItems">
        {movies.map((moviesReq) => (
          <MovieItem key={moviesReq.id} {...moviesReq} />
        ))}
      </div>

    </>
  )
}

export default SearchResults
