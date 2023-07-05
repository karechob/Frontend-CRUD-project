import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleCampusThunk } from '../redux/campuses/campuses.actions';
import { useParams } from 'react-router-dom';


function SingleStudent() {
  const singleStudent = useSelector((state) => state.students.SingleStudent);
  const dispatch = useDispatch();
  const {studentId} = useParams();

  useEffect(() => {
    console.log('RUNNING DISPATCH FROM SINGLESTUDENT');
    dispatch(fetchSingleCampusThunk(studentId));
  }, [dispatch, studentId]);

  return (
    <div>
      <Navigation />
      <h1>Campuses Page</h1>

      {singleStudent ? (
        <div>
          <h2>{singleStudent.name}</h2>
          <img src={singleStudent.image} alt={singleStudent.name} />
        </div>
      ) : (
        <p>Loading student information...</p>
      )}
    
    </div>
  );
}

export default SingleStudent;
