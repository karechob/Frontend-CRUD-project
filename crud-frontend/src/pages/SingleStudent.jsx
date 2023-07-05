import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleStudentThunk } from '../redux/students/students.actions';
import { useParams } from 'react-router-dom';


function SingleStudent() {
  const singleStudent = useSelector((state) => state.students.singleStudent);
  const dispatch = useDispatch();
  const {studentId} = useParams();

  useEffect(() => {
    console.log('RUNNING DISPATCH FROM SINGLESTUDENT');
    dispatch(fetchSingleStudentThunk(studentId));
  }, [dispatch, studentId]);

  return (
    <div>
      <Navigation />
      <h1>Student</h1>

      {singleStudent ? (
        <div>
          <h2>{singleStudent.firstName} {singleStudent.lastName}</h2>
          <img src={singleStudent.imageUrl} alt={singleStudent.firstName} />
          <div>
            <p>Gpa: {singleStudent.gpa}</p>
            <p>Email: {singleStudent.email}</p>
            <h2>Currently Attending</h2>
            <p>{singleStudent.campus?.name}</p>
          </div>
        </div>
      ) : (
        <p>Loading student information...</p>
      )}
    
    </div>
  );
}

export default SingleStudent;
