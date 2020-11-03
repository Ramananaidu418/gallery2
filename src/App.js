import React,{useState,useEffect} from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar.js";
import Searchbar from "./Components/Searchbar/Searchbar.js";
import Body from "./Components/Body/Body.js";
// import Imagecard1 from "./Components/Imagecard1/Imagecard1.js";
// import Button from "./Components/Button/Button.js";
import Footer from "./Components/Footer/Footer.js";

const App = () => {
  const [pagenum,setPagenum] = useState(1)
  const [apiUrls,setApiurls] = useState([])
  const [searchInput,setSearchInput] = useState("")
  const [formSubmit,setFormsubmit] = useState("")

  useEffect(()=>{
    console.log("useEffect");
    axios.get(`https://api.unsplash.com/search/photos?page=${pagenum}&query=${searchInput}&client_id=1KtrEPHbirc3cudd23AHWlqtAr0jcpAVaWBPdOi9kKc`)
    .then((res)=>{
      let listUrls = [];
      res.data.results.map((per)=>{
        listUrls.push(per.urls.small) 
        setApiurls(listUrls)
      });
    })
  },[pagenum,formSubmit])

  const searchInputChange=(e)=>{
    setSearchInput(e.target.value)
  }
  const searchInputSubmit=(e)=>{
    e.preventDefault();
    setFormsubmit(searchInput)
  }
  const changePagenum=(per)=>{
    // e.preventDefault();
    setPagenum(per)
  }

return(
  <div className ="container">
    <Navbar/>
    <Searchbar searchInputSubmit={searchInputSubmit} searchInput={searchInput} searchInputChange={searchInputChange}/>
    <Body pagenum={pagenum} changePagenum={changePagenum} apiUrls={apiUrls} />
  </div>

);
};
export default App;