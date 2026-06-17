import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import './CoffeeCard.css';

const CoffeeCard = ({ coffee, index }) => {
  return (
    <div 
      className="coffee-card animate-fade-in" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-image-wrapper">
        <img src={coffee.image_url} alt={coffee.name} className="card-image" />
        <div className="card-category">{coffee.category}</div>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{coffee.name}</h3>
          <span className="card-price">${coffee.price.toFixed(2)}</span>
        </div>
        <p className="card-description">{coffee.description}</p>
        <div className="card-footer">
          <Link to={`/coffee/${coffee.id}`} className="btn-details">
            View Details <ArrowRight size={16} />
          </Link>
          <button className="btn-icon" aria-label="Add to cart">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
