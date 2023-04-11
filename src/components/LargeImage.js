import React from "react";
import "../Css/LargeContainer.css";
import rrr from "../Css/rrr.mp4";
import "../Css/navbarCss.css";

import Navbar from "./Navbar";

const LargeImage = () => {
  return (
    <>


      <div className="LargeImageContainer">
        <video className="video" src={[rrr]} autoPlay loop muted>
          {" "}
        </video>
        <div className="video-content">
          {/* <Navbar/> */}

          <h1 className="h1"> RRR</h1>
        </div>
      </div>
    </>
  );
};

export default LargeImage;
