import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateStudentThunk } from '../redux/students/students.actions';
import { fetchAllCampusesThunk } from '../redux/campuses/campuses.actions';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function EditStudent() {
  const { studentId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const singleStudent = useSelector((state) => state.students.singleStudent);
  const campuses = useSelector((state) => state.campuses.allCampuses);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gpa: "",
    email: "",
    campusId: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("FETCH ALL CAMPUSES FIRING IN USEEFFECT");
    dispatch(fetchAllCampusesThunk()).then(() => {
      if (singleStudent) {
        setFormData({
          firstName: singleStudent.firstName,
          lastName: singleStudent.lastName,
          gpa: singleStudent.gpa,
          email: singleStudent.email,
          campusId: singleStudent.campus?.id || "",
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
    if (formData.firstName.trim() === "") {
      formErrors.firstName = "First name is required.";
    }
    if (formData.lastName.trim() === "") {
      formErrors.lastName = "Last name is required.";
    }
    if (formData.gpa.trim() === "") {
      formErrors.gpa = "GPA is required.";
    }
    if (formData.email.trim() === "") {
      formErrors.email = "Email is required.";
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
      dispatch(updateStudentThunk(updatedStudent))
        .then(() => {
          navigate(`/student/${studentId}`);
          // toast.success('Student updated successfully');
        })
        .catch((error) => {
          // Handle error, if any
          console.log(error);
        });
    }
  };

  const exitEditMode = () => {
    window.location.reload();
  };

  return (
    <div>
      <h2>Edit Student</h2>
      {/* <ToastContainer /> */}
     
    <div className="form-wrapper">
      <h2 className="campus-title">Edit Student</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <label className="labels-form">First Name:</label>
          <input
            className="input-form"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            pattern="[A-Za-z ]+"
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div>
          <label className="labels-form">Last Name:</label>
          <input
            className="input-form"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            pattern="[A-Za-z ]+"
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div>
          <label className="labels-form">GPA:</label>
          <input
            className="input-form"
            type="number"
            min={0.0}
            max={4.0}
            step={0.1}
            name="gpa"
            value={formData.gpa}
            onChange={handleInputChange}
            required
          />
          {errors.gpa && <p>{errors.gpa}</p>}
        </div>
        <div>
          <label className="labels-form">Email:</label>
          <input
            className="input-form"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label className="labels-form">Enrolled Campus:</label>
          <select
            className="input-form"
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
        <div className="btn-container">
          <button className="save-btn" type="submit">
            SAVE
          </button>
          <button className="save-btn" onClick={exitEditMode}>
            EXIT
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default EditStudent;
