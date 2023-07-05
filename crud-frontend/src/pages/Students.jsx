import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from "react-redux";
// import ListingStudents from "../components/ListingStudents";
import { Link } from "react-router-dom";
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

  return (
    <div>
      <Navigation/>
      Students
      <h1>Students Page</h1>
      {allStudents.map((student) => (
        <div key={student.id}>
          <h2>{student.firstName} {student.lastName}</h2>
          <img src={student.imageUrl} alt={`${student.firstName} ${student.lastName}`}/>
          <p>Address: {student.address}</p>
          <p>Description: {student.description}</p>
          <Link to={`/student/${student.id}`}>View Student</Link>
        </div>
      ))}
    </div>
  )
}

export default Students;