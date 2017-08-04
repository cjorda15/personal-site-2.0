import React from 'react'
import Header from "./header.js"
import GreetingContainer from './greeting_container'
import InitialSummary from './inital_summary.js'
import Skills from './skills.js'
const App = () => {
  return(
    <div className="app">
      <Header/>
      <GreetingContainer/>
      <InitialSummary/>
      <Skills/>
    </div>
  )
}

export default App
