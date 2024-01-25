// components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="contact" style={{textAlign:'center'}}>
      <h2>Contact Us</h2>
      <p>
        Feel free to reach out to us with any questions or inquiries. We'd love to hear from you!
      </p>

      <div className="contact-form" >
        <form style={{textAlign:'center',margin:'20px'}}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" style={{marginTop:'10px'}}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
