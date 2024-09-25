import React,{useState} from 'react'
import { useCart } from '../CartContext'
import { BsArrowRightShort } from "react-icons/bs";
import logo from "../../Resources/logo.png"
import candle1 from "../../Resources/candle1.jpg"
import candle2 from "../../Resources/candle2.jpg"
import mmm from "../../Resources/bookself.jpg"
import pic1 from "../../Resources/bestseller1.jpg"
import pic2 from "../../Resources/bestseller2.jpeg"
// import pic3 from "../../Resources/bestseller3.jpg"
import pic4 from "../../Resources/A+Little+Life.jpg"
import pic3 from "../../Resources/9780143454397-5142.webp"

// Interface for books
interface Book {
    title: string;
    price: string;
    imageUrl: string;
    author:string;
  }

  const bestSellers: Book[] = [
    {
      title: 'It Ends With Us',
      price: '450',
      imageUrl: pic1,
      author:"Colleen Hoover"
    },
    {
      title: 'Ikigai',
      price: '300',
      imageUrl: pic2,
       author:"Héctor García"
    },
    {
      title: 'Karnali Blues',
      price: '600',
      imageUrl: pic3,
       author:"Buddhisagar"
    },
    {
      title: 'A Little Life',
      price: '1000',
      imageUrl: pic4,
       author:"Hanya Yanagihara"
    },
    
  ];

function BestSeller() {
    const { addToCart, cartItems } = useCart(); // Accessing CartContext
  const [searchQuery, setSearchQuery] = useState(""); // State to handle search query

  // Filter books based on search query
  const filteredBestSellers = bestSellers.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // Handle adding an item to the cart
  const handleAddToCart = (book: Book) => {
    addToCart(book); // Pass the book object to add it to the cart
  };
    
  return (
    // <div>
       <div className="w-11/12 h-fit mx-auto justify-center">
        <h2 className="text-4xl mb-16 font-bold text-center">Best Sellers</h2>
        {/* grid */}
        <div className="grid grid-cols-4 w-11/12 gap-20 ml-6">
          {filteredBestSellers.map((book, index) => (
<div className=' mx-auto w-72 justify-center items-center flex'>
            <div key={index} className="border border-black rounded-md hover:scale-105 transiton-all p-3
     drop-shadow-md hover:shadow-md cursor-pointer ease-in-out
     duration-700 delay-100">
        <div className='h-72 w-64  '>
              <img src={book.imageUrl} alt={book.title} className="w-full h-full object-contain" />
              </div>
              
              <div className='text-center mt-4 '>
        <h3 className="mt-2 mb-1 text-lg font-semibold text-gray-900">{book.title}</h3>
        <h3 className="mb-1 text-lg font-semibold text-gray-900">{book.author}</h3>
        <p className="text-black mb-1 font-semibold">Rs.{book.price}</p> 
        <div className='justify-center  flex'>
              <button
                onClick={() => handleAddToCart(book)} // Add specific book to cart
                className="border-2 border-black hover:border-orange-500 font-medium py-2 mt-2 px-8 rounded-full hover:bg-orange-500 hover:text-white  flex items-center justify-center"
              >
                <span>Add to Cart</span>
                <BsArrowRightShort size={24} />
              </button>
              </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    // </div>
  )
}

export default BestSeller
