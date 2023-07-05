import axios from "axios";

import StudentsActionType from "./students.types";

export const fetchAllStudents = (payload) => {
  console.log("FETCH ALL STUDENTS ACTION");
  return {
    type: StudentsActionType.FETCH_ALL_STUDENTS,
    payload: payload,
  };
};

export const fetchAllStudentsThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCHALLSTUDENTSTHUNK IS FIRING");
      const response = await axios.get("http://localhost:8080/api/allstudents");
      console.log("FETCHALLSTUDENTSTHUNK COMPLETED")
      dispatch(fetchAllStudents(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

//fetching a single students
export const fetchSingleStudent = (payload) => {
  console.log("FETCH SINGLE STUDENT ACTION");
  return {
    type: StudentsActionType.FETCH_SINGLE_STUDENT,
    payload: payload,
  };
};

export const fetchSingleStudentThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("FETCHSINGLESTUDENTTHUNK IS FIRING");
      const response = await axios.get(`http://localhost:8080/api/student/${id}`); 
      console.log("FETCHSINGLESTUDENTTHUNK COMPLETED")
      dispatch(fetchSingleStudent(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};