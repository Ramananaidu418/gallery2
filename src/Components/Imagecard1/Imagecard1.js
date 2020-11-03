import React from "react";
import "./Imagecard1.css";
// import img1 from "../../Images/img1.jpg"

import img1 from "../../Images/img1.jpg"

const Imagecard1 = (props) => {

    return(
      <div className ="card">
      <div className="Imagecard1">
      <img src={props.imgsrc}></img>

      </div>   
      <div className = "viewsContainer">
          <p>Views:{Math.round(Math.random()*2500)}</p>
    <p>Date:{Math.round(Math.random()*25)}-oct-20</p>
      </div>
        
      </div>
    
    );
    };
    export default Imagecard1;