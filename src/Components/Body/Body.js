import React, { useState } from "react";
import "./Body.css";
import Imagecard1 from "../Imagecard1/Imagecard1";
import img2 from "../../Images/img-02.jpg";
import img3 from "../../Images/img-03.jpg";
import img4 from "../../Images/img-04.jpg";
import img5 from "../../Images/img-05.jpg";
import img6 from "../../Images/img-06.jpg";
import img7 from "../../Images/img-07.jpg";
import img8 from "../../Images/img-08.jpg";
import img9 from "../../Images/img-09.jpg";
import img10 from "../../Images/img-10.jpg";
import img11 from "../../Images/img-11.jpg";
import img12 from "../../Images/img-12.jpg";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";

const Body = (props) => {
  // const [pagenum, setPagenum] = useState(0);
  // let imgurls = [
  //   [img8, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12],
  //   [img7, img11, img8, img2, img3, img4, img5, img8, img9, img10, img6, img12],
  //   [img4, img5, img6, img7, img8, img9, img8, img2, img10, img11, img12, img3],
  //   [img7, img11, img8, img2, img3, img4, img5, img8, img9, img10, img6, img12],
   
  // ];
  // let imgurls=props.apiUrls;
  const nextMethod = () => {
    // if (pagenum < 3) {
    //   setPagenum(pagenum + 1);
    // }
    props.changePagenum(props.pagenum+1)
  };
  const PreviousMethod = () => {
    // if (pagenum > 0) {
    //   setPagenum(pagenum - 1);
    // }
    props.changePagenum(props.pagenum-1)

  };
  console.log(props.apiUrls,"//hdsb");
  return (
    <div className="space">
      <div className="emptyspace"></div>
      <div className="latest-photos">
        <h1>Latest Photos</h1>
        <p>Pages 1 of 200</p>
      </div>
      <div className="images">
        {props.apiUrls.map((per) => {
          return <Imagecard1 imgsrc={per} />;
        })}
       </div>
      <Button
      // changePagenum={props.changePagenum}
        nextMethod={nextMethod}
        pagenum={props.pagenum}
        PreviousMethod={PreviousMethod}
      />
      <Footer />
    </div>
  );
};
export default Body;
