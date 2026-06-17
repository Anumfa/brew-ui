import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Clock, Flame, Droplet } from 'lucide-react';
import { mockData } from '../mockData';
import './CoffeeDetails.css';

const CoffeeDetails = () => {
  const { id } = useParams();
  const coffee = mockData.find(c => c.id === parseInt(id));

  if (!coffee) {
    return (
      <div className="page-wrapper container flex-center">
        <div className="error-message">
          <h2>Coffee not found</h2>
          <Link to="/" className="btn btn-primary mt-4">Back to Menu</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper coffee-details-page">
      <div className="container">
        <Link to="/" className="back-link animate-fade-in">
          <ArrowLeft size={20} /> Back to Menu
        </Link>

        <div className="details-container">
          {/* Image Section */}
          <div className="details-image-section animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="image-wrapper glass-panel">
              <img src={coffee.image_url} alt={coffee.name} className="details-image" />
              <div className="category-badge">{coffee.category}</div>
            </div>
          </div>

          {/* Info Section */}
          <div className="details-info-section animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="details-title">{coffee.name}</h1>
            
            <div className="details-meta">
              <div className="meta-item">
                <Star size={18} className="icon-star" />
                <span>4.9 (128 reviews)</span>
              </div>
              <div className="meta-item">
                <Clock size={18} />
                <span>5 mins</span>
              </div>
            </div>

            <div className="details-price">${coffee.price.toFixed(2)}</div>

            <p className="details-description">{coffee.description}</p>

            <div className="ingredients-section">
              <h3>What's inside</h3>
              <ul className="ingredients-list">
                {coffee.ingredients.map((ingredient, index) => (
                  <li key={index} className="ingredient-item">
                    <Droplet size={16} className="text-primary" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div className="customization-section">
              <h3>Size</h3>
              <div className="size-options">
                <button className="size-btn">Regular</button>
                <button className="size-btn active">Large</button>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn btn-primary btn-large w-full">
                <Flame size={20} /> Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
