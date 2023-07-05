import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleCampusThunk } from '../redux/campuses/campuses.actions';
import { useParams } from 'react-router-dom';


function Campuses() {
  const singleCampus = useSelector((state) => state.campuses.singleCampus);
  const dispatch = useDispatch();
  const {campusId} = useParams();

  useEffect(() => {
    console.log('RUNNING DISPATCH FROM FETCHALLCAMPUSES');
    dispatch(fetchSingleCampusThunk(campusId));
  }, [dispatch, campusId]);

  return (
    <div>
      <Navigation />
      <h1>Campuses Page</h1>

      {singleCampus ? (
        <div>
          <h2>{singleCampus.name}</h2>
          <img src={singleCampus.image} alt={singleCampus.name} />
          <p>Address: {singleCampus.address}</p>
          <p>Description: {singleCampus.description}</p>
     
        </div>
      ) : (
        <p>Loading campus information...</p>
      )}
    
    </div>
  );
}

export default Campuses;
