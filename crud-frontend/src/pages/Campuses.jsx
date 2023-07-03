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
      <h1>Campuses Page</h1>
      <ListingCampuses list={allCampuses} />
    </div>
  );
}

export default Campuses;
