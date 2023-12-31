import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleCampusThunk,
  updateCampusThunk,
  deleteCampusThunk,
} from "../redux/campuses/campuses.actions";

import { deleteStudentThunk } from "../redux/students/students.actions";
import { useParams, useNavigate, Link } from "react-router-dom";
import EditCampus from "./EditCampus";

function SingleCampus() {
  const { campusId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const singleCampus = useSelector((state) => state.campuses.singleCampus);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(fetchSingleCampusThunk(campusId));
  }, [dispatch, campusId]);

  const handleToggleEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleUpdateCampus = (updatedCampus) => {
    dispatch(updateCampusThunk(updatedCampus));
    setIsEditing(false);
  };

  const handleRemoveCampus = () => {
    dispatch(deleteCampusThunk(campusId));
    navigate("/campuses");
  };

  const handleDeleteStudent = (studentId) => {
    dispatch(deleteStudentThunk(studentId));
    window.location.reload();
  };

  return (
    <div>
      <Navigation />
      <h1 className="campus-title">Campus</h1>

      {singleCampus ? (
        <div>
          <h2 className="campus-title">{singleCampus.name}</h2>
          <div className="image-container-single-view">
            <img
              className="campus-img-single-view"
              src={singleCampus.imageUrl}
              alt={singleCampus.name}
            />
          </div>
          <p className="paragraph-img">Address: {singleCampus.address}</p>
          <p className="paragraph-img">
            Description: {singleCampus.description}
          </p>
          {isEditing ? (
            <EditCampus
              campus={singleCampus}
              handleUpdateCampus={handleUpdateCampus}
            />
          ) : (
            <div className="btn-container">
              <button onClick={handleToggleEdit}>Edit Campus</button>
              <button
                className="btn-campus-delete"
                onClick={handleRemoveCampus}
              >
                X
              </button>
            </div>
          )}

          <h2 className="campus-title">Enrolled Students:</h2>
          <div className="btn-container">
            <Link to="/student">
              <button className="add-btn">ADD STUDENT</button>
            </Link>
          </div>
          {singleCampus.students?.length > 0 ? (
            <div className="container-students-in-campus">
              <div className="background-li-ul">
                <ul className="student-list-ul">
                  {singleCampus.students.map((student) => (
                    <li key={student.id} className="student-item-li">
                      <Link to={`/student/${student.id}`}>
                        {student.firstName}
                      </Link>
                      <button
                        className="btn-campus-delete"
                        onClick={() => handleDeleteStudent(student.id)}
                      >
                        X
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <p className="info-message">No students enrolled at this campus.</p>
          )}
        </div>
      ) : (
        <p className="info-message">No campus information currently</p>
      )}
    </div>
  );
}

export default SingleCampus;
