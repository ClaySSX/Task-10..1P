import React from 'react';
import './Header.css'


const Header= (props)=>{
    return(
    <header id="header">
    <div className="logo"> {props.htext}</div>
    <nav className="menu">
    <ul>
        <li></li>
      </ul>
    </nav>
  </header>
  )
  }
  
export default Header;
