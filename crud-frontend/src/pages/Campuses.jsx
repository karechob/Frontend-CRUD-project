import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import ListingCampuses from '../components/ListingCampuses';
import { fetchAllCampusesThunk } from '../redux/campuses/campuses.actions';


function Campuses() {
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  const dispatch = useDispatch();

  function fetchAllCampuses() {
    console.log('RUNNING DISPATCH FROM FETCHALLCAMPUSES');
    return dispatch(fetchAllCampusesThunk());
  }

  useEffect(() => {
    console.log('FETCH ALL CAMPUSES FIRING IN USEEFFECT');
    fetchAllCampuses();
  }, []);

  return (
    <div>
      <Navigation />
      <h1 className='campus-page'>Campuses</h1>
      {/* <button className='add-campus'>Add Campus</button>
      <ListingCampuses list={allCampuses} /> */}
      {campuses.map((campus) => (
        <div key={campus.id}>
          <h2>{campus.name}</h2>
          <img src={campus.image} alt={campus.name} />
          <p>Address: {campus.address}</p>
          <p>Description: {campus.description}</p>
          <Link to={`/campuses/${campus.id}`}>View Campus</Link>
        </div>
      ))}
    </div>
  );
}

export default Campuses;
