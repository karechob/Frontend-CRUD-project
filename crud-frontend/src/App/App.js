import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from '../pages/Home';
import Campuses from '../pages/Campuses';
import Students from '../pages/Students';
import SingleCampus from '../pages/SingleCampus';
import SingleStudent from '../pages/SingleStudent';

function App() {
  return (
    <Router>
      {/* <div className='App'>
        <Home />
      </div> */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route exact path='/allstudents' element={<Students />} />
        <Route exact path='/allcampuses' element={<Campuses />} />
        <Route path="/campuses/:campusId" Component={SingleCampus} />
        <Route path="/student/:studentId" Component={SingleStudent} />
      </Routes>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>
    </Router>
  );
}

export default App;
