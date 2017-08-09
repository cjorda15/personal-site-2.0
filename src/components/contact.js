import React from 'react'

const Contact = () => {
  return(
    <div id="contact" className="contact-container">
      <h6>Contact</h6>
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
      <form className="contact-form" action="https://formspree.io/crobertjordan1991@yahoo.com"
      method="POST">
        <p> Feel free to send me a quick message if you would prefer</p>
        <input className="contact-form-input" type="text" name="name" placeholder="name"/>
        <input className="contact-form-input" type="email" name="_replyto" placeholder="email"/>
        <input className="contact-form-input" type="subject" name="subject" placeholder="subject"/>
        <textarea id="contact-textarea" className="contact-form-input" type="message" name="message" placeholder="message"></textarea>
        <input className="contact-form-btn" type="submit" value="Send"/>
      </form>
    </div>
  )
}

export default Contact
