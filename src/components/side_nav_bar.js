import React,{ Component } from 'react'

class SideNavBar extends Component {
  constructor(){
    super()
  }


  render(){
  const linkStyle ={display:"none"}

    return(
      <div className="side-nav-links">
        <ul>
          <li>
           <a className="side-nav-link" href="#about-me">
           <span className="side-nav-text" style={linkStyle}>about me</span>
           <span className="side-nav-dot"></span>
           </a>
         </li>
          <li>
           <a className="side-nav-link" href="#skills">
           <span className="side-nav-text" style={linkStyle}>skills</span>
           <span className="side-nav-dot"></span>
           </a>
         </li>
          <li>
           <a className="side-nav-link" href="#projects">
           <span className="side-nav-text" style={linkStyle}>projects</span>
           <span className="side-nav-dot"></span>
           </a>
         </li>
          <li>
           <a className="side-nav-link" href="#resume">
           <span className="side-nav-text" style={linkStyle}>resume</span>
           <span className="side-nav-dot"></span>
           </a>
         </li>
          <li>
           <a className="side-nav-link" href="#contact">
           <span className="side-nav-text" style={linkStyle}>contact</span>
           <span className="side-nav-dot"></span>
           </a>
         </li>
        </ul>
      </div>
    )
  }
}

export default SideNavBar
