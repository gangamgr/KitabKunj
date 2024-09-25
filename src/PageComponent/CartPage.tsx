// import React, { createContext, useContext, useState, ReactNode } from 'react';

// // Define the type for a book/item in the cart
// interface Book {
//   title: string;
//   price: string;
// }

// // Define the type for the cart context
// interface CartContextType {
//   cartItems: Book[]; // Should be an array of books
//   addToCart: (book: Book) => void; // Function to add a book
// }

// // Create the CartContext
// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<Book[]>([]); // Initialize as an empty array

//   const addToCart = (book: Book) => {
//     setCartItems((prevItems) => [...prevItems, book]); // Add the new book to the array
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook for using cart context
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// export default CartContext;


//CartPage.tsx
import React, { useState } from "react";
import { useCart } from "../PageComponent/CartContext";
import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleRemoveFromCart = (index: number) => {
    removeFromCart(index);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, book) => {
    const price = parseFloat(book.price.replace('₹', '').replace(',', ''));
    return total + price;
  }, 0);

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle payment processing (e.g., API call)
    console.log("Processing payment...", paymentDetails);
    setPaymentSuccess(true); // Simulate successful payment
    // Clear cart after payment
    // removeAllItems();
  };

  return (
    <div className="h-fit w-11/12 flex flex-col justify-center mx-auto items-center py-32 bg-gray-100">
      <div className=" w-full max-w-7xl ">
        <h2 className="text-3xl font-bold text-center mb-16 ">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 mt-8">Your cart is empty.</p>
        ) : (
          <div className="mt-8 grid grid-cols-4  gap-10">
            {cartItems.map((book, index) => (
              <div key={index} className="p-4 border border-black rounded-lg shadow-md relative">
                <button
                  onClick={() => handleRemoveFromCart(index)}
                  className="absolute -top-0 -right-0 text-red-600"
                >
                  <BsX className="font-bold text-2xl" />
                </button>
                <div className="h-64 w-full">
                <img src={book.imageUrl} alt={book.title} className="w-full h-full object-contain mt-1" /></div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{book.title}</h3>
                <p className="text-red-500 mt-2">{book.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Total Price Section */}
      {cartItems.length > 0 && (
        <div className="mt-10 text-xl font-semibold text-gray-900">
          Total Price : {`Rs.${totalPrice.toFixed(2)}`}
        </div>
      )}

      {/*  */}
      <Link to={'/PaymentForm'}>
      <div className="  pt-10">
      <button  className=" border-2 border-black hover:border-orange-500 font-medium py-2 px-64 rounded-full hover:bg-orange-500 hover:text-white  flex items-center justify-center">
                <span className="text-xl">  CHECKOUT</span></button>
                </div>
                </Link>

      {/* Payment Form */}
      {/* {cartItems.length > 0 && !paymentSuccess && (
        <form className="mt-8 w-full max-w-md" onSubmit={handlePaymentSubmit}>
          <h2 className="text-2xl font-bold text-center">Payment Details</h2>
          <div className="mt-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={paymentDetails.name}
              onChange={handlePaymentChange}
              required
              className="border rounded-lg w-full px-3 py-2"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handlePaymentChange}
              required
              className="border rounded-lg w-full px-3 py-2"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div className="w-1/2 pr-1">
              <label className="block mb-2">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handlePaymentChange}
                required
                className="border rounded-lg w-full px-3 py-2"
              />
            </div>
            <div className="w-1/2 pl-1">
              <label className="block mb-2">CVV</label>
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handlePaymentChange}
                required
                className="border rounded-lg w-full px-3 py-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-500"
          >
            Pay Now
          </button>
        </form>
      )}

      {paymentSuccess && (
        <div className="mt-8 text-center text-green-600">
          Payment Successful! Thank you for your purchase.
        </div>
      )} */}
    </div>
  );
};

export default CartPage;







