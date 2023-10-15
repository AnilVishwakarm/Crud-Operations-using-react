import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../css/header.css';

const MyHeader = ()=> {
    return (
       
        <>
        <Navbar collapseOnSelect expand="lg" style={{height:"80px", backgroundColor:"#0B0B45"}}>

                       <img
                       className="rounded-circle border border-light m-2"
                       src="logo1.jpg"
                       style={{
                        height:"40px",
                        width:"40px",
                       borderRadius:"30px"}}
                       />
                       <Navbar.Brand className="text-light">
                        BaazarHub
                        </Navbar.Brand>
                        <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        style={{background:"#ff0000",
                        marginRight:'10px'}}
                          />


                          <Navbar.Collapse
                          id='respnsive-navbar-nav'>

                            <Nav className="mr-auto">

                                <NavDropdown title="location" id="Nav-Navdropdown-title" >

                                    
                            <NavDropdown.Item>
                            <NavLink to="/state">
                                <label className="btn btn-dark">state</label>
                                </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                            <NavLink to="/City">
                                <label className="btn btn-dark">City</label>
                                </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                            <NavLink to="/Area">
                                <label className="btn btn-dark">Area</label>
                                </NavLink>
                            </NavDropdown.Item>

                                </NavDropdown>

                            </Nav>

                             <Nav className="mr-auto">
                             <NavLink to="/">
                             <label className="btn btn-dark">Home</label>
                             </NavLink>
                             </Nav>

                             <Nav className="mr-auto">
                             <NavLink to="/about">
                             <label className="btn btn-dark">About</label>
                             </NavLink>
                             </Nav>

                             <Nav className="mr-auto">
                             <NavLink to="/registration">
                             <label className="btn btn-dark">Registration</label>
                             </NavLink>
                             </Nav>

                             <Nav className="mr-auto">
                             <NavLink to="/report">
                             <label className="btn btn-dark">Report</label>
                             </NavLink>
                             </Nav>

                            
                          </Navbar.Collapse>
                        
                          </Navbar>
        </>
    );
}
export default MyHeader;