// Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaMusic, FaSpinner
} from "react-icons/fa";
import "../css/Contact.css";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (formData) => {
    const errors = {};
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    if (!name) errors.name = "Name is required";
    else if (name.length < 2) errors.name = "Name must be at least 2 characters";

    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email";
    }

    if (!message) errors.message = "Message is required";
    else if (message.length < 10)
      errors.message = "Message must be at least 10 characters";

    return errors;
  };

  const sendForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      document.getElementById(Object.keys(errors)[0])?.focus();
      return;
    }

    setIsLoading(true);
    setNotification(null);
    setFormErrors({});

    try {
      // 1. Send message to you
      await emailjs.sendForm(
        "service_nv97mqn",       // ✅ Your Service ID
        "template_zc20zdf",      // ✅ Inbox Template ID
        form.current,
        "_zkdCZCAzlxxbJYoC"      // ✅ Your Public Key
      );

      // 2. Send auto-reply to user
      await emailjs.send(
        "service_nv97mqn",       // ✅ Same Service ID
        "template_p5sbz6h",      // ✅ Auto-Reply Template ID (same)
        {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message")
        },
        "_zkdCZCAzlxxbJYoC"      // ✅ Same Public Key
      );

      setNotification({
        type: "success",
        message: "Message sent! Check your inbox for confirmation.",
      });
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setNotification({
        type: "error",
        message: "Message failed to send. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name } = e.target;
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>

        {notification && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}

        <form ref={form} className="contact-form" onSubmit={sendForm}>
          <div className="form-group">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleInputChange}
              className={formErrors.name ? "error-field" : ""}
              required
            />
            {formErrors.name && (
              <span className="error-message">{formErrors.name}</span>
            )}
          </div>

          <div className="form-group">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleInputChange}
              className={formErrors.email ? "error-field" : ""}
              required
            />
            {formErrors.email && (
              <span className="error-message">{formErrors.email}</span>
            )}
          </div>

          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              onChange={handleInputChange}
              className={formErrors.message ? "error-field" : ""}
              required
            />
            {formErrors.message && (
              <span className="error-message">{formErrors.message}</span>
            )}
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <FaSpinner className="spinner" /> Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      <div className="social-icons">
        <a href="https://www.facebook.com/share/1aeJrN99UA/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.instagram.com/sohailshabbir04" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="mailto:sohailshabbir2005@gmail.com"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/sohail-shabbir-064033351" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.tiktok.com/@sohail.shabeer4" target="_blank" rel="noopener noreferrer"><FaMusic /></a>
      </div>
    </section>
  );
};

export default Contact;
