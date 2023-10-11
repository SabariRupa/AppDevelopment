import React, { useEffect, useState } from 'react';
import { Sidebar as sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Sidebar.css'; 
import { Link, useNavigate } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
function InstructDash() {

  const token=localStorage.getItem("token")
  useEffect(()=>{

    if(token===null){
      nav("/inslogin")
      
    }
  },[])
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleMenuItemClick = (menuItemId) => {
    setActiveMenuItem(menuItemId);
  };
  const nav=useNavigate();
  const dispatch=useDispatch();
  const handleLogout=()=>{
    if(window.confirm("Are you sure?")){
      dispatch(logout())
      nav("/")
    }
  }
  return (

    <div className="sidebar-container">
      <sidebar collapsed={window.innerWidth <= 768}>
        <Menu >
        <div id="ins-contents">
        <br/>
        <MenuItem  component={<Link to="/staffpanel" />}  icon={<SpaceDashboardIcon/>}  onClick={() => handleMenuItemClick('insdash')}
        style={{ backgroundColor: activeMenuItem === 'insdash' ? '#1e478f' : 'transparent',borderRadius:15,width:250}}> Dashboard</MenuItem>
          
            <MenuItem component={<Link to="/courses" />} icon={<AccountBoxIcon />}  onClick={() => handleMenuItemClick('insprof')}
            style={{ backgroundColor: activeMenuItem === 'insprof' ? '#1e478f' : 'transparent',borderRadius:15,width:250}}>Courses</MenuItem>

            <MenuItem   component={<Link to="/grades" />} icon={<BeenhereIcon/>} onClick={() => handleMenuItemClick('insgrade')}
            style={{ backgroundColor: activeMenuItem === 'insgrade' ? '#1e478f' : 'transparent',borderRadius:15,width:250 }}> Grade point</MenuItem>

            <MenuItem  component={<Link to="/reports" />} icon={< ImportContactsIcon/>} onClick={() => handleMenuItemClick('insrep')}
            style={{ backgroundColor: activeMenuItem === 'insrep' ? '#1e478f' : 'transparent',borderRadius:15,width:250 }}> Reports</MenuItem>

            <MenuItem    component={<Link to="/attendstaff" />} icon={<SupervisedUserCircleIcon/>} onClick={() => handleMenuItemClick('insattend')}
            style={{ backgroundColor: activeMenuItem === 'insattend' ? '#1e478f' : 'transparent',borderRadius:15,width:250}}>Attendance</MenuItem><br/><br/>
          </div>
          <MenuItem onClick={handleLogout} icon={< LogoutIcon/>}  id="ins-logout">  Logout</MenuItem>
          <br/><br/><br/><br/>
        </Menu>  
        <footer>
  <p  class="ins-foot">&copy; 2023 ABCD . All Rights Reserved.</p>
</footer>
      </sidebar>
    </div>
  );
}

export default InstructDash;
