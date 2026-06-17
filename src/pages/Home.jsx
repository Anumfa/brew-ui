import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CoffeeCard from '../components/CoffeeCard';
import { mockData, mockBanners } from '../mockData';
import './Home.css';

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % mockBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Show a few featured coffees on the homepage
  const featuredCoffees = mockData.filter(item => item.type === 'Coffee').slice(0, 3);

  return (
    <div className="page-wrapper home-page">
      
      {/* Banner Carousel */}
      <section className="banner-carousel">
        {mockBanners.map((banner, index) => (
          <div 
            key={banner.id}
            className={`banner-slide ${index === currentBanner ? 'active' : ''}`}
            style={{ backgroundImage: `url(${banner.image_url})` }}
          >
            <div className="banner-overlay"></div>
            <div className="banner-content">
              <h2 className="banner-title animate-slide-down">{banner.title}</h2>
              <p className="banner-subtitle animate-fade-in">{banner.subtitle}</p>
              <Link to="/our-coffee" className="btn btn-primary mt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Order Now
              </Link>
            </div>
          </div>
        ))}
        
        <div className="banner-indicators">
          {mockBanners.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${index === currentBanner ? 'active' : ''}`}
              onClick={() => setCurrentBanner(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      <div className="container">
        {/* Featured Section */}
        <section className="featured-section" style={{ padding: '4rem 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', color: 'var(--text-main)', textTransform: 'uppercase', fontWeight: 800 }}>Featured Brews</h2>
              <p style={{ color: 'var(--text-muted)' }}>Handpicked favorites to start your day right.</p>
            </div>
            <Link to="/our-coffee" className="btn btn-outline">View Full Menu</Link>
          </div>
          
          <div className="coffee-grid">
            {featuredCoffees.map((coffee, index) => (
              <CoffeeCard key={coffee.id} coffee={coffee} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
