import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudentsThunk, deleteStudentThunk, addStudentThunk } from '../redux/students/students.actions';
import ListingStudents from '../components/ListingStudents';
import AddStudent from './AddStudent';

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

  const handleAddStudent = () => {
    dispatch(addStudentThunk());
  }

  return (
    <div>
      <Navigation />
      <h1 className='student-title'>Students</h1>
      <ListingStudents list={allStudents} handleDeleteStudent={handleDeleteStudent}/>
    </div>
  );
}

export default Students;

{/* <button onClick={() => handleAddStudent(.id)} >ADD CAMPUS</button> */}