import React, { useRef, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Import CartContext
import { useNavigate } from 'react-router-dom';

// Importing images
import pizza1 from '../assets/pizza1.jpg';
import pizza2 from '../assets/pizza2.jpg';
import pizza3 from '../assets/pizza3.jpg';
import pizza4 from '../assets/pizza4.jpg';
import burger1 from '../assets/burger1.jpg';
import burger2 from '../assets/burger2.jpg';
import burger3 from '../assets/burger3.jpg';
import burger4 from '../assets/burger4.jpg';
import drink1 from '../assets/drink1.jpg';
import drink2 from '../assets/drink2.jpg';
import drink3 from '../assets/drink3.jpg';
import drink4 from '../assets/drink4.jpg';

// Importing the background image
import background from '../assets/background.jpg';

const HomePage = () => {
  const menuRef = useRef(null);
  const { addToCart } = useContext(CartContext); // Use CartContext
  const [addedMessage, setAddedMessage] = useState(false); // State for showing added message
  const navigate = useNavigate();

  const scrollToMenu = () => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (item) => {
    addToCart(item); // Add item to cart
    setAddedMessage(true); // Show message when item added
    setTimeout(() => setAddedMessage(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        className="bg-gray-800 h-screen flex flex-col justify-center items-center text-white relative"
        style={{
          backgroundImage: `url(${background})`, // Add the background image
          backgroundSize: 'cover', // Ensure the image covers the section
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Avoid repeating the image
        }}
      >
        {/* Order Now button at the top right */}
        <div className="absolute top-6 right-6">
          <button
            className="bg-red-500 px-6 py-3 text-lg font-semibold rounded hover:bg-red-600"
            onClick={scrollToMenu}
          >
            Order Now
          </button>
        </div>

        {/* Centered heading and subheading */}
        <h1 className="text-5xl font-bold mb-4">Welcome to Cheezious Pizza</h1>
        <p className="text-xl mb-6">The Best Pizza, Burgers, and Drinks in Town</p>
        
        {addedMessage && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
            Item added to cart.{' '}
            <button onClick={() => navigate('/cart')} className="underline">
              Go to Cart
            </button>
          </div>
        )}
      </section>

      {/* Menu Section */}
      <section id="menu" ref={menuRef} className="py-16 bg-gray-100">
        <h2 className="text-4xl text-center font-bold mb-12">Our Menu</h2>

        {/* Pizza Menu */}
        <h3 className="text-3xl font-bold mb-6 text-center">Pizzas</h3>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {[pizza1, pizza2, pizza3, pizza4].map((pizza, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img src={pizza} alt={`Pizza ${index + 1}`} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-2xl font-bold mb-2">{["Margherita", "Pepperoni", "Veggie Delight", "BBQ Chicken"][index]}</h3>
                <p className="mt-2 text-lg font-semibold text-gray-900">Price: Rs { [1000, 1200, 1500, 2000][index] }</p>
                <button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() =>
                    handleAddToCart({
                      name: ["Margherita", "Pepperoni", "Veggie Delight", "BBQ Chicken"][index],
                      price: [1000, 1200, 1500, 2000][index],
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Burger Menu */}
        <h3 className="text-3xl font-bold mb-6 text-center">Burgers</h3>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {[burger1, burger2, burger3, burger4].map((burger, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img src={burger} alt={`Burger ${index + 1}`} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-2xl font-bold mb-2">{["Cheeseburger", "Chicken Burger", "Veggie Burger", "Double Patty"][index]}</h3>
                <p className="mt-2 text-lg font-semibold text-gray-900">Price: Rs { [500, 600, 800, 1000][index] }</p>
                <button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() =>
                    handleAddToCart({
                      name: ["Cheeseburger", "Chicken Burger", "Veggie Burger", "Double Patty"][index],
                      price: [500, 600, 800, 1000][index],
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cold Drinks Menu */}
        <h3 className="text-3xl font-bold mb-6 text-center">Cold Drinks</h3>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {[drink1, drink2, drink3, drink4].map((drink, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <img src={drink} alt={`Drink ${index + 1}`} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-2xl font-bold mb-2">{["Coke", "Pepsi", "Sprite", "Fanta"][index]}</h3>
                <p className="mt-2 text-lg font-semibold text-gray-900">Price: Rs { [100, 120, 130, 150][index] }</p>
                <button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() =>
                    handleAddToCart({
                      name: ["Coke", "Pepsi", "Sprite", "Fanta"][index],
                      price: [100, 120, 130, 150][index],
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Go to Cart Button */}
      <div className="text-center my-8">
        <button
          className="bg-blue-500 text-white px-6 py-3 text-lg font-semibold rounded hover:bg-blue-600"
          onClick={() => navigate('/cart')}
        >
          Go to Cart
        </button>
      </div>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Cheezious Pizza. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
