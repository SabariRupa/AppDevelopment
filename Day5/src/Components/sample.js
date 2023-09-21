import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SubjectIcon from '@mui/icons-material/Subject';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LogoutIcon from '@mui/icons-material/Logout';
function SideBar() {
    const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
  const handleMenuItemClick = (menuItemId) => {
    setActiveMenuItem(menuItemId);
  };

  return (
    <div className="sidebar-container">
      <Sidebar>
        <Menu className="menu">
          <header>
          <img  class="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIZGMJNCkAd0b103iuBn1hqZWAHJdSsBLeg&usqp=CAU"/>
          </header>
          <MenuItem component={<Link to="/" />}  icon={<SpaceDashboardIcon />}  onClick={() => handleMenuItemClick('Dashboard')}
          style={{ backgroundColor: activeMenuItem === 'Dashboard' ? 'rgb(51, 51, 241)' : 'transparent',borderRadius:50}} className="menu-item">Dashboard</MenuItem>
          <MenuItem component={<Link to="/courses" />} icon={<LibraryBooksIcon />} onClick={() => handleMenuItemClick('Courses')}
          style={{ backgroundColor: activeMenuItem === 'Courses' ? 'blue' : 'transparent',borderRadius:50}} className="menu-item">Courses</MenuItem>
          <MenuItem component={<Link to="/students" />} icon={< PeopleOutlineIcon/>} onClick={() => handleMenuItemClick('Students')}
          style={{ backgroundColor: activeMenuItem === 'Students' ? 'blue' : 'transparent',borderRadius:50}} className="menu-item">Students</MenuItem>
          <MenuItem component={<Link to="/subjects" />} icon={< SubjectIcon/>} onClick={() => handleMenuItemClick('Subjects')}
          style={{ backgroundColor: activeMenuItem === 'Subjects' ? 'blue' : 'transparent',borderRadius:50}} className="menu-item">Subjects</MenuItem>
          <MenuItem component={<Link to="/reports" />} icon={< ImportContactsIcon/>} onClick={() => handleMenuItemClick('Reports')}
          style={{ backgroundColor: activeMenuItem === 'Reports' ? 'blue' : 'transparent',borderRadius:50}} className="menu-item">Reports</MenuItem>
          <MenuItem icon={< LogoutIcon/>} className="menu-item-l">Logout</MenuItem>
          <footer>&copy; Copyright 2023 123.abc</footer>
          </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBar;