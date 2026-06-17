import { mockStores } from '../mockData';
import { MapPin, Phone, Clock } from 'lucide-react';

const OurStores = () => {
  return (
    <div className="page-wrapper dashboard-page">
      <div className="container">
        <section className="hero-section" style={{ padding: '3rem 0 2rem' }}>
          <h1 className="hero-title animate-slide-down">Our Stores</h1>
          <p className="hero-subtitle animate-fade-in">Find a BrewHaven near you and experience our total coffee experience.</p>
        </section>

        <div className="dashboard-grid" style={{ gridTemplateColumns: '1fr', gap: '2rem' }}>
          {mockStores.map((store, index) => (
            <div key={store.id} className="content-card animate-fade-in" style={{ animationDelay: `${0.1 * index}s`, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>{store.name}</h2>
                <button className="btn btn-outline btn-sm">Get Directions</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <MapPin size={20} className="text-primary" />
                  <span style={{ color: 'var(--text-muted)' }}>{store.address}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone size={20} className="text-primary" />
                  <span style={{ color: 'var(--text-muted)' }}>{store.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Clock size={20} className="text-primary" />
                  <span style={{ color: 'var(--text-muted)' }}>{store.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStores;
