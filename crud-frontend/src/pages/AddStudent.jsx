import React, { useState} from "react";
import { addStudentThunk } from "../redux/students/students.actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddStudent() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (student) => {
        dispatch(addStudentThunk(student))
        navigate('/students')
    }

    const [newStudent, setNewStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        imageUrl: "https://freesvg.org/img/abstract-user-flat-4.png",
        gpa: "",
    })


   
  return (
    <div>AddStudent</div>
  )
}

export default AddStudent