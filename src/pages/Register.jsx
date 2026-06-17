import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock registration, redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="page-wrapper auth-page flex-center">
      <div className="container">
        <div className="auth-card glass-panel animate-slide-down">
          <div className="auth-header">
            <h2>Join BrewHaven</h2>
            <p>Create an account to save your favorite coffees and speed up checkout.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name</label>
              <div className="input-with-icon">
                <User className="input-icon" size={18} />
                <input 
                  type="text" 
                  id="name" 
                  className="form-control" 
                  placeholder="John Doe"
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <Mail className="input-icon" size={18} />
                <input 
                  type="email" 
                  id="email" 
                  className="form-control" 
                  placeholder="Enter your email"
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <div className="input-with-icon">
                <Lock className="input-icon" size={18} />
                <input 
                  type="password" 
                  id="password" 
                  className="form-control" 
                  placeholder="Create a password"
                  required 
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full btn-large">
              Create Account <ArrowRight size={18} />
            </button>
          </form>

          <div className="auth-footer">
            <p>Already have an account? <Link to="/login" className="text-primary">Log in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
