import React, { useState } from "react";
import "./styles/Contact.css";

export default function Contact() {
  const [contactMessage, setContactMessage] = useState<string>("");
  const [isActive, setIsActive] = useState<Boolean>(false);
  const handleContactForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsActive(true)
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.message.value = "";
    setTimeout(()=>{
      setContactMessage("Message successfully sent!");
    }, 500);
    setTimeout(() => {
      setContactMessage("");
      setIsActive(false);
    }, 2500);
  };
  return (
    <div className="contact-form-container">
      {contactMessage.length !== 0 ? 'Message sent successfully.' : (<form className={`contact-form ${isActive ? 'active' : 'inactive' }`} onSubmit={handleContactForm}>
        <h2 className="contact-form-h2">Contact Us</h2>
        <label className="contact-form_label" htmlFor="contact-name">
          Name:
        </label>
        <input
          className="contact-form_input"
          type="text"
          id="contact-name"
          name="name"
          required
          autoComplete="off"
        />

        <label className="contact-form_label" htmlFor="contact-email">
          Email:
        </label>
        <input
          className="contact-form_input"
          type="email"
          id="contact-email"
          name="email"
          required
          autoComplete="off"
        />

        <label className="contact-form_label" htmlFor="message">
          Message:
        </label>
        <textarea
          className="contact-form_textarea"
          id="message"
          name="message"
          required
        ></textarea>
        <button type="submit" className="contact-form_button">
          Send
        </button>
      </form>)}
    </div>
  );
}
