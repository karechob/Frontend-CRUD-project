import React, { useState} from "react";
import { addStudentThunk } from "../redux/students/students.actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudentThunk } from "../redux/students/students.actions";

function AddStudent() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (student) => {
        dispatch(addStudentThunk(student))
        navigate('/students')
    }




   
  return (
    <div>AddStudent</div>
  )
}

export default AddStudent