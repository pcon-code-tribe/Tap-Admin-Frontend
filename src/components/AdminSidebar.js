//import useState hook to create menu collapse state
import React, { useState } from "react";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./AdminSidebar.css";

import { Link } from 'react-router-dom';
import image from "../assets/img/logoNITJSR.png";

//import react pro sidebar components
import {ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent, SubMenu } from "react-pro-sidebar";

//import icons from react icons
import { FiHome, FiLogOut, FiArrowLeftCircle } from "react-icons/fi";
import {BsFillPeopleFill}from 'react-icons/bs';
import {GrView} from 'react-icons/gr';
import { BiCog, BiTask } from "react-icons/bi";
import {IoNotificationsOutline} from 'react-icons/io5';
import {FaBars} from 'react-icons/fa';


const AdminSidebar = ({routes}) => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader className="text-center">
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              {menuCollapse ? (<FaBars onClick={menuIconClick} className="text-center" cursor="pointer"/>) : (<div className="logo d-flex align-items-center justify-content-space-around">
          <a href="http://www.nitjsr.ac.in/" className="simple-text logo-mini mx-1">
            <div className="logo-img">
              <img src={image}  alt="..."  height="35px" width="35px"  className="m-2" />
            </div>
          </a>
          <a className="simple-text" href="http://www.nitjsr.ac.in/tap/portfolio/"><strong>ADMIN PORTAL</strong></a>
          <div className="closemenu" onClick={menuIconClick}><FiArrowLeftCircle/></div>
        </div> 
        
        )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                <Link to={routes[0].layout + routes[0].path} > Dashboard </Link>
              </MenuItem>
              <SubMenu title="Students" icon={<BsFillPeopleFill />}>
              <SubMenu title="Applied">
              <MenuItem>
              <Link to={routes[1].layout + routes[1].path} >Branchwise </Link>
              </MenuItem>
              <MenuItem>
              <Link to={routes[2].layout + routes[2].path} >Companywise </Link>
              </MenuItem>
              </SubMenu>
              <SubMenu title="Selected">
              <MenuItem>
              <Link to={routes[3].layout + routes[3].path} >Branchwise </Link>
              </MenuItem>
              <MenuItem>
              <Link to={routes[4].layout + routes[4].path} >Companywise </Link>
              </MenuItem>
              </SubMenu>
              </SubMenu>
              <SubMenu title="View Jobs" icon={<GrView />}>
              <MenuItem>
              <Link to={routes[5].layout + routes[5].path} > Branchwise </Link>
              </MenuItem>
              <MenuItem>
              <Link to={routes[6].layout + routes[6].path} >Companywise</Link>
              </MenuItem>
              </SubMenu>
              <MenuItem icon={<BiTask />}>
              <Link to={routes[7].layout + routes[7].path} >Add Jobs </Link>
              </MenuItem>
              <MenuItem icon={<IoNotificationsOutline />}>
              <Link to={routes[8].layout + routes[8].path} > Notifications </Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
            <MenuItem icon={<BiCog />}>Settings
            <Link to={routes[9].layout + routes[9].path} />
            </MenuItem>
              <MenuItem icon={<FiLogOut />}> 
              <Link to="/">Logout</Link>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default AdminSidebar;