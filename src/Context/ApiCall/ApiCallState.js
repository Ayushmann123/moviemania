import react from "react";
import ApiCallContext from "./ApiCallContext";
// import App from "../../App";

import "../../Css/ApiState.css";

import { useEffect, useState } from "react";
import LargeImage from "../../components/LargeImage";
// import App from "../../App";
import MovieItem from "../../components/MovieItem";
import MainPage from "../../components/MainPage";
import Popupbox from "../../components/Popupbox";
import SearchResults from "../../components/SearchResults";

const ApiCallState = (props) => {
  // let {moviess} = App
  // console.log(moviess.results)
  //   const initailMovies = [];
  const [popular, setPopular] = useState([]);

  const [movies, setMovies] = useState([]);
  const [TopMovies, setTopMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  // const [Latest, setLatest] = useState([]);
  const [upComing, setUpcoming] = useState([]);
  const [action, SetAction] = useState([]);
  const [animation, SetAnimation] = useState([]);
  const [documentry, SetDocumentry] = useState([]);
  const [horror, SetHorror] = useState([]);

  const [query, setQuery] = useState("");

  const [page, setPage] = useState(1);

  const FetchPopularMoviesData = async () => {
    fetch(
      // `https://api.themoviedb.org/3/movie/popular?api_key=459ff3f19f6d1e5ee7fc382cf7fab81a&s=${query}`

      `https://api.themoviedb.org/3/movie/popular?api_key=459ff3f19f6d1e5ee7fc382cf7fab81a`
      )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(query);
      });
  };

  const FetchPopularMoviesDataa = async () => {
    fetch(
      // `https://api.themoviedb.org/3/movie/popular?api_key=459ff3f19f6d1e5ee7fc382cf7fab81a&s=${query}`
      // `https://api.themoviedb.org/3/movie/popular?api_key=459ff3f19f6d1e5ee7fc382cf7fab81a&s=${query}`

      `https://api.themoviedb.org/3/search/movie?api_key=459ff3f19f6d1e5ee7fc382cf7fab81a&query=${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPopular(data.results);
      });
  };

  const FetchTopRatedData = async () => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=459ff3f19f6d1e5ee7fc382cf7fab81a&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setTopMovies(data.results);
      });
  };

  const FetchNowPlayingData = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=459ff3f19f6d1e5ee7fc382cf7fab81a&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setNowPlaying(data.results);

        // setMovies((prev) => [...prev, ...data.results]);
      });
  };

  const FetchUpComingData = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=459ff3f19f6d1e5ee7fc382cf7fab81a&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setUpcoming(data.results);
      });
  };

  const FetchActionGenreData = async () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=459ff3f19f6d1e5ee7fc382cf7fab81a&with_genres=28"
    )
      .then((res) => res.json())
      .then((data) => {
        SetAction(data.results);
      });
  };

  const FetchAnimationGenreData = async () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=459ff3f19f6d1e5ee7fc382cf7fab81a&with_genres=16"
    )
      .then((res) => res.json())
      .then((data) => {
        SetAnimation(data.results);
      });
  };

  const FetchDocumentryGenreData = async () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=459ff3f19f6d1e5ee7fc382cf7fab81a&with_genres=99"
    )
      .then((res) => res.json())
      .then((data) => {
        SetDocumentry(data.results);
      });
  };

  const FetchHorrorGenreData = async () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=459ff3f19f6d1e5ee7fc382cf7fab81a&with_genres=27"
    )
      .then((res) => res.json())
      .then((data) => {
        SetHorror(data.results);
        console.log(horror);
      });
  };

  useEffect(() => {
    FetchPopularMoviesData();
    FetchTopRatedData();
    FetchNowPlayingData();
    FetchUpComingData();
    FetchActionGenreData();
    FetchAnimationGenreData();
    FetchDocumentryGenreData();
    FetchHorrorGenreData();
    FetchPopularMoviesDataa();
    // setSearchQuery(query);

    // console.log({ page });
  }, [query]);

  //   const handelInfiniteScroll = async () => {
  //     // console.log("scrollHeight" + document.documentElement.scrollHeight);
  //     // console.log("innerHeight" + window.innerHeight);
  //     // console.log("scrollTop" + document.documentElement.scrollTop);
  //     try {
  //       if (
  //         window.innerHeight + document.documentElement.scrollTop +1 >=
  //         document.documentElement.scrollHeight
  //       ) {
  // console.log("start here")
  //         console.log(window.innerWidth + "innner widht" )
  //         console.log(document.documentElement.scrollLeft  )
  //         console.log(        document.documentElement.scrollWidth
  //             )

  //             console.log("scroll width")
  //             // console.l
  //             console.log("start here")

  //         setTimeout(() => {
  //           setPage((prev) => prev + 1);
  //         }, 1000);
  //       } else {
  //         console.log("start here")
  //         console.log(window.innerWidth + "innner widht" )
  //         console.log(document.documentElement.scrollLeft  )
  //         console.log(        document.documentElement.scrollWidth
  //             )
  //             console.log("start here")

  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handelInfiniteScroll);
  //     return () => window.removeEventListener("scroll", handelInfiniteScroll);
  //   }, []);

  return (
    <>
      {/* console.lo */}
      <ApiCallContext.Provider
        value={{
          popular: [movies, setMovies],
          TopRated: [TopMovies, setTopMovies],
          NowPlaying: [nowPlaying, setNowPlaying],
          upcoming: [upComing, setUpcoming],
          action: [action, SetAction],
          animation: [animation, SetAnimation],
          documentry: [documentry, SetDocumentry],
          horror: [horror, SetHorror],
          Popular:[popular,setPopular],
          
          query,
          setQuery,
        }}
      >
        {/* <MainPage /> */}

        {props.children}
        {/* <Popupbox /> */}
      </ApiCallContext.Provider>

    </>
  );
};

export default ApiCallState;
