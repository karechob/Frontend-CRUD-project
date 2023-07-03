import React from 'react'
import Navigation from '../components/Navigation'

function Students() {
  const allStudents = useSelector((state) => state.students.allStudents);
  const dispatch = useDispatch();

  function fetchAllStudents() {
    console.log('RUNNING DISPATCH FROM FETCHALLSTUDENTS');
    return dispatch(fetchAllShoesThunk());
  }

  useEffect(() => {
    console.log('FETCH ALL SHOES FIRING IN USEEFFECT');
    fetchAllStudents();
  }, []);

  return (
    <div>
      <Navigation/>
      Students
      <h1>Students Page</h1>
      <ListItems list={allStudents} />
    </div>
  )
}

export default Students;