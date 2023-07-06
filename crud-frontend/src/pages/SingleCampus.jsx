import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleCampusThunk, updateCampusThunk } from '../redux/campuses/campuses.actions';
import { useParams, Link } from 'react-router-dom';
import EditCampus from './EditCampus';

function SingleCampus() {
  const { campusId } = useParams();
  const dispatch = useDispatch();
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

  return (
    <div>
      <Navigation />
      <h1>Campus</h1>

      {singleCampus ? (
        <div>
          <h2>{singleCampus.name}</h2>
          <img src={singleCampus.imageUrl} alt={singleCampus.name} />
          <p>Address: {singleCampus.address}</p>
          <p>Description: {singleCampus.description}</p>
          <h2>Enrolled Students:</h2>
          {singleCampus.students?.length > 0 ? (
            <div>
              <ul>
                {singleCampus.students.map((student) => (
                  <li key={student.id}>
                    <Link to={`/student/${student.id}`}>
                      {student.firstName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No students enrolled at this campus.</p>
          )}

          {isEditing ? (
            <EditCampus
              campus={singleCampus}
              handleUpdateCampus={handleUpdateCampus}
            />
          ) : (
            <div>
              <button onClick={handleToggleEdit}>Edit Campus</button>
            </div>
          )}
        </div>
      ) : (
        <p>No campus information currently</p>
      )}
    </div>
  );
}

export default SingleCampus;
