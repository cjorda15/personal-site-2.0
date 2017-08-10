import React from 'react'

const GreetingContainer = () => {
  return(
    <div className="greeting-container">
      <div className="greeting-container-img">
        <div className='greeting-main'>
          <div className="greeting-headline">
            <p className="greeting-main-text">Christopher Jordan</p>
            <span id="greeting-line-animation-1"></span>
          </div>
          <p className="greeting-main-subtext">Front End Engineer</p>
        </div>
        <div className="contact-links">
        <a target="_blank" id="link-1" href="mailto:crobertjordan@yahoo.com?Subject=Hello" target="_top">
            <img src="img_folder/Email.png"/>
          </a>
          <a target="_blank" id="link-2" href="tel:303-726-2125">
            <img src="img_folder/Phone.png"/>
          </a>
          <a target="_blank" id="link-3" href="https://github.com/cjorda15">
            <img src="img_folder/GitHub.png"/>
          </a>
          <a target="_blank" id="link-4" href="https://www.linkedin.com/in/christopher-jordan-7a1139121/">
            <img src="img_folder/LinkedIn.png"/>
          </a>
        </div>
      </div>
    </div>
  )
}


export default GreetingContainer
