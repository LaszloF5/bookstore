import React, {useState} from "react";
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import "./Order.css"

const Order: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const addedBooks = location.state?.addedBooks ||[];

    const [shippingisVisible, setShippingIsVisible] = useState(true);
    const [paymentMethodIsVisible, setPaymentMethodIsVisible] = useState(false);

    const goToPayMethod = () => {
        setShippingIsVisible(false);
        setPaymentMethodIsVisible(true);
    }

    const [visibleMessage, setVisibleMessage] = useState(false);
    const orderMessage = 'Your order has been created successfully!';

    const handleOrder = (e: React.MouseEvent) => {
        e.preventDefault();
        setVisibleMessage(true);
        setTimeout(() => navigate('/'), 3000);
    }

  return (
    <>
      <h2>Order Page</h2>
      {shippingisVisible && <form className="shipping-info-form" method='POST'>
  <h2>Shipping Information</h2>
  <label htmlFor="full-name" className="form-label">Full Name:</label>
  <input
    type="text"
    id="full-name"
    name="full-name"
    required
    placeholder="Enter your full name"
    className="form-input"
  />

  <label htmlFor="delivery-method" className="form-label">Delivery Method:</label>
  <select id="delivery-method" name="delivery-method" required className="form-select">
    <option value="standard">Standard</option>
    <option value="express">Express</option>
    <option value="next-day">Next Day</option>
  </select>

  <label htmlFor="city" className="form-label">City:</label>
  <input
    type="text"
    id="city"
    name="city"
    required
    placeholder="Enter your city"
    className="form-input"
  />

  <label htmlFor="street" className="form-label">Street:</label>
  <input
    type="text"
    id="street"
    name="street"
    required
    placeholder="Enter your street address"
    className="form-input"
  />

  <label htmlFor="zip-code" className="form-label">ZIP/Postal Code:</label>
  <input
    type="text"
    id="zip-code"
    name="zip-code"
    required
    placeholder="Enter your ZIP/Postal Code"
    className="form-input"
  />

  <label htmlFor="phone" className="form-label">Phone Number:</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    required
    placeholder="Enter your phone number"
    className="form-input"
  />

  <label htmlFor="data-m" className="form-label">
    I have read and understood the{" "}
    <a href="#" target="_blank" rel="noopener noreferrer">
      Data Management Information
    </a>.
  </label>
  <input type="checkbox" id="data-m" name="data-m" required className="form-checkbox" />

  <label htmlFor="gen-terms" className="form-label">
    I have read and acknowledged the General Terms and Conditions.
  </label>
  <input type="checkbox" id="gen-terms" name="gen-terms" required className="form-checkbox" />

  <input type="submit" value="Continue" className="form-submit" onClick={goToPayMethod}/>
</form>}

{paymentMethodIsVisible && <form className="payment-info-form" method='POST'>
  <h2>Payment Information</h2>
  <label htmlFor="payment-method" className="form-label">Payment Method:</label>
  <select id="payment-method" name="payment-method" className="form-select">
    <option value="credit-card">Credit Card</option>
    <option value="paypal">PayPal</option>
    <option value="wire-transfer">Wire Transfer</option>
  </select>
  <p className='amount'>Total amount: {addedBooks?.reduce((acc, book) => acc + book.price, 0)} $</p>
  <input type="submit" value="Order" className="form-submit" onClick={handleOrder}/>
</form>}

{visibleMessage && <div className="message">{orderMessage}</div>}

    </>
  );
};

export default Order;
