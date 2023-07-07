import React, { useEffect } from 'react';
import Navigation from "../components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.actions";
import ListingCampuses from "../components/ListingCampuses";
import { deleteCampusThunk } from "../redux/campuses/campuses.actions";
import { Link } from 'react-router-dom';


function Campuses() {
  const allCampuses = useSelector((state) => state.campuses.allCampuses);
  const dispatch = useDispatch();
  //const [rerender, setRerender] = useState(false);

  function fetchAllCampuses() {
    console.log("RUNNING DISPATCH FROM FETCHALLCAMPUSES");
    return dispatch(fetchAllCampusesThunk());
  }

  useEffect(() => {
    console.log("FETCH ALL CAMPUSES FIRING IN USEEFFECT");
    fetchAllCampuses();
  })
  // }, [dispatch, fetchAllCampuses]);

  // dispatch, rerender


  const handleRemoveCampus = (campusId) => {
    dispatch(deleteCampusThunk(campusId));
    //setRerender(!rerender);
  };


  return (
    <div>
      <Navigation />
      <h1 className="campus-page">Campuses</h1>
      <div className='btn-container'>
      <Link to="/campus">
        <button className='add-btn'>ADD CAMPUS</button>
      </Link>
      </div>
      <div className='container-list-items'>
      <ListingCampuses list={allCampuses} handleRemoveCampus={handleRemoveCampus}/>
      </div>
    </div>
  );
}

export default Campuses;
