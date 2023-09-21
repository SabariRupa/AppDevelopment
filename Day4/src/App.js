import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/login.js';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Facultysignup from './Components/Facultysignup';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import StudentDash from './Components/StudentDash';
import InstructDash from './Components/InstructDash';
import AdminDashboard from './Components/AdminDashboard';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
    <Routes>
    <Route path="/login" element ={<Login />}></Route>
    <Route path="/register" element ={<Signup />}></Route>
    <Route path="/" element ={<Home />}></Route>
    
    <Route path="/studash" element ={<StudentDash/>}></Route>
    <Route path="/instructdash" element ={<InstructDash/>}></Route>
    <Route path="/Admindash" element ={<AdminDashboard/>}></Route>
 
    <Route path="/fac-register" element ={<Facultysignup />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
