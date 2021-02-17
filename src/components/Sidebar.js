import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

//Admin Navbar
function Sidebar({ image, routes }) {
  return (
    <div>
      <div>
        <div className="logo d-flex align-items-center justify-content-start">
          <a href="http://www.nitjsr.ac.in/" className="simple-text logo-mini mx-1">
            <div className="logo-img">
              <img src={image}  alt="..."  height="35px" width="35px"  className="m-2" />
            </div>
          </a>
          <a className="simple-text" href="http://www.nitjsr.ac.in/tap/portfolio/">ADMIN PORTAL</a>
        </div>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav mr-auto" navbar>
              <NavItem>
                <NavLink to={routes[0].layout + routes[0].path} className="nav-link" activeClassName="active">
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavDropdown title="Student" id="basic-nav-dropdown">
                  <NavDropdown title="Applied" id="basic-nav-dropdown" drop="right">
                    <NavLink to={routes[1].layout + routes[1].path} className="nav-link" activeClassName="active">
                      Branchwise
                    </NavLink>
                    <NavLink to={routes[2].layout + routes[2].path} className="nav-link" activeClassName="active">
                      Companywise
                    </NavLink>
                  </NavDropdown>
                  <NavDropdown title="Selected" id="basic-nav-dropdown" drop="right">
                    <NavLink to={routes[3].layout + routes[3].path} className="nav-link" activeClassName="active">
                      Branchwise
                    </NavLink>
                    <NavLink to={routes[4].layout + routes[4].path} className="nav-link" activeClassName="active">
                      Companywise
                    </NavLink>
                  </NavDropdown>
                </NavDropdown>
              </NavItem>
              <NavItem>
                <NavDropdown title="Jobs/Internships" id="basic-nav-dropdown">
                  <NavLink to={routes[5].layout + routes[5].path} className="nav-link" activeClassName="active">
                    Branchwise
                  </NavLink>
                  <NavLink to={routes[6].layout + routes[6].path} className="nav-link" activeClassName="active">
                    Companywise
                  </NavLink>
                </NavDropdown>
              </NavItem>
              <NavItem>
                <NavLink to={routes[7].layout + routes[7].path} className="nav-link" activeClassName="active">
                  Notifications
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto">
              <NavItem>
                <NavDropdown title="Name" id="basic-nav-dropdown">
                  <NavLink to={routes[8].layout + routes[8].path} className="nav-link" activeClassName="active">
                    Profile
                  </NavLink>
                  <NavLink to={routes[9].layout + routes[9].path} className="nav-link" activeClassName="active">
                    Settings
                  </NavLink>
                  <NavItem>
                    <NavLink to={""} className="nav-link" activeClassName="active">
                      Logout
                  </NavLink>
                  </NavItem>
                </NavDropdown>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Sidebar;
