//About.tsx
import React from 'react';
import bookImage from '../Resources/bookself.jpg';
import image1 from '../Resources/2.jpg'
import image2 from '../Resources/3.jpeg'
import image3 from '../Resources/4.jpeg'

const Contact = () => {
  return (
    <div className=" mt-8 p-8 lg:p-12">
      {/* Main Container for Form and Map */}
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Left Side - Contact Info and Form */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Contact Info</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-red-600 mr-2">📍</span>
                <p>
                  <strong>Address</strong> <br />
                  Butwal-4,Traffic Chowk,Rupandehi
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 mr-2">📞</span>
                <p>
                  <strong>Phone</strong> <br />
                  9866582866 | 9812797366
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 mr-2">📧</span>
                <p>
                  <strong>Support</strong> <br />
                  bhandarisuman456@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Send Message Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Send Message</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-red-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-red-600"
                />
              </div>
              <div>
                <input
                  type="Number"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-red-600"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-red-600 h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="w-full lg:w-1/2 lg:ml-12 mt-12 lg:mt-0">
          <iframe
            className="w-full min-h-[450px] lg:min-h-[650px] border-0"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5321938140123!2d83.46145438048548!3d27.700850014784248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968700410dd797%3A0x2d4c28d055842324!2sTraffic%20Chowk!5e0!3m2!1sen!2snp!4v1727016002664!5m2!1sen!2snp"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Photo Grid at the Bottom - No Gap, 4 in a row */}
      <div className="mt-8 ">
        <div className="grid grid-cols-4 gap-0">
          {/* Image 1 */}
          <div className="h-64">
            <img
             src={image1}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 2 */}
          <div className="h-64">
            <img
              src={image2}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 3 */}
          <div className="h-64">
            <img
               src={image3}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 4 */}
          <div className="h-64">
            <img
             src={bookImage}
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
