import React from "react";
import Navigation from "../components/Navigation";
import StudentPicture from "../images/students-hanging-out.jpeg";
import CampusPicture from "../images/berry-college-historic-campus-at-twilight-royalty-free-image-1652127954.jpeg";

function Home() {
  return (
    <div>
      <Navigation />
      <div className="student-div">
        <h1 className="item-name-home">Connect with other students and discover your campus community!</h1>
        <img className="student-img" src={StudentPicture} alt="group of college students hanging out" />
      </div>
      <div className="campus-div">
        <img className="campus-img" src={CampusPicture} alt="group of college students hanging out" />
        <h1 className="item-name-home">Explore the power of student connections!</h1>
      </div>
    </div>
  );
}

export default Home;
