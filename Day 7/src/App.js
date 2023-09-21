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
import Courses from './Components/Courses';
import Instructors from './Components/Instructors';
import Students from './Components/Students';
import Reports from './Components/Reports';
import Subjects from './Components/Subjects';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
    <Routes>
    <Route path="/login" element ={<Login />}></Route>
    <Route path="/register" element ={<Signup />}></Route>
    <Route path="/courses" element ={<Courses/>}></Route>
    <Route path="/instructors" element ={<Instructors />}></Route>
    <Route path="/students" element ={<Students />}></Route>
    <Route path="/reports" element ={<Reports />}></Route>
    <Route path="/subjects" element ={<Subjects />}></Route>
    <Route path="/sidebar" element ={<Sidebar/>}></Route>
    <Route path="/navbar" element ={<Navbar />}></Route>
    <Route path="/" element ={<Home />}></Route>
    
    <Route path="/studash" element ={<StudentDash/>}></Route>
    <Route path="/instructdash" element ={<InstructDash/>}></Route>
    <Route path="/admindash" element ={<AdminDashboard/>}></Route>
 
    <Route path="/fac-register" element ={<Facultysignup />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
