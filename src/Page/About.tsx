//About.tsx
import React from 'react';
import bookImage from '../Resources/bookself.jpg';
import book1 from '../Resources/bookstore-shelves.jpg'
import book2 from '../Resources/55.jpg'
import Contact from './Contact';
import book3 from '../Resources/Shutterstock.jpg'
import book4 from '../Resources/123.jpeg'
import book5 from '../Resources/678.jpg'
import book6 from '../Resources/bookself 1.jpg'
import book7 from '../Resources/Shutterstock.jpg'
import book8 from '../Resources/bookstore-shelves.jpg'
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="container mx-auto p-8 ">
        {/* 1st Section: About Us Text */}
        <h1 className="  text-xl sm:text-2xl md:text-2xl font-bold my-20 text-center pt-4 pb-4 bg-red-500 h-28">
          About us
        </h1>
        <h2 className='text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-10'>
          Since 2023, Kitab Kunj has existed as a tiny island of peace in a fast-moving world by fostering a culture of reading and connecting people with the books they'll love, in Nepal and beyond.
        </h2>

        {/* 2nd Section: Image and Text */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={book1}
              alt="About"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
           <p className='mb-6'> In 2023, a passionate person, with the support of his closest friends, 
           set out to create
             something special in the heart of Traffic chowk, Butwal, Nepal. </p>

      Starting from a small corner, their dedication turned Kitab Kunj into a beloved local bookstore, 
      with shelves overflowing with books and unique souvenirs. Over time, 
      it became one of the largest and most cherished bookstores in Lumbini Province, boasting an 
      impressive collection of titles for readers of all tastes. Expanding beyond its roots, Kitab Kunj 
      now trades books across Nepal, both as wholesalers and retailers, solidifying its position in 
      the Nepali literary community and becoming a true literary haven.
            </p>
          </div>
        </div>

        {/* 3rd Section: Image and Text in Opposite Layout */}
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12 mt-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={book2}
              alt="About"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
           <p className='mb-2'> As the world embraced the digital age, the younger generation, driven by their passion for 
            books, stepped in to evolve the family business. With fresh ideas and the same love for
             reading, we launched KitabKunj.com, taking the store online and transforming it into a 
             dynamic e-commerce platform.</p>

Supported by a dedicated team of fellow book enthusiasts, we built a vibrant and inclusive community of
 readers from all walks of life—spanning ages, genders, sexualities, and ethnicities. The transition to
  the online space revitalized the business, allowing us to reach readers far 
   beyond our physical location and break through geographical barriers, bringing the joy of reading to
    a wider world.
            </p>
          </div>
        </div>
        <h1 className='mt-12 font-bold'>Why Kitab Kunj?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-4">
          
          {/* Text Block 1 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className='font-bold mb-5'>TIRELESS INNOVATION</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            At Kitab Kunj, we are committed to providing the best book-buying experience.
Our advanced search tool allows you to find books by title, author, or ISBN, and sort by genres 
and bestsellers. With features like book requests and pre-orders, we are always innovating to enhance
 your reading experience. Stay tuned for our upcoming eBooks and audiobooks!            </p>
          </div>

          {/* Text Block 2 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className='font-bold mb-5'>DIVERSE COLLECTION</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            From rare books to bestsellers, find everything you desire here at Kitab Kunj. We take 
            customer feedback seriously and curate our collection accordingly. If there's a book 
            you want to read that isn't in our catalog, simply request it, and we'll do our best to
             get it for you. Our extensive and diverse selection ensures there's something for every
              reader, catering to all tastes and preferences.            </p>
          </div>

          {/* Text Block 3 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className='font-bold mb-5'>UNBEATEN DEALS AND OFFERS</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            We regularly feature deals and special offers, ensuring you get the most value for your money
          .

Find fantastic bargains through our promotions, and enjoy our frequent giveaways and competitions.
 At Kitab Kunj, quality books come at great prices!            </p>
          </div>

          {/* Text Block 4 */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className='font-bold mb-5'>WHOLESALE AND BULK PURCHASE</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            We offer B2B and wholesale services, supporting retail bookstores, online stores,
             schools, libraries, and other institutions. Our services provide extensive access to
              a diverse catalog at competitive rates, ensuring quality books reach a wider audience.
               Contact us for bulk purchases and enjoy the benefits of partnering with Kitab Kunj.
            </p>
          </div>
        </div>



        

        {/* 3x2 Image Grid Section */}
        
        <div className=" mt-12 flex items-center justify-center h-12  ">
  <p className=" font-bold text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
  Kitab Kunj: Glimpses from 2023
  </p>
</div>


        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2">
          {/* Image Box 1 */}
          <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <img
              src={book3}
              alt="Book"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Image Box 2 */}
          <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <img
              src={book4}
              alt="Book"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Image Box 3 */}
          <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <img
              src={book2}
              alt="Book"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Image Box 4 */}
          <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <img
              src={book6}
              alt="Book"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Image Box 5 */}
          <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <img
              src={book8}
              alt="Book"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Image Box 6 */}
          <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md">
            <img
              src={book5}
              alt="Book"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          </div>

        {/* Thank You Message */}
        <div className=" w-full text-center mt-12   pt-6 pb-6 bg-blue-100 ">
  <p className="text-xl font-bold ">
    To our wonderful supporters and customers; Thank you for making every chapter of our journey possible.
  </p>
  <h1 className="font-bold text-4xl text-blue-400">Book Kunj</h1>
</div>
<div className="w-full text-center mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      Contact Us
          </h2>
          <p className='text-2xl font-bold'>     If you want to know something about us you can contact us by clicking the button below. </p>
          <Link to={'/contact'} className='text-orange-600'>
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
    Contact us
  </button>
            </Link>

        
         
        </div>
      
      </div>
    </>
  ); 
};

export default AboutUs;
