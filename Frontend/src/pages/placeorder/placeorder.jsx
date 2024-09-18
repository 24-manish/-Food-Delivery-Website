import React, { useContext,useEffect,  useState } from 'react'
import "../../index.css"
import { StoreContext } from '../../componets/context'
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import axios from 'axios';

const Placeorder = () => {
  const { gettotal,cartitem ,url,token,clearCart} = useContext(StoreContext);  // Use clearCart from context
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const [showQR, setShowQR] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Handle form field changes
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate the form whenever data changes
  useEffect(() => {
    const isValid = Object.values(data).every((field) => field.trim() !== "");
    setIsFormValid(isValid);
  }, [data]);

  // Checkout process with QR, loader, and payment success
  const handleCheckout = async () => {
    setShowQR(true);
    setTimeout(() => {
      setShowQR(false);
      setShowLoader(true);
      setTimeout(async () => {
        setShowLoader(false);
        setPaymentSuccess(true);

        try {
          // Convert cartitem to the expected format
          const items = Object.keys(cartitem).map((itemId) => ({
            itemId,
            quantity: cartitem[itemId]
          }));

          // Place the order
          await axios.post(
            `${url}/api/order/place`,
            {
              userid: token, // Or however you handle user ID
              items, // Ensure items are in the expected format
              amount: gettotal(),
              address: data // Assuming data contains the address
            },
            { headers: { Authorization: `Bearer ${token}` } }
          );

          // Clear the cart from the context after order is placed
          await clearCart();

          setTimeout(() => {
            navigate('/');
          }, 2000); // Wait for 2 seconds and then navigate to the home page
        } catch (error) {
          console.error('Failed to place order:', error.response?.data || error.message);
        }
      }, 3000); // Show loader for 3 seconds
    }, 3000); // Show QR code for 3 seconds
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-6">Place Your Order</h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Billing Details</h2>
        
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="firstname"
            value={data.firstname}
            onChange={onChangeHandler}
            placeholder="First Name"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="lastname"
            value={data.lastname}
            onChange={onChangeHandler}
            placeholder="Last Name"
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Email"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="street"
            value={data.street}
            onChange={onChangeHandler}
            placeholder="Street Address"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={onChangeHandler}
            placeholder="City"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="state"
            value={data.state}
            onChange={onChangeHandler}
            placeholder="State"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="zipcode"
            value={data.zipcode}
            onChange={onChangeHandler}
            placeholder="Zip Code"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="country"
            value={data.country}
            onChange={onChangeHandler}
            placeholder="Country"
            className="border p-2 rounded w-full"
          />
          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={onChangeHandler}
            placeholder="Phone Number"
            className="border p-2 rounded w-full"
          />
        </form>

        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg font-semibold">Total: $ {gettotal()}</p>
          <button
            type="button"
            onClick={handleCheckout}
            disabled={!isFormValid}
            className={`border-none text-white bg-orange-500 w-[max(15vw,200px)] p-3 rounded cursor-pointer ${
              !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <QRCode value="Your QR Code Value" />
            <p className="text-center mt-4">Scan the QR code to complete the payment</p>
          </div>
        </div>
      )}

      {showLoader && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="loader"></div>
        </div>
      )}

      {paymentSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-center text-green-600">Payment Successful!</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Placeorder;