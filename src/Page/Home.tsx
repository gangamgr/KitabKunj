import React, { useState } from "react";
import { useCart } from "../PageComponent/CartContext"; // Ensure the correct path to CartContext
import { BsArrowRightShort } from "react-icons/bs";
import candle2 from "../Resources/R.jpg";
import candle1 from "../Resources/candle1.jpg";
import mmm from "../Resources/q.jpg";
import logo from "../Resources/logo.png";

// Interface for books
interface Book {
  title: string;
  price: string;
  imageUrl: string;
}

// Best Sellers Data
const bestSellers: Book[] = [
  {
    title: 'As a Man Thinketh',
    price: '₹59.00',
    imageUrl: candle1,
  },
  {
    title: 'Relativity',
    price: '₹129.00',
    imageUrl: candle2,
  },
  {
    title: 'The Origin of Species',
    price: '₹159.00',
    imageUrl: mmm,
  },
  {
    title: 'The Art of War',
    price: '₹39.00',
    imageUrl: logo,
  },
];

// Discover Books Data
const discoverBooks: Book[] = [
  {
    title: 'Three Men in a Boat',
    price: '₹99.00',
    imageUrl: candle2,
  },
  {
    title: 'Othello',
    price: '₹70.00',
    imageUrl: candle1,
  },
  {
    title: 'Nationalism',
    price: '₹69.00',
    imageUrl: mmm,
  },
  {
    title: 'As a Man Thinketh',
    price: '₹59.00',
    imageUrl: logo,
  },
];

const Home: React.FC = () => {
  const { addToCart, cartItems } = useCart(); // Accessing CartContext
  const [searchQuery, setSearchQuery] = useState(""); // State to handle search query

  // Filter books based on search query
  const filteredBestSellers = bestSellers.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDiscoverBooks = discoverBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle adding an item to the cart
  const handleAddToCart = (book: Book) => {
    addToCart(book); // Pass the book object to add it to the cart
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Cart Indicator */}
      <div className="fixed top-4 right-4 bg-blue-600 text-white p-2 rounded-lg shadow-md">
        
        <span>Cart Items: {cartItems.length}</span> {/* Show the number of cart items */}
      </div>

      {/* Main Banner Section */}
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-4xl font-bold text-gray-900">Discover Your Next Favorite Book Here</h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore our curated collection of new and popular books to find your next literary adventure.
        </p>

        {/* Search Box */}
        <div className="mt-8">
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 w-96 text-center"
            placeholder="Which book are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Handle search input change
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="mt-16 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center">Categories</h2>
        <p className="text-center text-gray-600 mb-8">Browse our featured categories</p>
        <div className="flex justify-center space-x-8">
          {/* Category 1 */}
          <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden">
            <img src={candle1} alt="Manga" className="w-full h-48 object-cover" />
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold">Manga</h3>
            </div>
          </div>

          {/* Category 2 */}
          <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden">
            <img src={candle2} alt="Biography" className="w-full h-48 object-cover" />
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold">Biography</h3>
            </div>
          </div>

          {/* Category 3 */}
          <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden">
            <img src={mmm} alt="Fiction" className="w-full h-48 object-cover" />
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold">Fiction</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="mt-16 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-red-600">Best Sellers</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredBestSellers.map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{book.title}</h3>
              <p className="text-red-500 mt-2">{book.price}</p>
              <button
                onClick={() => handleAddToCart(book)} // Add specific book to cart
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 flex items-center justify-center"
              >
                <span>Add to Cart</span>
                <BsArrowRightShort size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Discover Books Section */}
      <div className="mt-16 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-red-600">Discover Books</h2>
        <p className="text-center text-gray-600 mb-8">Explore our comprehensive collection of books.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredDiscoverBooks.map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{book.title}</h3>
              <p className="text-red-500 mt-2">{book.price}</p>
              <button
                onClick={() => handleAddToCart(book)} // Add specific book to cart
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 flex items-center justify-center"
              >
                <span>Add to Cart</span>
                <BsArrowRightShort size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
