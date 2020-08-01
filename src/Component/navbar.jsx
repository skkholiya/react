import React, { Component } from 'react';
const NavBar = ({totalNumberCount}) => {
    console.log("navbar rendered");
    return( <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar <span className='badge badge-pill badge-secondary'>{totalNumberCount}</span></a>
 </nav> );
}
export default NavBar;