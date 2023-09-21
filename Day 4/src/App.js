import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/login.js';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Facultysignup from './Components/Facultysignup';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/login" element ={<Login />}></Route>
    <Route path="/register" element ={<Signup />}></Route>
    <Route path="/" element ={<Home />}></Route>
    <Route path="/fac-register" element ={<Facultysignup />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
