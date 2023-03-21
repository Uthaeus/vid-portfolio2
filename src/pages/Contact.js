import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-image-wrapper">
        <img
          className="contact-image"
          src={require("../assets/images/space.png")}
          alt=""
        />
      </div>

      <div className="contact-info-wrapper">
        <h2>Homer J. Simpson</h2>
        <p>123 Anystreet, Springfield, IL</p>
        <p>(555)555-5555</p>
        <p>homerjsimpson@fakemail.net</p>

        <div className="contact-social-wrapper">
          <a href="www.instagram.com" target="_blank">
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </a>
          <a href="www.facebook.com" target="_blank">
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
          </a>
          <a href="www.tiktok.com" target="_blank">
          <FontAwesomeIcon icon="fa-brands fa-tiktok" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
