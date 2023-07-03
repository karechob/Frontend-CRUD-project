import React from "react";
import Navigation from "../components/Navigation";
import StudentPicture from "../images/students-hanging-out.jpeg";
import CampusPicture from "../images/berry-college-historic-campus-at-twilight-royalty-free-image-1652127954.jpeg";

function Home() {
  return (
    <div>
      <Navigation />
      <div className="student-div">
        <img className="student-img" src={StudentPicture} alt="group of college students hanging out" />
      </div>
      <div className="campus-div">
        <img className="campus-img" src={CampusPicture} alt="group of college students hanging out" />
      </div>
    </div>
  );
}

export default Home;
