import type { FC } from 'react';
import './Contact.css';

interface ContactProps {
  address: string;
}

const Contact: FC<ContactProps> = ({ address }) => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Visit Us</h2>
        <div className="contact-details">
          <div className="contact-info">
            <h3>Our Address</h3>
            <p>{address}</p>
            <h3>Contact</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@thewaterside.in</p>
          </div>
          <div className="map-placeholder">
            <p>Map will be displayed here.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;