import React, { useState } from 'react';
import { Sidebar as sidebar, Menu, MenuItem, } from 'react-pro-sidebar';
import './Sidebar.css'; 
import { Link, useNavigate } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SubjectIcon from '@mui/icons-material/Subject';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LogoutIcon from '@mui/icons-material/Logout';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
function StudentDash() {
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
        <MenuItem  component={<Link to="" />}  icon={<SpaceDashboardIcon/>}  onClick={() => handleMenuItemClick('studash')}
        style={{ backgroundColor: activeMenuItem === 'studash' ? '#1e478f' : 'transparent',borderRadius:15,width:250}}> Dashboard</MenuItem>
          
            <MenuItem component={<Link to="" />} icon={<AccountBoxIcon />}  onClick={() => handleMenuItemClick('stuprof')}
            style={{ backgroundColor: activeMenuItem === 'stuprof' ? '#1e478f' : 'transparent',borderRadius:15,width:250}}>My Profile</MenuItem>

            <MenuItem component={<Link to="" />} icon={<LibraryBooksIcon />}  onClick={() => handleMenuItemClick('stucourses')}
            style={{ backgroundColor: activeMenuItem === 'stucourses' ? '#1e478f' : 'transparent',borderRadius:15,width:250}}> Courses</MenuItem>

            <MenuItem component={<Link to="" />} icon={< SubjectIcon/>} onClick={() => handleMenuItemClick('stusub')}
            style={{ backgroundColor: activeMenuItem === 'stusub' ? '#1e478f' : 'transparent',borderRadius:15,width:250}}> Subjects </MenuItem>

            <MenuItem  component={<Link to="" />} icon={< ImportContactsIcon/>} onClick={() => handleMenuItemClick('sturep')}
            style={{ backgroundColor: activeMenuItem === 'sturep' ? '#1e478f' : 'transparent',borderRadius:15,width:250}}> Reports</MenuItem>

            <MenuItem   component={<Link to="" />} icon={<ListAltIcon />} onClick={() => handleMenuItemClick('activity')}
            style={{ backgroundColor: activeMenuItem === 'activity' ? '#1e478f' : 'transparent',borderRadius:15,width:250 }}> Activities</MenuItem>

            <MenuItem    component={<Link to="" />} icon={<PermContactCalendarIcon/>} onClick={() => handleMenuItemClick('contact-men')}
            style={{ backgroundColor: activeMenuItem === 'contact-men' ? '#1e478f' : 'transparent',borderRadius:15,width:250}}>Contact Mentor</MenuItem><br/><br/>
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

export default StudentDash;
