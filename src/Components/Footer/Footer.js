import React from "react";
import "./Footer.css";
import Links from "../Footerlinks/Footerlinks.js";

import Footericons from "../Footericons/Footericons.js";

const Footer = () => {

    return(
      <div className ="footer">
      <div className ="about2">
          <h2> About Catalog-Z</h2>
          
          <p>Catalog-Z is free Bootstrap 5 Alpha 2 HTML Template for video and photo websites. 
            You can freely use this TemplateMo layout for a front-end integration with any kind of CMS website.</p>
          
      </div>
      <Links/>
      <Footericons/>
      {/* <div className ="links">
          <h2>Our Links</h2>
          
          <p>Advertise</p>
          <p>Support</p>
          <p>Our company</p>
          <p>Contact</p>
          
      </div> */}
      {/* <div className ="symbols-wrapper">
   <div className="symbols">
     
   <div className="btn2"><i class="fa fa-facebook-official"></i></div> 
   <div className="btn2"><i class="fa fa-instagram"></i></div>
   <div className="btn2"><i class="fa fa-linkedin-square"></i></div> 
   <div className="btn2"><i class="fa fa-pinterest"></i></div>   
   </div>
   <div className="policy">
    <p>terms of Use</p>
    <p>Private Policy</p>   
   </div>
      </div> */}
      </div>
    
    );
    };
    export default Footer;