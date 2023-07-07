import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllStudentsThunk,
  deleteStudentThunk,
} from "../redux/students/students.actions";
import ListingStudents from "../components/ListingStudents";
import { Link } from "react-router-dom";

function Students() {
  const allStudents = useSelector((state) => state.students.allStudents);
  const dispatch = useDispatch();
  const [rerender, setRerender] = useState(false);

  function fetchAllStudents() {
    console.log("RUNNING DISPATCH FROM FETCHALLSTUDENTS");
    return dispatch(fetchAllStudentsThunk());
  }

  useEffect(() => {
    console.log("FETCH ALL STUDENTS FIRING IN USEEFFECT");
    fetchAllStudents();
  }, [dispatch, rerender]);

  const handleDeleteStudent = (studentId) => {
    dispatch(deleteStudentThunk(studentId));
    setRerender(!rerender);
  };

  return (
    <div>
      <Navigation />
      <h1 className="student-title">Students</h1>
      <div className="btn-container">
        <Link to="/student">
          <button className="add-btn">ADD STUDENT</button>
        </Link>
      </div>
      <div className='container-list-items'>
      <ListingStudents
        list={allStudents}
        handleDeleteStudent={handleDeleteStudent}
      />
      </div>
    </div>
  );
}

export default Students;