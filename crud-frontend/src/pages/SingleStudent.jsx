import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleStudentThunk, deleteStudentThunk, updateStudentThunk } from '../redux/students/students.actions';
import { useParams, useNavigate, Link } from 'react-router-dom';
import EditStudent from './EditStudent';

function SingleStudent() {
  const [forceRerenderKey, setForceRerenderKey] = useState(0);
  const singleStudent = useSelector((state) => state.students.singleStudent);
  const dispatch = useDispatch();
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(fetchSingleStudentThunk(studentId));
  }, [dispatch, studentId, forceRerenderKey]);

  const handleDeleteStudent = () => {
    dispatch(deleteStudentThunk(studentId));
    navigate("/students");
  };

  const handleToggleEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  return (
    <div key={forceRerenderKey}>
      <Navigation />
      <h1>Student</h1>

      {singleStudent ? (
        <div>
          <h2>
            {singleStudent.firstName} {singleStudent.lastName}
          </h2>
          <img src={singleStudent.imageUrl} alt={singleStudent.firstName} />
          <div>
            <p>Gpa: {singleStudent.gpa}</p>
            <p>Email: {singleStudent.email}</p>
            {singleStudent.campus ? (
              <div>
                <h2>Currently Attending</h2>
                <p>{singleStudent.campus.name}</p>
                <Link to={`/campuses/${singleStudent.campus.id}`}>
                  View Campus
                </Link>
              </div>
            ) : (
              <p>Not enrolled at any campus.</p>
            )}
            <div>
              {isEditing ? (
                <EditStudent />
              ) : (
                <div>
                  <button onClick={handleToggleEdit}>Edit</button>
                </div>
              )}
            </div>
          </div>
          <button onClick={handleDeleteStudent}>X</button>
        </div>
      ) : (
        <p>There is not information for this student currently</p>
      )}
    </div>
  );
}

export default SingleStudent;
