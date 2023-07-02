import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from '../pages/Home';
import Campuses from '../pages/Campuses';
import Students from '../pages/Students';

function App() {
  return (
    <Router>
    <div className='App'>
      <Home/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/allstudents' element={<Students/>} />
      <Route path='/allcampuses' element={<Campuses/>} />
      {/* <Route path='/student' element={<SingleStudent/>} />
      <Route path='/campus' element={<SingleCampus/>} /> */}
    </Routes>
    </Router>
  );
}

export default App;
