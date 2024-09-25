import React,{useState} from 'react'
import { useCart } from './CartContext';



function PaymentForm() {
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
    const price = parseFloat(book.price.replace('Rs.', '').replace(',', ''));
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
    <div className='w-11/12 h-fit py-28 mx-auto flex items-center justify-center'>
      {/* Payment Form */}
      {cartItems.length > 0 && !paymentSuccess && (
        <form className="mt-8 w-full max-w-md" onSubmit={handlePaymentSubmit}>
          <h2 className="text-2xl font-bold text-center ">Payment Details</h2>
          <div className='border-2 shadow-xl px-10 py-10 mt-10'>
          <div className="mt-4">
            <label className="block mb-2">Name :</label>
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
            <label className="block mb-2">Address :</label>
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
              <label className="block mb-2">Card Number :</label>
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
              <label className="block mb-2">Zip Code :</label>
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
          </div>
        </form>
      )}

      {paymentSuccess && (
        <div className="mt-8 text-center text-xl font-semibold text-green-600">
          Payment Successful ! Thank you for your purchase.
        </div>
      )}
    </div>
  )
}

export default PaymentForm;

