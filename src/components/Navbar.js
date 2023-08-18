import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <h1 className="navbar-brand" >{props.title}</h1>
   

  <div className={`custom-control custom-switch text-${props.mode==='dark'?'light':'dark'}`}>
  <input type="checkbox" className="custom-control-input" onClick={props.toggle} id="customSwitches"/>
  <label className="custom-control-label" htmlFor="customSwitches">{props.mode ==='light'? "Enable for DarkMode":"Disable for Lightmode"}</label>
  </div>
   
  </nav>
  )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
}

Navbar.defaultProps ={
    title:'Please set title here',
    aboutText:'About Us'
}