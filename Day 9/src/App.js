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
import Students from './Components/Students';
import InsLogin from './Components/InsLogin';
import StuLogin from './Components/StuLogin';
import Faq from './Components/Faq';
import Terms from './Components/Terms';
import Privacy from './Components/Privacy';
import Fees from './Components/Fees';
import AttendanceAdmin from './Components/AttendanceAdmin';
import AttendanceStaff from './Components/AttendanceStaff';
import Grades from './Components/Grades';
import FeesForm from './Components/FeesForm';
import StaffPanel from './Components/StaffPanel';
import AboutUs from './Components/Aboutus';
import ContactUs from './Components/ContactUs';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Sidebar/>
    <Navbar/>
    <Routes>
    <Route path="/login" element ={<Login />}></Route>
    <Route path="/inslogin" element ={<InsLogin />}></Route>
    <Route path="/stulogin" element ={<StuLogin />}></Route>
    <Route path="/register" element ={<Signup />}></Route>
    <Route path="/courses" element ={<Courses/>}></Route>
    <Route path="/fees" element ={<Fees />}></Route>
    <Route path="/students" element ={<Students />}></Route>
    <Route path="/attendadmin" element ={<AttendanceAdmin />}></Route>
    <Route path="/sidebar" element ={<Sidebar/>}></Route>
    <Route path="/navbar" element ={<Navbar />}></Route>
    <Route path="/aboutus" element ={<AboutUs />}></Route>
    <Route path="/contactus" element ={<ContactUs/>}></Route>
    <Route path="/" element ={<Home />}></Route>
    <Route path="/studash" element ={<StudentDash/>}></Route>
    <Route path="/instructdash" element ={<InstructDash/>}></Route>
    <Route path="/admindash" element ={<AdminDashboard/>}></Route>
    <Route path="/faq" element ={<Faq/>}></Route>
    <Route path="/terms" element ={<Terms/>}></Route>
    <Route path="/staffpanel" element ={<StaffPanel/>}></Route>
    <Route path="/privacy" element ={<Privacy/>}></Route>
    <Route path="/attendstaff" element ={<AttendanceStaff/>}></Route>
    <Route path="/grades" element ={<Grades/>}></Route>
    <Route path="/feesform" element ={<FeesForm/>}></Route>
 
    <Route path="/fac-register" element ={<Facultysignup />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
