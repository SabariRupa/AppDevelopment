import React, { useState } from 'react';
import { Sidebar as sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Sidebar.css'; 
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { Link, useNavigate } from 'react-router-dom';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SubjectIcon from '@mui/icons-material/Subject';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LogoutIcon from '@mui/icons-material/Logout';
import ThreePIcon from '@mui/icons-material/ThreeP';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice';
function Sidebar() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const name=useSelector((state) => state.user.user);
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
    <>
{name?(<>
    <div className="sidebar-container">
      <sidebar collapsed={window.innerWidth <= 768}>
        <Menu >
        <div id="contents">
            <MenuItem  component={<Link to="/adminDash" />}  icon={<SpaceDashboardIcon/>}  onClick={() => handleMenuItemClick('dash')}
            style={{ backgroundColor: activeMenuItem === 'dash' ? '#022766' : 'transparent',}}> Dashboard</MenuItem>

            <MenuItem component={<Link to="/courses" />} icon={<LibraryBooksIcon />}  onClick={() => handleMenuItemClick('courses')}
            style={{ backgroundColor: activeMenuItem === 'courses' ? '#022766' : 'transparent',}}> Courses</MenuItem>

            <MenuItem component={<Link to="/instructors" />} icon={<  ThreePIcon/>}  onClick={() => handleMenuItemClick('ins')}
            style={{ backgroundColor: activeMenuItem === 'ins' ? '#022766' : 'transparent',}}> Instructors </MenuItem>

          <MenuItem  component={<Link to="/students" />} icon={< PeopleOutlineIcon/>} onClick={() => handleMenuItemClick('stu')}
          style={{ backgroundColor: activeMenuItem === 'stu' ? '#022766' : 'transparent',}}> Students </MenuItem>

          <MenuItem component={<Link to="/subjects" />} icon={< SubjectIcon/>} onClick={() => handleMenuItemClick('sub')}
          style={{ backgroundColor: activeMenuItem === 'sub' ?'#022766' : 'transparent',}}> Subjects </MenuItem>

          <MenuItem  component={<Link to="/reports" />} icon={< ImportContactsIcon/>} onClick={() => handleMenuItemClick('rep')}
          style={{ backgroundColor: activeMenuItem === 'rep' ? '#022766' : 'transparent', }}> Reports</MenuItem>
          </div>

          <MenuItem onClick={handleLogout} icon={< LogoutIcon/>} id="logout">  Logout</MenuItem><br/><br/>
          <footer>
         <p>&copy; 2023 ABCD . All Rights Reserved.</p>
  </footer>
          </Menu>


      </sidebar>
    </div>
    </>):(<></>)}
    </>
  );
}

export default Sidebar;
