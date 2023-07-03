import React from 'react'
import Navigation from '../components/Navigation'
import ListingStudents from "../components/ListingStudents";

function Students() {
  const allStudents = useSelector((state) => state.student.Allstudents);
  const dispatch = useDispatch();

  function fetchAllStudents() {
    console.log('RUNNING DISPATCH FROM FETCHALLSTUDENTS');
    return dispatch(fetchAllStudentThunk());
  }

  useEffect(() => {
    console.log('FETCH ALL STUDENTS FIRING IN USEEFFECT');
    fetchAllStudents();
  }, []);

  return (
    <div>
      <Navigation/>
      Students
      <h1>Students Page</h1>
      <ListingStudents list={allStudents} />
    </div>
  )
}

export default Students;