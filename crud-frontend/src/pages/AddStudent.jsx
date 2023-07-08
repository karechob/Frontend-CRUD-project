import React, { useState } from "react";
import { addStudentThunk } from "../redux/students/students.actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

function AddStudent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
    gpa: "",
  });

  const handleSubmit = async(event) => {
    event.preventDefault();
    const studentdata = await dispatch(addStudentThunk(newStudent));
    console.log("this is student data")
    console.log(studentdata)
    navigate(`/student/${studentdata.id}`);
    //toast.success('Student added successfully');
  };


  const handleNewStudentInput = (event) => {
      event.preventDefault();
    setNewStudent({
      ...newStudent,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Navigation />
      {/* <ToastContainer /> */}
      <div className="form-style">
        <h1 className="campus-title">Add New Student</h1>
        <form onSubmit={handleSubmit} className='add-form-container'>
          <label className="add-form-label">First Name:</label>
          <input className="add-input-form"
            type="text"
            name="firstName"
            defaultValue={newStudent.firstName}
            onChange={handleNewStudentInput}
            required
            pattern="[A-Za-z ]+"
          />
          <label className="add-form-label">Last Name:</label>
          <input className="add-input-form"
            type="text"
            name="lastName"
            defaultValue={newStudent.lastName}
            onChange={handleNewStudentInput}
            required
            pattern="[A-Za-z ]+"
          />
          <label className="add-form-label">Email:</label>
          <input className="add-input-form"
            type="email"
            name="email"
            value={newStudent.email}
            onChange={handleNewStudentInput}
            required
          />
          <label className="add-form-label">GPA:</label>
          <input className="add-input-form"
            type="number"
            min={0.0}
            max={4.0}
            step={0.1}
            name="gpa"
            value={newStudent.gpa}
            onChange={handleNewStudentInput}
            required
          />
          <button className="add-btn-submit" type="submit">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;