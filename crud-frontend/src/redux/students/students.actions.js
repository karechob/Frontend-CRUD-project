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
      const response = await axios.get("http://localhost:8080/api/students");
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
      console.log("FETCSINGLESTUDENTTHUNK COMPLETED")
      dispatch(fetchSingleStudent(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

//delete student
export const deleteStudent = (studentId) => {
  console.log("FETCHDELETESTUDENT ACTION");
  return {
    type: StudentsActionType.DELETE_STUDENT,
    payload: studentId,
  };
};

export const deleteStudentThunk = (studentId) => {
  return async (dispatch) => {
    try {
      console.log("FETCHDELETESTUDENTTHUNK IS FIRING");
      await axios.delete(`http://localhost:8080/api/student/${studentId}`);
      console.log("FETCHDELETESTUDENTTHUNK COMPLETED")
      dispatch(deleteStudent(studentId));
    } catch (error) {
    }
  };
};

//add student
export const addStudent = (student) => {
  console.log("FETCHADDSTUDENT ACTION");
  return {
    type: StudentsActionType.ADD_STUDENT,
    payload: student,
  };
};

export const addStudentThunk = (studentData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8080/api/student/', studentData);
      const newStudent = response.data;
      dispatch(addStudent(newStudent));
    } catch (error) {
      console.error(error)
    }
  };
};