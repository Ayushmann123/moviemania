import { Link } from "react-router-dom";
import "../Css/Footer.css"
import insta from "../images/insta.jpg"
import fb from "../images/fb.jpg"
import tw from "../images/tw.png"

import yt from "../images/yt.png"

const Footer = () => {
  return (
    <>
 	 <div className="container">

      <div className="row1">
  	 		{/* Social Media links */}
               <a  href="#"><img className="imgs" id="fb" src={fb} /></a>
               <a  href="#"><img className="imgs" id="insta" src={insta} /></a>
               <a  href="#"><img className="imgs" id="tw" src={tw} /></a>
               <a  href="#"><img className="imgs" id="yt" src={yt} /></a>


      </div>

    
  	 	<div className="row2">
  	 		<div className="footer-col">
  	 			<ul>
  	 				<li><a href="#">Audio Description</a></li>
  	 				<li><a href="#">Investor Relation</a></li>
  	 				<li><a href="#">Legal Notices</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<ul>
  	 				<li><a href="#">Help Centre</a></li>
  	 				<li><a href="#">Jobs</a></li>
  	 				<li><a href="#">Cookie Center</a></li>
  	 			
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<ul>
  	 				<li><a href="#">Gift Cards</a></li>
  	 				<li><a href="#">Terms of use</a></li>
  	 				<li><a href="#">Corporate Information</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<ul>
  	 				<li><a href="#">Media Centre</a></li>
  	 				<li><a href="#">Privacy</a></li>
  	 				<li><a href="#">Contact</a></li>
  	 			</ul>
  	 		</div>
  	 	</div>

        <div className="row3">
        <button className="btn-Service-code">Service Code</button>
     
        <span className="Inc">

            © 1997-2023 Netflix, Inc.
        </span>


        </div>
  	 </div>
    </>
  );
};

export default Footer;
