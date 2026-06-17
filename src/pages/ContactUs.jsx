import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="page-wrapper dashboard-page">
      <div className="container">
        <section className="hero-section" style={{ padding: '3rem 0 2rem' }}>
          <h1 className="hero-title animate-slide-down">Contact Us</h1>
          <p className="hero-subtitle animate-fade-in">We'd love to hear from you. Reach out with any questions, feedback, or business inquiries.</p>
        </section>

        <div className="dashboard-grid">
          {/* Contact Info Sidebar */}
          <aside className="dashboard-sidebar animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="content-card">
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Get In Touch</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin className="text-primary" size={24} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.25rem' }}>Headquarters</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>123 Coffee Lane, Atlanta, GA 30309</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Phone className="text-primary" size={24} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.25rem' }}>Phone</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>+1 (555) 123-4567</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Mail className="text-primary" size={24} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.25rem' }}>Email</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>hello@brewhaven.com</span>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          {/* Contact Form */}
          <main className="dashboard-content animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="content-card">
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Send a Message</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" placeholder="Jane" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" placeholder="Doe" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="jane@example.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="5" placeholder="How can we help you today?" required style={{ resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-large w-full" style={{ marginTop: '1rem' }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
