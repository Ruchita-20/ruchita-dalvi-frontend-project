import React from "react";
import Card from "./Card";
import Img1 from "./images/1.jpg";
import Img2 from "./images/2.png";
import MultiCards from './MultiCards';
export default function Projects() {
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col-auto">
          <div className="d-flex flex-column mb-3">
            <Card pic={Img1} title="Roboto Landing page" /><br></br><br></br>
            <Card pic={Img2} title="Groteck Website" />
          </div>
        </div>
        <div className="col">
          <div className="d-flex flex-column mb-3 align-items-start">
            <ul><li style={{color:'white'}}>Featured Works</li></ul>
            <div className="p-2"><h4 style={{color:'white', textAlign:'left'}}>Take a look at<br></br> our projects</h4></div>
            <MultiCards pic={Img1} title="Poppin App Design"/><br></br><br></br>
            <MultiCards pic={Img1} title="Helvatica Branding"/>
          </div>
        </div>
      </div>
    </div>
  );
}
