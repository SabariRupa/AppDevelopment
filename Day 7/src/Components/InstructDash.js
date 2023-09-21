import React, { useState } from 'react';
import { Sidebar as sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Sidebar.css'; 
import { Link, useNavigate } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SubjectIcon from '@mui/icons-material/Subject';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import LogoutIcon from '@mui/icons-material/Logout';
import ThreePIcon from '@mui/icons-material/ThreeP';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
function InstructDash() {
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
        <div id="contents">
        <MenuItem  component={<Link to="" />}  icon={<SpaceDashboardIcon/>}  onClick={() => handleMenuItemClick('dash')}
        style={{ backgroundColor: activeMenuItem === 'dash' ? '#022766' : 'transparent',}}> Dashboard</MenuItem>
          
            <MenuItem component={<Link to="" />} icon={<AccountBoxIcon />}  onClick={() => handleMenuItemClick('prof')}
            style={{ backgroundColor: activeMenuItem === 'prof' ? '#022766' : 'transparent',}}>Profile</MenuItem>

            <MenuItem component={<Link to="" />} icon={<LibraryBooksIcon />}  onClick={() => handleMenuItemClick('courses')}
            style={{ backgroundColor: activeMenuItem === 'courses' ? '#022766' : 'transparent',}}> Courses</MenuItem>

            <MenuItem component={<Link to="" />} icon={< SubjectIcon/>} onClick={() => handleMenuItemClick('sub')}
            style={{ backgroundColor: activeMenuItem === 'sub' ? '#022766' : 'transparent',}}> Subjects </MenuItem>

            <MenuItem  component={<Link to="" />} icon={< ImportContactsIcon/>} onClick={() => handleMenuItemClick('rep')}
            style={{ backgroundColor: activeMenuItem === 'rep' ? '#022766' : 'transparent', }}> Reports</MenuItem>

            <MenuItem   component={<Link to="" />} icon={<BeenhereIcon/>} onClick={() => handleMenuItemClick('act')}
            style={{ backgroundColor: activeMenuItem === 'act' ? '#022766' : 'transparent', }}> Grade point</MenuItem>

            <MenuItem    component={<Link to="" />} icon={<SupervisedUserCircleIcon/>} onClick={() => handleMenuItemClick('ins')}
            style={{ backgroundColor: activeMenuItem === 'ins' ? '#022766' : 'transparent',}}>Students</MenuItem>
          </div>
          <MenuItem onClick={handleLogout} icon={< LogoutIcon/>}  id="logout">  Logout</MenuItem>
        </Menu>
        <footer>
  <p>&copy; 2023 ABCD . All Rights Reserved.</p>
</footer>

      </sidebar>
    </div>
  );
}

export default InstructDash;
