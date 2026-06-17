import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Social */}
          <div className="footer-section">
            <h2 className="footer-brand">BrewHaven</h2>
            <p className="footer-description">
              Crafting perfect moments, one cup at a time. Join us in celebrating the rich, bold flavors of our ethically sourced beans and daily fresh bakes.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Social 1"><Globe size={20} /></a>
              <a href="#" aria-label="Social 2"><Globe size={20} /></a>
              <a href="#" aria-label="Social 3"><Globe size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/our-coffee">Our Menu</Link></li>
              <li><Link to="/shop">Shop BrewHaven</Link></li>
              <li><Link to="/stores">Store Locator</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li><MapPin size={18} /> 123 Coffee Lane, Atlanta, GA</li>
              <li><Phone size={18} /> +1 (555) 123-4567</li>
              <li><Mail size={18} /> hello@brewhaven.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe for updates, exclusive offers, and brewing tips.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Email Address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BrewHaven Coffee Co. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
