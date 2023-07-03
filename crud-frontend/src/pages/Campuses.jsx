import React from 'react'
import Navigation from '../components/Navigation'

function Campuses() {
  const allShoes = useSelector((state) => state.shoes.allShoes);
  const dispatch = useDispatch();

  function fetchAllShoes() {
    console.log('RUNNING DISPATCH FROM FETCHALLSHOES');
    return dispatch(fetchAllShoesThunk());
  }

  useEffect(() => {
    console.log('FETCH ALL SHOES FIRING IN USEEFFECT');
    fetchAllShoes();
  }, []);

  return (
    <div>
        <Navigation/>
         Campuses
    </div>
  )
}

export default Campuses