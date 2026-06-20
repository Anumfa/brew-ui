import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CoffeeCard from '../components/CoffeeCard';
import SearchBar from '../components/SearchBar';
import { mockData } from '../mockData';

const OurCoffee = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Check if there's a filter in the state (from navigation)
    if (location.state && location.state.filter) {
      setActiveTab(location.state.filter);
    }
  }, [location]);

  // Filter items that are either Coffee or Dessert
  const menuItems = mockData.filter(item => item.type === 'Coffee' || item.type === 'Dessert');
  
  const tabFilteredItems = activeTab === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.type === activeTab);

  const finalFilteredItems = tabFilteredItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-wrapper home-page">
      <div className="container">
        <section className="hero-section" style={{ padding: '3rem 0 2rem' }}>
          <h1 className="hero-title animate-slide-down">Our Menu</h1>
          <p className="hero-subtitle animate-fade-in">Discover our handcrafted beverages and fresh baked pastries.</p>
        </section>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="menu-filters" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <button 
            className={`btn ${activeTab === 'All' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('All')}
          >
            All Items
          </button>
          <button 
            className={`btn ${activeTab === 'Coffee' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('Coffee')}
          >
            Coffee
          </button>
          <button 
            className={`btn ${activeTab === 'Dessert' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('Dessert')}
          >
            Desserts
          </button>
        </div>

        <section className="coffee-grid">
          {finalFilteredItems.length > 0 ? (
            finalFilteredItems.map((item, index) => (
              <CoffeeCard key={item.id} coffee={item} index={index} />
            ))
          ) : (
            <div className="no-results animate-fade-in">
              <p>No items found matching your search. Try a different keyword!</p>
              <button 
                className="btn btn-primary mt-4"
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default OurCoffee;
