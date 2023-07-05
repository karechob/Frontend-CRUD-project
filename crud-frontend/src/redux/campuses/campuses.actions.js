import axios from "axios";

import CampusesActionType from "./campuses.types";

export const fetchAllCampuses = (payload) => {
  console.log("FETCH ALL CAMPUSES ACTION");
  return {
    type: CampusesActionType.FETCH_ALL_CAMPUSES,
    payload: payload,
  };
};

export const fetchAllCampusesThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCHALLCAMPUSESTHUNK IS FIRING");
      const response = await axios.get("http://localhost:8080/api/allcampuses");
      console.log("FETCHALLCAMPUSESTHUNK COMPLETED")
      dispatch(fetchAllCampuses(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

//fetching a single campus
export const fetchSingleCampus = (payload) => {
  console.log("FETCH SINGLE CAMPUS ACTION");
  return {
    type: CampusesActionType.FETCH_SINGLE_CAMPUS,
    payload: payload,
  };
};

export const fetchSingleCampusThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("FETCHSINGLECAMPUSTHUNK IS FIRING");
      console.log(id)
      const response = await axios.get(`http://localhost:8080/api/campus/${id}`);
      console.log("FETCHSINGLECAMPUSTHUNK COMPLETED")
      dispatch(fetchSingleCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};