import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Coffee, User, LogIn, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const handleMenuClick = (filter) => {
    setDropdownOpen(false);
    setIsOpen(false);
    navigate('/our-coffee', { state: { filter } });
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/home" className="navbar-logo">
          <Coffee size={28} className="logo-icon" />
          <span>BrewHaven</span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-menu">
          <Link to="/home" className={`nav-link ${isActive('/home')}`}>Home</Link>
          
          <div 
            className="nav-dropdown-container" 
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className={`nav-link ${isActive('/our-coffee')}`} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              Our Menu <ChevronDown size={16} style={{ transition: 'transform 0.3s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
            </button>
            
            {dropdownOpen && (
              <div className="nav-dropdown-menu">
                <button onClick={() => handleMenuClick('All')} className="dropdown-item">All Items</button>
                <button onClick={() => handleMenuClick('Coffee')} className="dropdown-item">Coffee</button>
                <button onClick={() => handleMenuClick('Dessert')} className="dropdown-item">Desserts</button>
              </div>
            )}
          </div>

          <Link to="/stores" className={`nav-link ${isActive('/stores')}`}>Our Stores</Link>
          <Link to="/shop" className={`nav-link ${isActive('/shop')}`}>Shop</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact Us</Link>
          
          <div className="nav-actions">
            <Link to="/login" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              <LogIn size={16} /> Login
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/home" className={`nav-link ${isActive('/home')}`} onClick={() => setIsOpen(false)}>Home</Link>
        <button onClick={() => handleMenuClick('Coffee')} className="nav-link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}>- Coffee</button>
        <button onClick={() => handleMenuClick('Dessert')} className="nav-link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}>- Desserts</button>
        <Link to="/stores" className={`nav-link ${isActive('/stores')}`} onClick={() => setIsOpen(false)}>Our Stores</Link>
        <Link to="/shop" className={`nav-link ${isActive('/shop')}`} onClick={() => setIsOpen(false)}>Shop</Link>
        <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsOpen(false)}>Contact Us</Link>
        <div className="mobile-nav-actions">
          <Link to="/login" className="btn btn-outline w-full" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
