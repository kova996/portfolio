import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

import "./Contact.css";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Submit the form data here
  };

  return (
    <div className="contact">
      <div className="contact-heading">
        <h1>
          Wanna <span>get in touch</span>?
        </h1>
      </div>
      <div className="contact-main">
        <div className="contact-content">
          <p>
            I would love to hear from you! If you have any questions, feedback,
            or ideas for collaboration, please fill out the contact form and I
            will get back to you as soon as possible.
          </p>
          <br />
          <p>
            If it is more convinient to you, you can also contact me using these
            platforms.
          </p>
          <ul className="contact-links">
            <li className="contact-link">
              <a
                href="https://www.linkedin.com/in/luka-kovacusic/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li className="contact-link">
              <a href="https://github.com/kova996" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="contact-link">
              <a href="mailto:lukakovacusic@gmail.com">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-separator"></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="name-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="email-input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="message-textarea">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="submit-button">
            <button type="submit" id="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
