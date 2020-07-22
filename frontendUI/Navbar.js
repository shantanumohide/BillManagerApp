import React from 'react';
import logo from './logo.png';
import {NavLink} from "react-router-dom";
// import NavbarTabs from './NavbarTabs.js'


function Navbar(){   
    return( 
        
            <div className="navbar">
                <div className="left-side"> 
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/Createbill">CREATE BILL</NavLink>
                </div>

                <div className="right-side">
                   <img src={logo} alt="logo" width="50px" height="50px"/>
                </div>
            </div>
            
            );
}



export default Navbar;