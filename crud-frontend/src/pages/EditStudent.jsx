import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateStudentThunk } from '../redux/students/students.actions';
import { fetchAllCampusesThunk } from '../redux/campuses/campuses.actions';

function EditStudent() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const singleStudent = useSelector((state) => state.students.singleStudent);
  const campuses = useSelector((state) => state.campuses.allCampuses);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gpa: '',
    email: '',
    campusId: '',
  });
  const [errors, setErrors] = useState({});

  function fetchAllCampuses() {
    console.log("RUNNING DISPATCH FROM FETCHALLCAMPUSES");
    return dispatch(fetchAllCampusesThunk());
  }
  useEffect(() => {
    console.log("FETCH ALL CAMPUSES FIRING IN USEEFFECT");
    dispatch(fetchAllCampusesThunk())
      .then(() => {
        if (singleStudent) {
          setFormData({
            firstName: singleStudent.firstName,
            lastName: singleStudent.lastName,
            gpa: singleStudent.gpa,
            email: singleStudent.email,
            campusId: singleStudent.campus?.id || '',
          });
        }
      });
  }, [singleStudent, dispatch]);

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
      {console.log("This is updated campus: " + updatedStudent.campusId)}
      dispatch(updateStudentThunk(updatedStudent));
      navigate(`/student/${studentId}`);
    }
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div>
          <label>GPA:</label>
          <input
            type="text"
            name="gpa"
            value={formData.gpa}
            onChange={handleInputChange}
          />
          {errors.gpa && <p>{errors.gpa}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Enrolled Campus:</label>
          <select
            name="campusId"
            value={formData.campusId}
            onChange={handleInputChange}
          >
            <option value="">Not Enrolled</option>
            {campuses.map((campus) => (
              <option key={campus.id} value={campus.id}>
                {campus.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditStudent;
