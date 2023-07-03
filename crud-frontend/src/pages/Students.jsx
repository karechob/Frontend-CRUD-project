import React from 'react'
import Navigation from '../components/Navigation'
import ListingStudents from "../components/ListingStudents";
import { fetchAllStudentsThunk } from '../redux/students/students.actions';

function Students() {
  const allStudents = useSelector((state) => state.student.allStudents);
  const dispatch = useDispatch();

  function fetchAllStudents() {
    console.log('RUNNING DISPATCH FROM FETCHALLSTUDENTS');
    return dispatch(fetchAllStudentsThunk());
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