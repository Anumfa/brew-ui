import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-overlay"></div>
      <div className="welcome-content animate-slide-down">
        <h1 className="welcome-title">Welcome to BrewHaven</h1>
        <p className="welcome-subtitle">Experience the finest coffee, curated just for you.</p>
        <Link to="/home" className="btn btn-primary welcome-btn">
          Enter Site <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
