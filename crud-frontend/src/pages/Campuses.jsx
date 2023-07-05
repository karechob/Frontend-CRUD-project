import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.actions";
import { Link } from "react-router-dom";

function Campuses() {
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  const dispatch = useDispatch();

  function fetchAllCampuses() {
    console.log("RUNNING DISPATCH FROM FETCHALLCAMPUSES");
    return dispatch(fetchAllCampusesThunk());
  }

  

  useEffect(() => {
    console.log("FETCH ALL CAMPUSES FIRING IN USEEFFECT");
    fetchAllCampuses();
  }, []);


  //DELETE CAMPUS

  //ADD CAMPUS
    //OWN VIEW

  return (
    <div>
      <Navigation />
      <h1 className="campus-page">Campuses</h1>
      {allCampuses.map((campus) => (
        <div key={campus.id}>
          <h2>{campus.name}</h2>
          <img src={campus.image} alt={campus.name} />
          <p>Address: {campus.address}</p>
          <p>Description: {campus.description}</p>
          <Link to={`/campuses/${campus.id}`}>View Campus</Link>
          {/* <button onClick={() => handleRemoveCampus(campus.id)}>
            Remove Student
          </button> */}
        </div>
      ))}
    </div>
  );
}

export default Campuses;
