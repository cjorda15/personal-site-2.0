import React from 'react'
import Header from "./header.js"
import GreetingContainer from './greeting_container'
import InitialSummary from './inital_summary.js'
import Skills from './skills.js'
import SideNavBar from './side_nav_bar'
import Projects from './projects'

const App = () => {
  return(
    <div className="app">
      <Header/>
      <SideNavBar/>
      <GreetingContainer/>
      <InitialSummary/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
