import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleStudentThunk, deleteStudentThunk } from '../redux/students/students.actions';
import { useParams, useNavigate, Link } from 'react-router-dom';



function SingleStudent() {
  const singleStudent = useSelector((state) => state.students.singleStudent);
  const dispatch = useDispatch();
  const {studentId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('RUNNING DISPATCH FROM SINGLESTUDENT');
    dispatch(fetchSingleStudentThunk(studentId));
  }, [dispatch, studentId]);

  const handleDeleteStudent = () => {
    dispatch(deleteStudentThunk(studentId));
    navigate('/students');
  };

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
          {singleStudent.campus ? (
            <div>
              <h2>Currently Attending</h2>
              <p>{singleStudent.campus.name}</p>
              <Link to={`/campuses/${singleStudent.campus.id}`}>View Campus</Link>
            </div>
          ) : (
            <p>Not enrolled at any campus.</p>
          )}
        </div>
        <button onClick={handleDeleteStudent}>Delete Student</button>
      </div>
    ) : (
      <p>Loading student information...</p>
    )}
  </div>
  );
}

export default SingleStudent;
