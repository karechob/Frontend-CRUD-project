import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.actions";
import ListingCampuses from "../components/ListingCampuses";

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
      <ListingCampuses list={allCampuses}/>
    </div>
  );
}

export default Campuses;
