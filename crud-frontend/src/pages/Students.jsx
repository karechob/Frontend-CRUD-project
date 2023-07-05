import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllStudentsThunk, deleteStudentThunk } from '../redux/students/students.actions';

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

  return (
    <div>
      <Navigation />
      <h1>Students Page</h1>
      {allStudents.map((student) => (
        <div key={student.id}>
          <h2>{student.firstName} {student.lastName}</h2>
          <img src={student.imageUrl} alt={`${student.firstName} ${student.lastName}`} />
          <Link to={`/student/${student.id}`}>View Student</Link>
          <button onClick={() => handleDeleteStudent(student.id)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default Students;
