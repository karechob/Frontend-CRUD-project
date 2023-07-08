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
      const response = await axios.get(`${process.env.LOCAL_URL}/api/campuses`);
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
      const response = await axios.get(`${process.env.LOCAL_URL}/api/campus/${id}`);
      console.log("FETCHSINGLECAMPUSTHUNK COMPLETED")
      dispatch(fetchSingleCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

//deleting a campus
export const deleteCampus = (campusId) => {
  console.log("DELETECAMPUS ACTION");
  return {
    type: CampusesActionType.DELETE_CAMPUS,
    payload: campusId,
  };
};

export const deleteCampusThunk = (campusId) => {
  return async (dispatch) => {
    try {
      console.log("DELETECAMPUSTHUNK IS FIRING");
      await axios.delete(`${process.env.LOCAL_URL}/api/campus/${campusId}`);
      console.log("DELETECAMPUSTHUNK COMPLETED")
      dispatch(deleteCampus(campusId));
    } catch (error) {
    }
  };
};

//adding a campus
export const addCampus = (campus) => {
  console.log("ADDCAMPUS ACTION");
  return {
    type: CampusesActionType.ADD_CAMPUS,
    payload: campus,
  };
};

export const addCampusThunk = (campusData) => {
  return async (dispatch) => {
    try {
      console.log('ADD CAMPUS THUNK IS FIRING');
      const response = await axios.post(`${process.env.LOCAL_URL}/api/campus/`, campusData);
      //const newCampus = response.data;
      dispatch(addCampus(campusData));
      console.log('ADD CAMPUS THUNK IS COMPLETED');
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}

//updating a campus
export const updateCampus = (payload) => ({
  type: CampusesActionType.UPDATE_CAMPUS,
  payload: payload,
});

export const updateCampusThunk = (updatedCampus) => {
  return async (dispatch) => {
    try {
      console.log('UPDATE CAMPUS THUNK IS FIRING');
      const response = await axios.put(`${process.env.LOCAL_URL}/api/campus/${updatedCampus.id}`, updatedCampus);
      console.log(response)
      console.log('UPDATE STUDENT THUNK COMPLETED');
      dispatch(updateCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};