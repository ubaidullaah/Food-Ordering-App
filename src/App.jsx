import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';  // Importing CartContext

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />  {/* Home page route */}
          <Route path="/cart" element={<CartPage />} />  {/* Cart page route */}
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;


