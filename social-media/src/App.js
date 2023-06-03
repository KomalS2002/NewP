import './App.css';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    
      <Router>
        <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/profile/:username' element={<Profile/>}></Route>
        </Routes>
        </div>
      </Router>
    
  );
}

export default App;
