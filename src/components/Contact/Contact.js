import { useState } from "react";
import './Contact.css'

// checks for a valid email using regex
import { validateEmail } from "../../utils/validateEmail";

function Contact() {
  // Create state variables and set initial value to empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    // this function grabs value from wherever the user's cursor is to display inside the input by setting that state
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //check to see if email is valid and name is entered, if not, displays error message
    if (!validateEmail(email)) {
        setErrorMessage("Email is invalid");
        return;
    }

    if (!name) {
        setErrorMessage("Please enter your name");
        return; 
    }

    //check to see if message is entered by user
    if (!message) {
        setErrorMessage("A message is required.");
        return;
    }

    if (name && message && !validateEmail(email)) {
        setSuccessMessage("Your contact info was submitted!");
        return;
    }

    // clear input after user hits submit
    setName("");
    setMessage("");
    setEmail("");
    setErrorMessage("")
  };

  return (
    <section className="contact container m-3">
      <div className="row d-flex">
  

        {/* contact form section  */}
        <div className="contact-form col-12">
          <h3>Send Me a Message</h3>
          <form className="form">
            {/* Name */}
            <label for="contact-label">Fill out the fields below and I'll get back to you ASAP!</label>
            <input
              className="form-control mt-2 mb-2"
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            {/* Email */}

            <input
              className="form-control mt-2 mb-2"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            {/* Message */}
            <textarea
              className="form-control mt-2 mb-2"
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Send Me a Message!"
            />
            <button className="btn btn-secondary btn-contact-submit mt-2" type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
            <p className="error-text">{errorMessage}</p>
            <p className="success-text">{successMessage}</p>
      </div>
    </section>
  );
}

export default Contact;