// import { useState } from "react";
import './Contact.css'
import { AiOutlineMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";


export default function Contact() {
    return (
        <>
        <h1 className="res-header contact-card mt-300">Contact me using one of the methods below:</h1>
        
  <div className='row d-flex justify-content-around m-2'>
<div className="card-body contact-list res-body">
        <li><AiOutlineMail /> randibrown21@gmail.com</li>
        <li><AiFillPhone /> 503-320-2723</li> 
        <li><FaGithub /> <a href="https://github.com/randirose" className="contact-links" target='_blank'>https://github.com/randirose</a></li>
 
  <div className="extra-links"><p>Check out my skills and download my resume on the 'Resume' tab. <a href='./MirandaBrown.pdf' className="contact-links" download>Download my Certificate of Completion</a> from my full-stack bootcamp and <a href='./BCGradesWithAvgs-comments.pdf' className="contact-links" download>check out my grades and comments here.</a><br /></p></div>
</div> </div>


</>
    );
  }

// // checks for a valid email using regex
// import { validateEmail } from "../../utils/validateEmail";

// function Contact() {
//   // Create state variables and set initial value to empty string
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleInput = (e) => {
//     // this function grabs value from wherever the user's cursor is to display inside the input by setting that state
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     // Based on the input type, we set the state of either email, name, and message
//     if (inputType === "email") {
//       setEmail(inputValue);
//     } else if (inputType === "name") {
//       setName(inputValue);
//     } else {
//       setMessage(inputValue);
//     }
//   };

//   const handleInputChange = (e) => {
//     if (e.target.name === 'email') {
//         const isValid = validateEmail(e.target.value);
//         if (!isValid) {
//           setErrorMessage('Your email is invalid.');
//         } else {
//           setErrorMessage('');
//         }
//       } else {
//         if (!e.target.value.length) {
//           setErrorMessage(`A ${e.target.name} is required.`);
//         } else {
//           setErrorMessage('');
//         }
//       }

//   }

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (name && message && validateEmail(email)) {
//             // clear input after user hits submit
//         setName("");
//         setMessage("");
//         setEmail("");
//         setErrorMessage("");
//         setSuccessMessage("Your contact info was submitted!");
//         return;
//     }


//   };

//   return (
//     <section className="contact container m-3">
//       <div className="row d-flex">
  

//         {/* contact form section  */}
//         <div className="contact-form col-12">
//           <h3>Send Me a Message</h3>
//           <form className="form">
//             {/* Name */}
//             <label for="contact-label">Fill out the fields below and I'll get back to you ASAP!</label>
//             <input
//               className="form-control mt-2 mb-2"
//               value={name}
//               name="name"
//               onBlur={handleInputChange}
//               onChange={handleInput}
//               type="text"
//               id="contact-name"
//               placeholder="Your Name"
//             />

//             {/* Email */}

//             <input
//               className="form-control mt-2 mb-2"
//               value={email}
//               name="email"
//               onBlur={handleInputChange}
//               onChange={handleInput}
//               type="email"
//               id="contact-email"
//               placeholder="Your Email"
//             />

//             {/* Message */}
//             <textarea
//               className="form-control mt-2 mb-2"
//               value={message}
//               name="message"
//               onBlur={handleInputChange}
//               onChange={handleInput}
//               type="message"
//               id="contact-message"
//               placeholder="Send Me a Message!"
//             />
//             <button className="btn btn-secondary btn-contact-submit mt-2" type="button" onClick={handleFormSubmit}>
//               Submit
//             </button>
//           </form>
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//         {successMessage && (
//           <div>
//             <p className="success-text">{successMessage}</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }