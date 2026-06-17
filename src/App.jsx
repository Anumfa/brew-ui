import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import OurCoffee from './pages/OurCoffee';
import OurStores from './pages/OurStores';
import ContactUs from './pages/ContactUs';
import Shop from './pages/Shop';
import CoffeeDetails from './pages/CoffeeDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const AppContent = () => {
  const location = useLocation();
  const isWelcomePage = location.pathname === '/';

  return (
    <div className="app">
      {!isWelcomePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/our-coffee" element={<OurCoffee />} />
        <Route path="/stores" element={<OurStores />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/coffee/:id" element={<CoffeeDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!isWelcomePage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
