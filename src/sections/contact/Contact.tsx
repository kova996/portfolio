import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="contact-heading">
        <h1>
          Wanna <span>get in touch</span>?
        </h1>
      </div>
      <div className="contact-main">
        <div className="contact-content">a</div>
        <div className="contact-form">
          <form>
            <div className="name-input">
              <input type="text" name="name" id="name" />
              <label htmlFor="name">Name</label>
            </div>
            <div className="email-input">
              <input type="text" name="email" id="email" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="text-textarea">
              <textarea name="text" id="text"></textarea>
              <label htmlFor="text">Text</label>
            </div>
            <div className="submit-button">
              <input type="submit" id="submit"/>
              <label htmlFor="submit">Submit</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
