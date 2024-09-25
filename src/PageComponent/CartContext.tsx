// import React, { createContext, useState, useContext, ReactNode } from "react";

// // Define the type for the cart context state
// interface CartContextType {
//   cartItems: number;
//   addToCart: () => void;
// }

// // Create the context with default values
// const CartContext = createContext<CartContextType | undefined>(undefined);

// // CartProvider component
// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<number>(0);

//   // Function to handle adding an item to the cart
//   const addToCart = () => {
//     setCartItems((prevItems) => prevItems + 1);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use the CartContext
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// export default CartContext;
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for a book/item in the cart
interface Book {
  title: string;
  price: string;
  imageUrl: string; // Include imageUrl to match book structure
}

// Define the type for the cart context
interface CartContextType {
  cartItems: Book[]; // Should be an array of books
  addToCart: (book: Book) => void; // Function to add a book
  removeFromCart: (index: number) => void; // Function to remove a book by index
}

// Create the CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Book[]>([]); // Initialize as an empty array

  // Function to add a book to the cart
  const addToCart = (book: Book) => {
    setCartItems((prevItems) => [...prevItems, book]); // Add the new book to the array
  };

  // Function to remove a book from the cart by index
  const removeFromCart = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index)); // Remove the item at the specified index
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartContext;



