import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import Campuses from '../pages/Campuses';
import Students from '../pages/Students';
import SingleCampus from '../pages/SingleCampus';
import SingleStudent from '../pages/SingleStudent';
import AddCampus from '../pages/AddCampus'
import AddStudent from '../pages/AddStudent'
import UpdateStudent from '../pages/UpdateStudent'
import UpdateCampus from '../pages/UpdateCampus'
import RemoveStudent from '../pages/RemoveStudent'
import RemoveCampus from '../pages/RemoveCampus'

function App() {
  return (
    <Router>
      {/* <div className='App'>
        <Home />
      </div> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allstudents' element={<Students />} />
        <Route path='/allcampuses' element={<Campuses />} />
        <Route path='/campus/:id' element={<SingleCampus />} />
        <Route path='/campus/:id' element={<UpdateCampus />} />
        <Route path='/campus/:id' element={<RemoveCampus />} />
        <Route path='/campus' element={<AddCampus />} />
        <Route path='/student/:id' element={<SingleStudent />} />
        <Route path='/student/:id' element={<UpdateStudent />} />
        <Route path='/student/:id' element={<RemoveStudent />} />
        <Route path='/student' element={<AddStudent />} />
      </Routes>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>
    </Router>
  );
}

export default App;
