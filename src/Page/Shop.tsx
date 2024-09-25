



import React, { useState } from 'react';
import { useCart } from "../PageComponent/CartContext"; // Import the useCart hook

function Shop() {
  interface Book {
    title: string;
    price: string;
    imageUrl: string;
  }

  // Get addToCart function from CartContext
  const { addToCart } = useCart();

  // Best Sellers Data
  const bestSellers: Book[] = [
    { title: 'As a Man Thinketh', price: '₹59.00', imageUrl: '/path-to-image/as-a-man-thinketh.jpg' },
    { title: 'Relativity', price: '₹129.00', imageUrl: '/path-to-image/relativity.jpg' },
    { title: 'The Origin of Species', price: '₹159.00', imageUrl: '/path-to-image/origin-of-species.jpg' },
    { title: 'The Art of War', price: '₹39.00', imageUrl: '/path-to-image/art-of-war.jpg' },
  ];

  const discoverBooks: Book[] = [
    { title: 'Three Men in a Boat', price: '₹99.00', imageUrl: '/path-to-image/three-men-in-a-boat.jpg' },
    { title: 'Othello', price: '₹70.00', imageUrl: '/path-to-image/othello.jpg' },
    { title: 'Nationalism', price: '₹69.00', imageUrl: '/path-to-image/nationalism.jpg' },
    { title: 'As a Man Thinketh', price: '₹59.00', imageUrl: '/path-to-image/as-a-man-thinketh.jpg' },
    { title: 'To Kill a Mockingbird', price: '₹129.00', imageUrl: '/path-to-image/to-kill-a-mockingbird.jpg' },
    { title: '1984', price: '₹149.00', imageUrl: '/path-to-image/1984.jpg' },
    { title: 'Pride and Prejudice', price: '₹89.00', imageUrl: '/path-to-image/pride-and-prejudice.jpg' },
    { title: 'The Great Gatsby', price: '₹119.00', imageUrl: '/path-to-image/the-great-gatsby.jpg' },
    { title: 'Moby Dick', price: '₹99.00', imageUrl: '/path-to-image/moby-dick.jpg' },
    { title: 'War and Peace', price: '₹199.00', imageUrl: '/path-to-image/war-and-peace.jpg' },
    { title: 'Ulysses', price: '₹159.00', imageUrl: '/path-to-image/ulysses.jpg' },
    { title: 'The Catcher in the Rye', price: '₹109.00', imageUrl: '/path-to-image/the-catcher-in-the-rye.jpg' },
    { title: 'The Odyssey', price: '₹129.00', imageUrl: '/path-to-image/the-odyssey.jpg' },
    { title: 'Brave New World', price: '₹139.00', imageUrl: '/path-to-image/brave-new-world.jpg' },
    { title: 'Animal Farm', price: '₹49.00', imageUrl: '/path-to-image/animal-farm.jpg' },
    { title: 'Les Misérables', price: '₹179.00', imageUrl: '/path-to-image/les-miserables.jpg' },
    { title: 'The Iliad', price: '₹149.00', imageUrl: '/path-to-image/the-iliad.jpg' },
    { title: 'Hamlet', price: '₹89.00', imageUrl: '/path-to-image/hamlet.jpg' },
    { title: 'Jane Eyre', price: '₹99.00', imageUrl: '/path-to-image/jane-eyre.jpg' },
    { title: 'The Scarlet Letter', price: '₹109.00', imageUrl: '/path-to-image/the-scarlet-letter.jpg' },
  ];

  // Combine bestSellers and discoverBooks
  const allBooks = [...bestSellers, ...discoverBooks];

  const booksPerPage = 20;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(allBooks.length / booksPerPage);

  const currentBooks = allBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleAddToCart = (book: Book) => {
    addToCart(book); // Add the selected book to the cart
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='h-48 w-full mt-24 bg-red-500 flex justify-center items-center'>
        <div className='font-serif text-white font-bold text-4xl'>OUR COLLECTION</div>
      </div>

      <div className="mt-16 w-full max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center text-red-600">Discover Books</h2>
        <p className="text-center text-gray-600 mb-8">Explore our comprehensive collection of books.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
          {currentBooks.map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{book.title}</h3>
              <p className="text-red-500 mt-2">{book.price}</p>
              <button
                onClick={() => handleAddToCart(book)} // Add to cart button click handler
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 flex items-center justify-center"
              >
                <span>Add to Cart</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 13H5L3 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16a3 3 0 100 6 3 3 0 000-6zm6 0a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg mr-2 disabled:bg-gray-400"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-gray-700">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg ml-2 disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
















// import React from 'react'
// // import pic from '../Resources/shop1.jpg'

// function Shop() {

//   interface Book {
//     title: string;
//     price: string;
//     imageUrl: string;
//   }
  
//   // Best Sellers Data
//   const bestSellers: Book[] = [
//     {
//       title: 'As a Man Thinketh',
//       price: '₹59.00',
//       imageUrl: '/path-to-image/as-a-man-thinketh.jpg',
//     },
//     {
//       title: 'Relativity',
//       price: '₹129.00',
//       imageUrl: '/path-to-image/relativity.jpg',
//     },
//     {
//       title: 'The Origin of Species',
//       price: '₹159.00',
//       imageUrl: '/path-to-image/origin-of-species.jpg',
//     },
//     {
//       title: 'The Art of War',
//       price: '₹39.00',
//       imageUrl: '/path-to-image/art-of-war.jpg',
//     },
//   ];
  

//   const discoverBooks: Book[] = [
//     {
//       title: 'Three Men in a Boat',
//       price: '₹99.00',
//       imageUrl: '/path-to-image/three-men-in-a-boat.jpg',
//     },
//     {
//       title: 'Othello',
//       price: '₹70.00',
//       imageUrl: '/path-to-image/othello.jpg',
//     },
//     {
//       title: 'Nationalism',
//       price: '₹69.00',
//       imageUrl: '/path-to-image/nationalism.jpg',
//     },
//     {
//       title: 'As a Man Thinketh',
//       price: '₹59.00',
//       imageUrl: '/path-to-image/as-a-man-thinketh.jpg',
//     },
//   ];
//   // return (
//   //   <div className=''>
//   //     <div className='h-48 w-screen mt-24 bg-red-500 relative flex justify-center items-center'>
//   //       {/* <img src={pic} className='relative' /> */}
//   //       <div className=' font-serif  text-white font-bold text-4xl'>OUR COLLECTION</div>
//   //     </div>

//       {/* <div className='h-fit w-screen flex justify-center items-center flex-col bg-blue-400'>
//         <div className='h-20 flex items-center font-semibold font-serif text-xl bg-yellow-400'>ALL-TIME FAVOURITE CANDLES</div>
//         <div className='h-24 w-1/3  font-serif bg-white'>Having a place set aside for an activity you love makes it more likely you'll do it.Hence,discover the best of the best world candle through us.</div>

//         <div className='w-screen h-2/3 bg-pink-400 flex flex-col gap-10'>

//           <div className='  flex flex-row gap-6 items-center justify-center'>

//             <div className=' w-80 bg-purple-600'>
//               <div className='h-80 w-80'>IMG</div>
//               <div className=' w-80 font-serif font-lg bg-white'>
//                 <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
//                 <div className='h-10 ml-2'>Rs.500</div>
//                 <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
//               </div>
//             </div>

//             <div className=' w-80 bg-purple-600'>
//               <div className='h-80 w-80'>IMG</div>
//               <div className=' w-80 font-serif font-lg bg-white'>
//                 <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
//                 <div className='h-10 ml-2'>Rs.500</div>
//                 <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
//               </div>
//             </div>

//             <div className=' w-80 bg-purple-600'>
//               <div className='h-80 w-80'>IMG</div>
//               <div className=' w-80 font-serif font-lg bg-white'>
//                 <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
//                 <div className='h-10 ml-2'>Rs.500</div>
//                 <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
//               </div>
//             </div>

//             <div className=' w-80 bg-purple-600'>
//               <div className='h-80 w-80'>IMG</div>
//               <div className=' w-80 font-serif font-lg bg-white'>
//                 <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
//                 <div className='h-10 ml-2'>Rs.500</div>
//                 <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
//               </div>
//             </div>

//           </div>

//           <div className='  flex flex-row gap-6 items-center justify-center'>

//             <div className=' w-80 bg-purple-600'>
//               <div className='h-80 w-80'>IMG</div>
//               <div className=' w-80 font-serif font-lg bg-white'>
//                 <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
//                 <div className='h-10 ml-2'>Rs.500</div>
//                 <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
//               </div>
//             </div>


// <div className=' w-80 bg-purple-600'>
//               <div className='h-80 w-80'>IMG</div>
//               <div className=' w-80 font-serif font-lg bg-white'>
//                 <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
//                 <div className='h-10 ml-2'>Rs.500</div>
//                 <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
//               </div>
//             </div>

//             <div className=' w-80 bg-purple-600'>
//               <div className='h-80 w-80'>IMG</div>
//               <div className=' w-80 font-serif font-lg bg-white'>
//                 <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
//                 <div className='h-10 ml-2'>Rs.500</div>
//                 <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
//               </div>
//             </div>

//             <div className=' w-80 bg-purple-600'>
//               <div className='h-80 w-80'>IMG</div>
//               <div className=' w-80 font-serif font-lg bg-white'>
//                 <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
//                 <div className='h-10 ml-2'>Rs.500</div>
//                 <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div> */}
//       return (
//         <div className=''>
//           <div className='h-48 w-screen mt-24 bg-red-500 relative flex justify-center items-center'>
//             {/* <img src={pic} className='relative' /> */}
//             <div className=' font-serif  text-white font-bold text-4xl'>OUR COLLECTION</div>
//           </div>

//       <div className="mt-16 w-full max-w-6xl">
//         <h2 className="text-3xl font-bold text-center text-red-600">Discover Books</h2>
//         <p className="text-center text-gray-600 mb-8">Explore our comprehensive collection of books.</p>
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {discoverBooks.map((book, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//               <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover" />
//               <h3 className="mt-4 text-lg font-semibold text-gray-900">{book.title}</h3>
//               <p className="text-red-500 mt-2">{book.price}</p>
//               <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 flex items-center justify-center">
//                 <span>Add to Cart</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 ml-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 13H5L3 3z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16a3 3 0 100 6 3 3 0 000-6zm6 0a3 3 0 100 6 3 3 0 000-6z" />
//                 </svg>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* <div className='h-fit w-screen bg-green-800 pt-8'>
//         <div className='h-24 flex items-center justify-center font-semibold font-serif text-xl bg-yellow-400'>NEW ARRIVAL</div>

//         <div className='  flex flex-row gap-6 items-center justify-center'>

//           <div className=' w-80 bg-purple-600'>
//             <div className='h-80 w-80'>IMG</div>
//             <div className=' w-80 font-serif font-lg bg-white'>
//               <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
//               <div className='h-10 ml-2'>Rs.500</div>
//               <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
//             </div>
//           </div>

//           <div className=' w-80 bg-purple-600'>
//             <div className='h-80 w-80'>IMG</div>
//             <div className=' w-80 font-serif font-lg bg-white'>
//               <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
//               <div className='h-10 ml-2'>Rs.500</div>
//               <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
//             </div>
//           </div>

//           <div className=' w-80 bg-purple-600'>
//             <div className='h-80 w-80'>IMG</div>
//             <div className=' w-80 font-serif font-lg bg-white'>
//               <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
//               <div className='h-10 ml-2'>Rs.500</div>
//               <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
//             </div>
//           </div>

//           <div className=' w-80 bg-purple-600'>
//             <div className='h-80 w-80'>IMG</div>
//             <div className=' w-80 font-serif font-lg bg-white'>
//               <div className='h-10 ml-2  flex items-center'>Scented Candle</div>
//               <div className='h-10 ml-2'>Rs.500</div>
//               <div className='h-12 w-56 ml-12 text-lg rounded-lg text-white hover:bg-orange-400 bg-green-600 flex justify-center items-center'>Add to Cart</div>
//             </div>
//           </div>

//         </div>

//       </div> */}

//        {/* <div className='h-52 w-screen flex justify-center items-center bg-orange-500 mt-20'>
//       <div className=' w-96 text-center tracking-wider font-serif font-semibold text-4xl'>KEEP UPTO DATE ON OUR LATEST PRODUCTS</div>
//       </div> */}
//     </div>
//   )
// }


// export default Shop


