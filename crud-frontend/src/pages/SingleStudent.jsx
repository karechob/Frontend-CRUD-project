import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleStudentThunk,
  deleteStudentThunk,
  updateStudentThunk,
} from "../redux/students/students.actions";
import { useParams, useNavigate, Link } from "react-router-dom";
import EditStudent from "./EditStudent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    toast.error('Student deleted successfully');
  };

  const handleToggleEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const unenrollStudent = () => {
    const updatedStudent = { ...singleStudent, campusId: null };
    dispatch(updateStudentThunk(updatedStudent));
  };

  return (
    <div key={forceRerenderKey}>
      <Navigation />
      <h1 className="campus-title">Student</h1>

      <ToastContainer />
      {singleStudent ? (
        <div>
          <h2 className="campus-title">
            {singleStudent.firstName} {singleStudent.lastName}
          </h2>
          <div className="image-container-single-view">
            <img
              className="campus-img-single-view"
              src={singleStudent.imageUrl}
              alt={singleStudent.firstName}
            />
          </div>
          <div>
            <p className="paragraph-img">Gpa: {singleStudent.gpa}</p>
            <p className="paragraph-img">Email: {singleStudent.email}</p>
            <div>
              {isEditing ? (
                <EditStudent />
              ) : (
                <div className="btn-container">
                  <button onClick={handleToggleEdit}>Edit Student</button>
                  <button className="btn-campus-delete" onClick={handleDeleteStudent}>X</button>
                </div>
              )}
            </div>
            {singleStudent.campus ? (
              <div>
                <h1 className="campus-title">Currently Attending</h1>
                <h2 className="campus-title">
                  <Link className="link-color" to={`/campuses/${singleStudent.campus.id}`}>
                    {singleStudent.campus.name}
                  </Link>
                  <button className="btn-campus-delete" onClick={unenrollStudent}>Unenroll</button>
                </h2>
              </div>
            ) : (
              <p className="campus-title">Not enrolled at any campus.</p>
            )}
          </div>
        </div>
      ) : (
        <p className="campus-title">There is not information for this student currently</p>
      )}
    </div>
  );
}

export default SingleStudent;
