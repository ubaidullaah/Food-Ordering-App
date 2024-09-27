import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, getTotalPrice, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    setOrderPlaced(true);
    clearCart();
  };

  const handleAddMoreItems = () => {
    navigate('/'); // Navigate to HomePage
    setTimeout(() => {
      const menuElement = document.getElementById('menu'); // Assuming the menu section has this ID
      if (menuElement) {
        menuElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center tracking-wide">
          {orderPlaced ? 'Order placed. Thank You!' : 'Your Cart'}
        </h2>

        {cartItems.length === 0 && !orderPlaced ? (
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Your cart is empty</h3>
            <p className="text-gray-600 mb-6">It seems you haven’t added any items yet.</p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow transition duration-300"
              onClick={handleAddMoreItems} // Updated this line
            >
              Explore Menu
            </button>
          </div>
        ) : orderPlaced ? (
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800">Order placed successfully!</h3>
            <p className="text-gray-600 mt-4">Thank you for your purchase.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 bg-white p-10 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold mb-6 text-gray-900">Your Order</h3>
              <ul className="space-y-6">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                      <p className="text-gray-600 text-sm">Rs {item.price}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-bold text-gray-900">Rs {item.price}</span>
                      <button
                        className="text-red-600 hover:text-red-800 font-semibold"
                        onClick={() => removeFromCart(item)} // Call remove function with item
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleAddMoreItems} // Updated this line
                className="mt-6 block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow transition duration-300"
              >
                Add More Items
              </button>
            </div>

            {/* Total Price and Checkout */}
            <div className="bg-white p-10 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold mb-8 text-gray-900">Order Summary</h3>
              <div className="border-b-2 pb-4 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-medium text-gray-700">Subtotal</span>
                  <span className="text-lg font-semibold text-gray-900">Rs {getTotalPrice()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-700">Delivery Charges</span>
                  <span className="text-lg font-semibold text-gray-900">Rs 100</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-gray-900">Rs {getTotalPrice() + 100}</span>
              </div>

              <button
                className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg shadow-lg transition duration-300"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
