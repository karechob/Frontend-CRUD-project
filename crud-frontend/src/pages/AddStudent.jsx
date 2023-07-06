import React, { useState } from "react";
import { addStudentThunk } from "../redux/students/students.actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addStudentThunk(newStudent));
    navigate("/students");
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
      <div className="form-style">
        <h1>Add New Student</h1>
        <form onSubmit={handleSubmit}>
          <label className="from-label">First Name:</label>
          <input
            type="text"
            name="firstname"
            defaultValue={newStudent.firstName}
            onChange={handleNewStudentInput}
            required
            pattern="[A-Za-z ]+"
          />
          <label className="from-label">Last Name:</label>
          <input
            type="text"
            name="lastname"
            defaultValue={newStudent.lastName}
            onChange={handleNewStudentInput}
            required
            pattern="[A-Za-z ]+"
          />
          <label className="from-label">Email:</label>
          <input
            type="email"
            name="email"
            value={newStudent.email}
            onChange={handleNewStudentInput}
            required
          />
          <label className="from-label">GPA:</label>
          <input
            type="number"
            name="gpa"
            value={newStudent.gpa}
            onChange={handleNewStudentInput}
            required
          />
          <button className="btn-submit" type="submit">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;