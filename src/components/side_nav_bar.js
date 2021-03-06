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
           <a className="side-nav-link" href="#top">
             <span className="side-nav-text" style={linkStyle}>top</span>
             <span id="dot-1" className="side-nav-dot"></span>
           </a>
         </li>
          <li>
           <a className="side-nav-link" href="#about-me">
             <span className="side-nav-text" style={linkStyle}>about me</span>
             <span id="dot-2" className="side-nav-dot"></span>
           </a>
         </li>
          <li>
           <a className="side-nav-link" href="#skills">
             <span className="side-nav-text" style={linkStyle}>skills</span>
             <span id="dot-3" className="side-nav-dot"></span>
           </a>
         </li>
          <li>
           <a className="side-nav-link" href="#projects">
             <span className="side-nav-text" style={linkStyle}>projects</span>
             <span id="dot-4" className="side-nav-dot"></span>
           </a>
         </li>
         <li>
          <a className="side-nav-link" href="#resume">
            <span className="side-nav-text" style={linkStyle}>resume</span>
            <span id="dot-5" className="side-nav-dot"></span>
          </a>
        </li>
          <li>
           <a className="side-nav-link" href="#contact">
             <span className="side-nav-text" style={linkStyle}>contact</span>
             <span id="dot-6" className="side-nav-dot"></span>
           </a>
         </li>
        </ul>
      </div>
    )
  }
}

export default SideNavBar
