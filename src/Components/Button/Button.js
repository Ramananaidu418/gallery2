import React from "react";
import "./Button.css";


const Button = (props) => {
  // let customClass
    return(
      <div className ="button-wrap">
      <button onClick = {props.PreviousMethod} className="prevbtn">Previous</button>  
      <div className = "btnHolder">
      <div className={props.pagenum === 1?"btn btn1":"btn"}>1</div>
      <div className={props.pagenum === 2?"btn btn1":"btn"}>2</div>    
      <div className={props.pagenum === 3?"btn btn1":"btn"}>3</div>    
      <div className={props.pagenum === 4?"btn btn1":"btn"}>4</div>
      </div>
      <button onClick = {props.nextMethod} class="nextbtn">Next page</button>        
      </div>
    
    );
    };
    export default Button;