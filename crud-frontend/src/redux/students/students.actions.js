import axios from "axios";

import StudentsActionType from "./students.types";

//fetching all students
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

//deleting a student
export const deleteStudent = (studentId) => {
  console.log("DELETESTUDENT ACTION");
  return {
    type: StudentsActionType.DELETE_STUDENT,
    payload: studentId,
  };
};

export const deleteStudentThunk = (studentId) => {
  return async (dispatch) => {
    try {
      console.log("DELETESTUDENTTHUNK IS FIRING");
      await axios.delete(`http://localhost:8080/api/student/${studentId}`);
      console.log("DELETESTUDENTTHUNK COMPLETED")
      dispatch(deleteStudent(studentId));
    } catch (error) {
    }
  };
};

//adding a student
export const addStudent = (student) => {
  console.log("ADDSTUDENT ACTION");
  return {
    type: StudentsActionType.ADD_STUDENT,
    payload: student,
  };
};

export const addStudentThunk = (studentData) => {
  return async (dispatch) => {
    try {
      console.log('ADD STUDENT THUNK IS FIRING');
      const response = await axios.post('http://localhost:8080/api/student/', studentData);
      const newStudent = response.data;
      dispatch(addStudent(newStudent));
      console.log('ADD STUDENT THUNK IS COMPLETED');
    } catch (error) {
      console.error(error)
    }
  }
}

//updating a student
export const updateStudent = (payload) => ({
  type: StudentsActionType.UPDATE_STUDENT,
  payload: payload,
});

export const updateStudentThunk = (updatedStudent) => {
  return async (dispatch) => {
    try {
      console.log('UPDATE STUDENT THUNK IS FIRING');
      const response = await axios.put(`http://localhost:8080/api/student/${updatedStudent.id}`, updatedStudent);
      console.log('UPDATE STUDENT THUNK COMPLETED');
      dispatch(updateStudent(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};