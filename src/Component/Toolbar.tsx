// import React, { useState } from 'react';
// import { PiHandbag } from 'react-icons/pi';
// import { Link } from 'react-router-dom';
// import logo from "../Resources/logo.png";

// function Toolbar() {
//   // State to track number of items in the cart
//   const [cartItems, setCartItems] = useState(0);

//   // Function to simulate adding an item to the cart
//   const addToCart = () => {
//     setCartItems(cartItems + 1); // Increment cart count by 1
//   };

//   return (
//     <div className='h-fit w-fit'>
//       <div className='h-fit w-screen flex flex-row justify-between px-20 py-6 items-center bg-white fixed z-0'>

//         {/* Logo */}
//         <div className='w-32'>
//           <img src={logo} alt="Logo" className="w-28 h-16" />
//         </div>

//         {/* Navigation Links */}
//         <div className='w-fit flex flex-row gap-10 font-semibold text-md items-center'>
//           <Link to={'/'} className='text-orange-600'>HOME</Link>
//           <Link to={'/about'} className='hover:text-orange-600'>ABOUT US</Link>
//           <Link to={'/shop'} className='hover:text-orange-600'>SHOP</Link>
//           <Link to={'/contact'} className='hover:text-orange-600'>CONTACT</Link>
//         </div>

//         {/* Cart and Login */}
//         <div className='bg-white flex flex-row items-center gap-10'>
//           {/* Cart Icon with Notification Badge */}
//           <div className='relative'>
//             <button className='text-2xl'>
//               <PiHandbag />
//             </button>
//             {/* Notification Badge */}
//             {cartItems > 0 && (
//               <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                 {cartItems}
//               </div>
//             )}
//           </div>

//           {/* Login Button */}
//           <div className='border-2 border-orange-600 flex items-center px-8 py-4 hover:bg-orange-600 hover:text-white justify-center text-md font-medium'>
//             LOGIN
//           </div>
//         </div>

//       </div>

//       {/* Example Button to Add to Cart (for testing purposes) */}
//       <div className="mt-20">
//         <button onClick={addToCart} className="bg-orange-600 text-white px-4 py-2">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Toolbar;
// import React from 'react';
// import { PiHandbag } from 'react-icons/pi';
// import { Link } from 'react-router-dom';
// import { useCart } from '../PageComponent/CartContext'; // Import your CartContext
// import logo from "../Resources/logo.png";
// import CartPage from '../PageComponent/CartPage';

// function Toolbar() {
//   const { cartItems } = useCart(); // Access cart items from the context

//    // You can define a function to handle clicking on the cart icon
//    const handleCartClick = () => {
//     // Here you can define what happens when the cart icon is clicked
//     // For example, you might want to navigate to the cart page
//     console.log('Cart icon clicked!');
//     // If you have a routing setup, you might use `useNavigate` from 'react-router-dom' to navigate to the cart page
//   };

//   return (
//     <div className='h-fit w-fit'>
//       <div className='h-fit w-screen flex flex-row justify-between px-20 py-6 items-center bg-white fixed z-0'>
        
//         {/* Logo */}
//         <div className='w-32'>
//           <img src={logo} alt="Logo" className="w-28 h-16" />
//         </div>

//         {/* Navigation Links */}
//         <div className='w-fit flex flex-row gap-10 font-semibold text-md items-center'>
//           <Link to={'/'} className='text-orange-600'>HOME</Link>
//           <Link to={'/about'} className='hover:text-orange-600'>ABOUT US</Link>
//           <Link to={'/shop'} className='hover:text-orange-600'>SHOP</Link>
//           <Link to={'/contact'} className='hover:text-orange-600'>CONTACT</Link>
//         </div>

//         {/* Cart and Login */}
//         <div className='bg-white flex flex-row items-center gap-10'>
//           {/* Cart Icon with Notification Badge */}
//           <div className='relative'>
//           <button handleCartClick={CartPage} className='text-2xl'>

//               <PiHandbag />
//             </button>
//             {/* Notification Badge */}
//             {cartItems > 0 && (
//               <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                 {cartItems}
//               </div>
//             )}
//           </div>

//           {/* Login Button */}
//           <div className='border-2 border-orange-600 flex items-center px-8 py-4 hover:bg-orange-600 hover:text-white justify-center text-md font-medium'>
//             LOGIN
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Toolbar;



//Toolbar.tsx
import React from 'react';
import { PiHandbag } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useCart } from '../PageComponent/CartContext'; // Import your CartContext
import logo from "../Resources/logo.png";

function Toolbar() {
  const { cartItems } = useCart(); // Access cart items from the context
  const navigate = useNavigate(); // Get the navigate function

  // Function to handle cart icon click
  const handleCartClick = () => {
    // Ensure the correct path is provided
    navigate('/cart'); // Navigate to the CartPage
  };

  return (
    <div className='h-fit w-fit'>
      <div className='h-fit w-screen flex flex-row justify-between px-20 py-6 items-center bg-white fixed z-0'>
        
        {/* Logo */}
        <div className='w-32'>
          <img src={logo} alt="Logo" className="w-28 h-16" />
        </div>

        {/* Navigation Links */}
        <div className='w-fit flex flex-row gap-10 font-semibold text-md items-center'>
          <Link to={'/'} className='text-orange-600'>HOME</Link>
          <Link to={'/about'} className='hover:text-orange-600'>ABOUT US</Link>
          <Link to={'/shop'} className='hover:text-orange-600'>SHOP</Link>
          <Link to={'/contact'} className='hover:text-orange-600'>CONTACT</Link>
        </div>

        {/* Cart and Login */}
        <div className='bg-white flex flex-row items-center gap-10'>
          {/* Cart Icon with Notification Badge */}
          <div className='relative'>
            <button onClick={handleCartClick} className='text-2xl'>
              <PiHandbag />
            </button>
            {/* Notification Badge */}
            {Array.isArray(cartItems) && cartItems.length > 0 && ( // Ensure cartItems is an array
              <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems.length} {/* Show number of items in cart */}
              </div>
            )}
          </div>

          {/* Login Button */}
          <Link to={'/login'}>
          <div className='border-2 border-orange-600 flex items-center px-8 py-4 hover:bg-orange-600 hover:text-white justify-center text-md font-medium'>
            LOGIN
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Toolbar;










