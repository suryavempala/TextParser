import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <h1 className="navbar-brand" >{props.title}</h1>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About Us</Link>
      </li>
    </ul>
  </div>
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