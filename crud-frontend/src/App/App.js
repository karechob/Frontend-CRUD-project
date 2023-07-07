import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from '../pages/Home';
import Campuses from '../pages/Campuses';
import Students from '../pages/Students';
import SingleCampus from '../pages/SingleCampus';
import SingleStudent from '../pages/SingleStudent';
import AddCampus from '../pages/AddCampus';
import AddStudent from '../pages/AddStudent';
import EditStudent from '../pages/EditStudent';
import EditCampus from '../pages/EditCampus';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      {/* <div className='App'>
        <Home />
      </div> */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route exact path='/students' element={<Students />} />
        <Route exact path='/campuses' element={<Campuses />} />
        <Route path="/campuses/:campusId" Component={SingleCampus} />
        <Route path="/student/:studentId" Component={SingleStudent} />
        <Route path='/student' element={<AddStudent />} />
        <Route path='/campus' element={<AddCampus />} />
        <Route path="/student/:studentId" element={<EditStudent />} />
        <Route path="/campus/:campusId" element={<EditCampus />} />
      </Routes>
      <ToastContainer />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>
    </Router>
  );
}

export default App;
/*
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from '../pages/Home';
import Campuses from '../pages/Campuses';
import Students from '../pages/Students';
import SingleCampus from '../pages/SingleCampus';
import SingleStudent from '../pages/SingleStudent';
import AddCampus from '../pages/AddCampus';
import AddStudent from '../pages/AddStudent';
import EditStudent from '../pages/EditStudent';
import EditCampus from '../pages/EditCampus';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      {/* <div className='App'>
        <Home />
      </div> }
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route exact path='/students' element={<Students />} />
        <Route exact path='/campuses' element={<Campuses />} />
        <Route path="/campuses/:campusId" Component={SingleCampus} />
        <Route path="/student/:studentId" Component={SingleStudent} />
        <Route path='/student' element={<AddStudent />} />
        <Route path='/campus' element={<AddCampus />} />
        <Route path="/student/:studentId" element={<EditStudent />} />
      </Routes>
      <ToastContainer />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>
    </Router>
  );
}

export default App;
*/
