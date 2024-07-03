import "../styles/contactPage.scss";

import { useState, FormEvent } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log("Form submitted", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        Have questions or suggestions? We'd love to hear from you! Fill out the
        form below to get in touch with our team.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
