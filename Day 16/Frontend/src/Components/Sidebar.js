import React, { useEffect, useState } from 'react';
import { Sidebar as sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Sidebar.css'; 
import { Link, useNavigate } from 'react-router-dom';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SubjectIcon from '@mui/icons-material/Subject';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LogoutIcon from '@mui/icons-material/Logout';
import ThreePIcon from '@mui/icons-material/ThreeP';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import BeenhereIcon from '@mui/icons-material/Beenhere';
function Sidebar() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const name=localStorage.getItem("email")
  const type=localStorage.getItem("role")

  const handleMenuItemClick = (menuItemId) => {
    setActiveMenuItem(menuItemId);
  };
  const nav=useNavigate();
  const dispatch=useDispatch();
  const handleLogout=()=>{
    if(window.confirm("Are you sure?")){
      localStorage.clear()
      nav("/")
    }
  }
  return (
    <>
{name&&type==="ADMIN"?(<>
    <div className="sidebar-container">
      <sidebar collapsed={window.innerWidth <= 768}>
        <Menu >
        <div id="contents">
            <MenuItem  component={<Link to="/adminDash" />}  icon={<SpaceDashboardIcon/>}  onClick={() => handleMenuItemClick('dash')}
            style={{ backgroundColor: activeMenuItem === 'dash' ? '#1e478f' : 'transparent',borderRadius:15,width:250}}> Dashboard</MenuItem>
            
            <MenuItem  component={<Link to="/students" />} icon={< PeopleOutlineIcon/>} onClick={() => handleMenuItemClick('stu')}
            style={{ backgroundColor: activeMenuItem === 'stu' ? '#1e478f' : 'transparent',borderRadius:15,width:250}}> Students </MenuItem>

            <MenuItem component={<Link to="/courses" />} icon={<LibraryBooksIcon />}  onClick={() => handleMenuItemClick('courses')}
            style={{ backgroundColor: activeMenuItem === 'courses' ? '#1e478f' : 'transparent',borderRadius:15,width:250}}> Courses</MenuItem>

            
            <MenuItem component={<Link to="/attendadmin" />} icon={<  ThreePIcon/>}  onClick={() => handleMenuItemClick('attend')}
            style={{ backgroundColor: activeMenuItem === 'attend' ? '#1e478f' : 'transparent',borderRadius:15,width:250}}>Attendance</MenuItem>


          <MenuItem component={<Link to="/fees" />} icon={< SubjectIcon/>} onClick={() => handleMenuItemClick('fees')}
          style={{ backgroundColor: activeMenuItem === 'fees' ?'#1e478f' : 'transparent',borderRadius:15,width:250}}>Fee Manager</MenuItem>

          </div>

          <MenuItem onClick={handleLogout} icon={< LogoutIcon/>} id="logout" >  Logout</MenuItem><br/><br/>
          <footer>
         <p>&copy; 2023 ABCD . All Rights Reserved.</p>
  </footer>
          </Menu>


      </sidebar>
    </div>
    </>):(<>
      {name&&type==="INSTRUCTOR"?(<>
    <div className="sidebar-container">
    <sidebar collapsed={window.innerWidth <= 768}>
      <Menu >
      <div id="contents">
      <MenuItem  component={<Link to="/staffpanel" />}  icon={<SpaceDashboardIcon/>}  onClick={() => handleMenuItemClick('insdash')}
      style={{ backgroundColor: activeMenuItem === 'insdash' ? '#1e478f' : 'transparent',borderRadius:15,width:250}}> Dashboard</MenuItem>
        
          <MenuItem  icon={<AccountBoxIcon  />}  component={<Link to="/courses" />}  onClick={() => handleMenuItemClick('insprof')}
          style={{ backgroundColor: activeMenuItem === 'insprof' ? '#1e478f' : 'transparent',borderRadius:15,width:250}}>Courses</MenuItem>

          <MenuItem   component={<Link to="/grades" />} icon={<BeenhereIcon/>} onClick={() => handleMenuItemClick('insgrade')}
          style={{ backgroundColor: activeMenuItem === 'insgrade' ? '#1e478f' : 'transparent',borderRadius:15,width:250 }}> Grade point</MenuItem>

         

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
        </>):(<>
          
          </>)}
      </>)}
    </>
  );
}

export default Sidebar;
