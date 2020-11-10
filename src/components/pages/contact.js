import React, { useState } from "react";
import axios from "axios";


function Contact() {
  const [postEmail, setPostEmail] = useState({
    email: "",
    name: "",
    text: ""
  })

  const handleInputChange = event => {
    const { name, value } = event.target;

    setPostEmail({
      ...postEmail,
      [name]: value
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    axios.post("/api/submit", postEmail)
      .then(res => {
        console.log(res);
        saySent();
      })
      .catch(err => {
        console.log(err);
      })
  }

  const saySent = event => {
    alert('Thank you! Your Message Sent!')
  }

  return (
    <>
      <form>
        <fieldset>
          <h3 className="text">Contact Fernando</h3>
          <hr />
          <div className="form-group">
            <label className="text">Your Name</label>
            <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Enter your name" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label className="text">Email address</label>
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter your email" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label className="text">Message</label>
            <textarea className="form-control" id="text" name="text" rows="3" placeholder="Message here..." onChange={handleInputChange}></textarea>
          </div>
          <button type="submit" className="btn btn-outline-secondary contactBtn submit" onClick={handleFormSubmit}>Submit</button>
        </fieldset>
      </form>
    </>
  );
}

export default Contact;
