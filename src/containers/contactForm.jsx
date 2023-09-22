import React from 'react';
import emailjs from 'emailjs-com';
import './contactForm.css';

function ContactForm({ closeModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const message = e.target.message.value;
    const fullMessage = `Email: ${email}\n\n${message}`;
    emailjs.send('service_nr7jzj9', 'template_osx54eh', {
      message: fullMessage,
    }, 'KkjkhW8yAtrCx3rHJ')
      .then((result) => {
        console.log(result.text);
        closeModal();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contactContainer">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="form-buttons">
          <button type="submit" className="contact-form-button">Send</button>
          <button type="button" onClick={closeModal} className="contact-form-button">Close</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
