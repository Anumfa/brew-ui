import { User, Settings, ShoppingBag, LogOut, Clock } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  // Mock user and orders
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    memberSince: 'Oct 2023'
  };

  const recentOrders = [
    { id: 'ORD-001', date: 'Oct 24, 2023', total: 12.50, status: 'Delivered', items: 'Caramel Macchiato, Croissant' },
    { id: 'ORD-002', date: 'Oct 20, 2023', total: 8.75, status: 'Delivered', items: 'Iced Matcha Latte' },
    { id: 'ORD-003', date: 'Oct 15, 2023', total: 15.20, status: 'Delivered', items: 'Mocha Frappuccino, Brownie' },
  ];

  return (
    <div className="page-wrapper dashboard-page">
      <div className="container">
        <div className="dashboard-header animate-slide-down">
          <h1>My Account</h1>
          <p>Welcome back, {user.name.split(' ')[0]}!</p>
        </div>

        <div className="dashboard-grid">
          {/* Sidebar */}
          <aside className="dashboard-sidebar animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="user-profile-card glass-panel">
              <div className="user-avatar">
                <User size={40} />
              </div>
              <h3>{user.name}</h3>
              <p className="user-email">{user.email}</p>
              <div className="member-badge">Member since {user.memberSince}</div>
            </div>

            <nav className="dashboard-nav glass-panel mt-4">
              <a href="#" className="dash-nav-item active">
                <ShoppingBag size={18} /> Orders
              </a>
              <a href="#" className="dash-nav-item">
                <Settings size={18} /> Settings
              </a>
              <a href="#" className="dash-nav-item text-danger">
                <LogOut size={18} /> Log Out
              </a>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="dashboard-content animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="content-card glass-panel">
              <div className="card-header-flex">
                <h2>Recent Orders</h2>
                <button className="btn btn-outline btn-sm">View All</button>
              </div>

              <div className="orders-list">
                {recentOrders.map((order, index) => (
                  <div key={order.id} className="order-item" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <div className="order-icon">
                      <Clock size={20} />
                    </div>
                    <div className="order-details">
                      <div className="order-meta">
                        <span className="order-id">{order.id}</span>
                        <span className="order-date">{order.date}</span>
                      </div>
                      <p className="order-items">{order.items}</p>
                    </div>
                    <div className="order-status-price">
                      <span className="order-price">${order.total.toFixed(2)}</span>
                      <span className="status-badge status-delivered">{order.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
