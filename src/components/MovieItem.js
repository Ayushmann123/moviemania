import React, { useEffect, useState } from "react";

import "../Css/CardStyle.css";
import Popupbox from "./Popupbox";
//  import "CardStyle.css"

const MovieItem = (props) => {
  const Img_Api = "https://image.tmdb.org/t/p/w500/";

  const { poster_path, overview, title, vote_average, id,genre_ids } = props;

  const [OpenModal, setOpenModal] = useState(false);

 

  const openModal = async () => {
    setOpenModal(true);
  };

  
  // console.log(poster_path);
  return (
    <div className="containerr ">
      <img
        onClick={openModal}        src={`${Img_Api}${poster_path}`}        alt="Movie details Missing"        className="img"
      />
      {OpenModal && (
        <Popupbox
          OpenModal={OpenModal}
          setOpenModal={setOpenModal}
          overview={overview}
          title={title}
          vote_average={vote_average}
          id={id}
          genre_id={genre_ids}
          poster_path={poster_path}

         
        />
      )}
    </div>
  );
};

export default MovieItem;
