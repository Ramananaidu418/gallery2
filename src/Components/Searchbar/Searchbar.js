import React from "react";
import App from "../../App";
import "./Searchbar.css";
import hero from "../../Images/hero.jpg"
const Searchbar = (props) => {

    return(
      <div className ="searchbar"> 
      <img src={hero}></img>
      <form onSubmit = {(e)=>props.searchInputSubmit(e)} className="bar" action="action_page.php">
      <input onChange = {(e)=>props.searchInputChange(e)} value = {props.searchInput} type="text" placeholder="Search" name="search"></input>
      <button type="submit"><i class="fa fa-search"></i></button>
      </form>
      </div>
    );
    };
    export default Searchbar;
    