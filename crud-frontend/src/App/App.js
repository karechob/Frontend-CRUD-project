import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from '../pages/Home';
import Campuses from '../pages/Campuses';
import Students from '../pages/Students';
import SingleCampus from '../pages/SingleCampus';
import SingleStudent from '../pages/SingleStudent';

function App() {
  return (
    <Router>
    {/* <div className='App'>
      <Home/>
    </div> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/allstudents' element={<Students/>} />
      <Route path='/allcampuses' element={<Campuses/>} />
      <Route path='/campus' element={<SingleCampus/>} />
      <Route path='/student' element={<SingleStudent/>} />
    </Routes>
    </Router>
  );
}

export default App;
