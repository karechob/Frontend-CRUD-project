import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from "react-redux";
import ListingStudents from "../components/ListingStudents";
import { fetchAllStudentsThunk } from '../redux/students/students.actions';

function Students() {
  const allStudents = useSelector((state) => state.students.allStudents);
  console.log(" THIS IS ALL STUDENTS ->  ",allStudents);
  const dispatch = useDispatch();

  function fetchAllStudents() {
    console.log('RUNNING DISPATCH FROM FETCHALLSTUDENTS');
    return dispatch(fetchAllStudentsThunk());
  }

  useEffect(() => {
    console.log('FETCH ALL STUDENTS FIRING IN USEEFFECT');
    fetchAllStudents();
  }, []);

  //ADD STUDENT
    //ON DIFFERENT VIEW

  //DELETE STUDENT

  return (
    <div>
      <Navigation/>
      Students
      <h1>Students Page</h1>
      <ListingStudents list={allStudents}/>
    </div>
  )
}

export default Students;