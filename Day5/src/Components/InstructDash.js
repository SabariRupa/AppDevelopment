import React, { useState } from 'react';
import { Sidebar as sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Sidebar.css'; 

function InstructDash() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (menuItemId) => {
    setActiveMenuItem(menuItemId);
  };
  return (

    <div className="sidebar-container">
      <sidebar collapsed={window.innerWidth <= 768}>
      <header >
      <img class ="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hg7-zcRhhTCaa9QppL_6b4aYJm0CL-oU4hem187kCA&s"/>
      </header>
        <Menu >
        <div id="contents">
            <MenuItem  onClick={() => handleMenuItemClick('dash')}
            style={{ backgroundColor: activeMenuItem === 'dash' ? 'aliceblue' : 'transparent',}}> Dashboard</MenuItem>
            <MenuItem  onClick={() => handleMenuItemClick('stu')}
            style={{ backgroundColor: activeMenuItem === 'stu' ? 'aliceblue' : 'transparent',}}>Profile</MenuItem>
            <MenuItem  onClick={() => handleMenuItemClick('courses')}
            style={{ backgroundColor: activeMenuItem === 'courses' ? 'aliceblue' : 'transparent',}}> Courses</MenuItem>
            <MenuItem  onClick={() => handleMenuItemClick('sub')}
            style={{ backgroundColor: activeMenuItem === 'sub' ? 'aliceblue' : 'transparent',}}> Subjects </MenuItem>
            <MenuItem  onClick={() => handleMenuItemClick('rep')}
            style={{ backgroundColor: activeMenuItem === 'rep' ? 'aliceblue' : 'transparent', }}> Reports</MenuItem>
            <MenuItem  onClick={() => handleMenuItemClick('act')}
            style={{ backgroundColor: activeMenuItem === 'act' ? 'aliceblue' : 'transparent', }}> Grade point</MenuItem>
            <MenuItem  onClick={() => handleMenuItemClick('ins')}
            style={{ backgroundColor: activeMenuItem === 'ins' ? 'aliceblue' : 'transparent',}}>Students</MenuItem>
          </div>
          <MenuItem id="logout">  Logout</MenuItem>
        </Menu>
        <footer>
  <p>&copy; 2023 ABCD . All Rights Reserved.</p>
</footer>

      </sidebar>
    </div>
  );
}

export default InstructDash;
