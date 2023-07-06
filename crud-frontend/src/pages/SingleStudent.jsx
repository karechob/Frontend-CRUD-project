import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleStudentThunk, deleteStudentThunk, updateStudentThunk } from '../redux/students/students.actions';
import { useParams, useNavigate, Link } from 'react-router-dom';
import EditStudent from './EditStudent';

function SingleStudent() {
  const singleStudent = useSelector((state) => state.students.singleStudent);
  const dispatch = useDispatch();
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gpa: '',
    email: '',
    campusId: '',
  });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(fetchSingleStudentThunk(studentId));
  }, [dispatch, studentId]);

  useEffect(() => {
    if (singleStudent) {
      setFormData({
        firstName: singleStudent.firstName,
        lastName: singleStudent.lastName,
        gpa: singleStudent.gpa,
        email: singleStudent.email,
        campusId: singleStudent.campus?.id || '',
      });
    }
  }, [singleStudent]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (formData.firstName.trim() === '') {
      formErrors.firstName = 'First name is required.';
    }
    if (formData.lastName.trim() === '') {
      formErrors.lastName = 'Last name is required.';
    }
    if (formData.gpa.trim() === '') {
      formErrors.gpa = 'GPA is required.';
    }
    if (formData.email.trim() === '') {
      formErrors.email = 'Email is required.';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const updatedStudent = {
        id: studentId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        gpa: formData.gpa,
        email: formData.email,
        campusId: formData.campusId,
      };
      dispatch(updateStudentThunk(updatedStudent));
      setIsEditing(false);
    }
  };

  const handleDeleteStudent = () => {
    dispatch(deleteStudentThunk(studentId));
    navigate('/students');
  };

  const handleToggleEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
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
            <div>
              {isEditing ? (
                <EditStudent
                  formData={formData}
                  errors={errors}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                />
              ) : (
                <div>
                  <button onClick={handleToggleEdit}>Edit</button>
                </div>
              )}
            </div>
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
