import React from 'react'
import NavBar from './nav_links'
const Header = () => {
  return(
    <div>
      <header id="top">
        <div className="header-left-container">
          <h3>welcome to my site</h3>
        </div>
        <div className="header-right-container">
          <button className="navbar-toggle">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
      </header>
      <NavBar/>
    </div>
  )
}

export default Header
