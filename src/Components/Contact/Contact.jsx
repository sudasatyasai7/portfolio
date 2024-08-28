import React from 'react';
import './contact.css';
import theme from '../../assets/theme_pattern.svg';
import mail from '../../assets/mail_icon.svg';
import call from '../../assets/call_icon.svg';
import location from '../../assets/location_icon.svg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    formData.append("access_key", "d794d866-b7f6-4d19-a45d-387b10f80454");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
  
      const result = await res.json();
  
      console.log("API Response:", result); // Check this output
  
      if (result.success) {
        console.log("Success:", result);
        alert("Form submitted successfully!"); // Add user feedback
      } else {
        console.error("Error:", result.message || "Form submission failed");
        alert(`Error: ${result.message || "Form submission failed"}`); // Add user feedback
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network error. Please try again later."); // Add user feedback
    }
  };
  

  return (
    <div className='contact' id='contact'>
      <div className='contact-title'>
        <h1>Get In Touch</h1>
        <img src={theme} alt="Theme Pattern" />
      </div>
      <div className='left-right'>
        <div className='contact-left'>
          <h2>Let's talk</h2>
          <p>I'm currently available to take on new projects,</p><p> so feel free to send me a message about anything that you want me to work on.</p>
          <p>You can contact me anytime.</p>
          <div className='contact-in'>
            <div className='contact-details'>
              <img src={mail} alt="Email Icon" />
              <p>satyasai9883@gmail.com</p>
            </div>
            <div className='contact-details'>
              <img src={call} alt="Call Icon" />
              <p>7995419883</p>
            </div>
            <div className='contact-details'>
              <img src={location} alt="Location Icon" />
              <p>Amaravathi, India</p>
            </div>
          </div>
        </div>
        <div className='contact-right'>
          <form onSubmit={onSubmit}>
            <p>Your Name</p>
            <input type='text' name='name' placeholder='Enter your name' required />
            <p>Your Email</p>
            <input type='email' name='email' placeholder='Enter Your Email' required />
            <p>Write your message here</p>
            <textarea name='message' cols='40' rows='5' placeholder='Enter your message' required></textarea>
            <button type='submit' className='sub'>Submit now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
