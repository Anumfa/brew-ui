import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login, redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="page-wrapper auth-page flex-center">
      <div className="container">
        <div className="auth-card glass-panel animate-slide-down">
          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Log in to access your favorite brews and saved orders.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
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
                  placeholder="Enter your password"
                  required 
                />
              </div>
              <div className="forgot-password">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full btn-large">
              Log In <ArrowRight size={18} />
            </button>
          </form>

          <div className="auth-footer">
            <p>Don't have an account? <Link to="/register" className="text-primary">Sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
