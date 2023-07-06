import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from "react-redux";
import ListingStudents from "../components/ListingStudents";
import { fetchAllStudentsThunk } from '../redux/students/students.actions';
import { deleteStudentThunk } from '../redux/students/students.actions';


function Students() {
  const allStudents = useSelector((state) => state.students.allStudents);
  const dispatch = useDispatch();
  const [rerender, setRerender] = useState(false);

  function fetchAllStudents() {
    console.log('RUNNING DISPATCH FROM FETCHALLSTUDENTS');
    return dispatch(fetchAllStudentsThunk());
  }

  useEffect(() => {
    console.log('FETCH ALL STUDENTS FIRING IN USEEFFECT');
    fetchAllStudents();
  }, [dispatch, rerender]);

  const handleDeleteStudent = (studentId) => {
    dispatch(deleteStudentThunk(studentId));
    setRerender(!rerender);
  };

  // const handleAddStudent = () => {

  // }

  //ADD STUDENT
    //ON DIFFERENT VIEW

  return (
    <div>
      <Navigation />
      <h1>Students Page</h1>
      <ListingStudents list={allStudents} handleDeleteStudent={handleDeleteStudent}/>
    </div>
  );
}

export default Students;