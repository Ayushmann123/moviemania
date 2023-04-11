import React, { useEffect, useState } from "react";
import "../Css/Modal.css";
import "../Css/CardStyle.css";

import Sram from "../images/Sram.jpg";
import x from "../images/x.png";
import MovieItem from "./MovieItem";

const Popupbox = (props) => {
  // console.log(poster_path)
  const Img_Api = "https://image.tmdb.org/t/p/w500/";

  function printGenres(array1, array2) {
    const filteredGenres = array1.filter((genre) => array2.includes(genre.id));
    const genreNames = filteredGenres.map((genre) => genre.name);
    return genreNames.join(", ");
  }

  // const [openAgain, setOpenAgain] = useState(false);

  // const OpenAgain = async () => {
  //   setOpenAgain(true);
  // };

  // const openModal = async () => {
  //   setOpenModal(true);
  // };

  const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  const {
    OpenModal,
    setOpenModal,
    overview,
    title,
    vote_average,
    id,
    genre_id,
    poster_path,
  } = props;

  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=459ff3f19f6d1e5ee7fc382cf7fab81a&language=en-US`;
  const recurl = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=459ff3f19f6d1e5ee7fc382cf7fab81a&language=en-US&page=1`;
  const [Cast, setCast] = useState([]);
  const [rec, setRec] = useState([]);

  const FetchCastData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCast(data.cast.slice(0, 5));
        // console.log(genre_id)
        console.log(genre_id[0]);
      });
  };

  const FetchRecommendationData = () => {
    fetch(recurl)
      .then((res) => res.json())
      .then((data) => {
        setRec(data.results);
        // console.log(genre_id)
      });
  };

  const close = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    FetchCastData();
    FetchRecommendationData();
  }, []);

  // const {name} = Cast
  // {Cast.map((actor) => (
  //   <li key={actor.id}>{actor}</li>
  // ))}

  return (
    <>
      <div className="model-wrapper"></div>

      <div className="modal-container">
        <div className="imgContainer">
          <img
            className="img_top"
            src={`${Img_Api}${poster_path}`}
            alt="Movie details Missing"
          />
          <img
            className="cross_btn"
            onClick={close}
            src={x}
            alt="Movie details Missing"
          />

          {/* <button className='cross_btn ' onClick={close}>Close</button> */}
        </div>
        <div className="details">
          <div className="synopsis">
            <span className="title">{title}</span>{" "}
            <p className="rating">`Ratings : {vote_average}`</p>
            <p className="overview">{overview.slice(0, 296)}</p>
          </div>

          <div className="cast">
            <ul className="castlist">
              <ul className="castlist">
                <h6 className="h6">Genres</h6>
                <span>{printGenres(genres, genre_id)}</span>
              </ul>
              <h6 className="h6">Cast</h6>

              {Cast.map((actor) => (
                <li className="listingcast" key={actor.id}>
                  {actor.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="recommendation">
          {/* {movies.map((moviesReq) => (
          <MovieItem key={moviesReq.id} {...moviesReq} />
        ))} */}

          {rec.map((rec) => (
            <li className="" key={rec.id}>
              <div className="cardWtext">
                <MovieItem key={rec.id} {...rec} />

                <h4>{rec.title.slice(0, 20)}</h4>
                <p>{rec.overview.slice(0, 100)}</p>
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Popupbox;
{
  /* <img
                 onClick={openModal}  
                  src={`${Img_Api}${rec.poster_path}`}
                  alt="Movie details Missing"
                  className="img"
                /> */
}
