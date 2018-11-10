import React from 'react';

const Contact = () => (
  <div className = "container text-center" id = "contactContainer">
      <h3 id = "contact">Get in touch</h3>
      <input type = "text" placeholder = "Name" id ="from" class = "contactForm" /><br />
      <input type = "text" placeholder = "Email" id = "email" class = "contactForm" /><br />
      <input type = "text" placeholder = "Topic" id = "message" class = "contactForm" /><br />
    <button type = "button" class = "btn btn-default" id = "submit">Submit</button>
  </div>
)

export default Contact;
