import React from 'react'
import Navigation from '../components/Navigation'
import ListingCampuses from '../components/ListingCampuses';

function Campuses() {
  const allCampuses = useSelector((state) => state.shoes.allShoes);
  const dispatch = useDispatch();

  function fetchAllCampuses() {
    console.log('RUNNING DISPATCH FROM FETCHALLCAMPUSES');
    return dispatch(fetchAllShoesThunk());
  }

  useEffect(() => {
    console.log('FETCH ALL CAMPUSES FIRING IN USEEFFECT');
    fetchAllCampuses();
  }, []);

  return (
    <div>
        <Navigation/>
         Campuses
         <h1>Shoes Page</h1>
        <ListingCampuses list={allCampuses} />
    </div>
  )
}

export default Campuses;