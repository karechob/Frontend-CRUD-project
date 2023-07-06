import React, { useState} from "react";
import { addStudentThunk } from "../redux/students/students.actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

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

    const handleNewStudentInput = (event) => {
        setNewStudent({
            ...newStudent,
            [event.target.name]: event.target.value,
        })
    }
   
  return (
    <div>
        <Navigation/>
    </div>
  )
}

export default AddStudent