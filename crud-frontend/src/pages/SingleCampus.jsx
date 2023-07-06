import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCampusThunk } from "../redux/campuses/campuses.actions";
import { useParams, Link } from "react-router-dom";

function SingleCampus() {
  const singleCampus = useSelector((state) => state.campuses.singleCampus);
  const dispatch = useDispatch();
  const { campusId } = useParams();

  //error + loading states
  useEffect(() => {
    console.log("RUNNING DISPATCH FROM SINGLECAMPUS");
    console.log(campusId);
    dispatch(fetchSingleCampusThunk(campusId));
  }, [dispatch, campusId]);
  console.log("this is single campus", singleCampus);
  return (
    <div>
      <Navigation />
      <h1>Campus</h1>
      {singleCampus ? (
        <div>
          <div>
            <h2>{singleCampus.name}</h2>
            <img src={singleCampus.imageUrl} alt={singleCampus.name} />
            <p>Address: {singleCampus.address}</p>
            <p>Description: {singleCampus.description}</p>
            <h2>Enrolled Students:</h2>
            {singleCampus?.students?.length > 0 ? ( //question mark --> optional chaining operator. to access a property of an object which may be null or undefined
              <div>
                <ul>
                  {singleCampus.students.map((student) => (
                    <li key={student.id}>
                      <Link to={`/student/${student.id}`}>
                        {student.firstName}
                      </Link>
                      {/* <button onClick={() => handleRemoveStudent(student.id)}>
                      Remove Student
                    </button> */}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No students enrolled at this campus.</p>
            )}

            {/*
          <button onClick={handleCampusEdit}>Edit Campus</button>
          */}
          </div>
        </div>
      ) : (
        <p>No campus information currently</p>
      )}
    </div>
  );
}
export default SingleCampus;
