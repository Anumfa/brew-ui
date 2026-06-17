import CoffeeCard from '../components/CoffeeCard';
import { mockData } from '../mockData';

const Shop = () => {
  const shopItems = mockData.filter(item => item.type === 'Shop');

  return (
    <div className="page-wrapper home-page">
      <div className="container">
        <section className="hero-section" style={{ padding: '3rem 0 2rem' }}>
          <h1 className="hero-title animate-slide-down">Shop BrewHaven</h1>
          <p className="hero-subtitle animate-fade-in">Take the BrewHaven experience home with our signature beans and exclusive merchandise.</p>
        </section>

        <section className="coffee-grid">
          {shopItems.map((item, index) => (
            <CoffeeCard key={item.id} coffee={item} index={index} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Shop;
