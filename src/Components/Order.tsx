import React, { useState } from "react";

import { useLocation, useNavigate, Link } from "react-router-dom";
import "./styles/Order.css";

interface setOrdered {
  ordered: Boolean;
  setOrdered: Boolean;
}

const Order: React.FC<setOrdered> = ({ ordered, setOrdered }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const addedBooks = location.state?.addedBooks || [];

  const [shippingisVisible, setShippingIsVisible] = useState(true);
  const [paymentMethodIsVisible, setPaymentMethodIsVisible] = useState(false);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  const handleSelectedMethod = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setDeliveryFee(e.target.value);
  };

  const goToPayMethod = (e: React.FormEvent) => {
    e.preventDefault();
    setShippingIsVisible(false);
    setPaymentMethodIsVisible(true);
  };

  const [visibleMessage, setVisibleMessage] = useState<Boolean>(false);
  const orderMessage = "Your order has been created successfully!";

  const [orderAnimation, setOrderAnimation] = useState<Boolean>(false);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.removeItem("books");
    setOrderAnimation(true);
    setTimeout(() =>{
      setVisibleMessage(true);
    }, 500)
    setTimeout(() => {
      navigate("/");
      setOrdered(!ordered);
    }, 3000);
  };

  return (
    <>
      <h2>Order Page</h2>
      {shippingisVisible && (
        <form
          className="shipping-info-form"
          onSubmit={goToPayMethod}
        >
          <h2>Shipping Information</h2>
          <label htmlFor="full-name" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            required
            placeholder="Enter your full name"
            className="form-input"
            autoComplete="off"
          />

          <label htmlFor="delivery-method" className="form-label">
            Delivery Method:
          </label>
          <select
            id="delivery-method"
            name="delivery-method"
            required
            className="form-select"
            onChange={handleSelectedMethod}
          >
            <option value="0">Standard (free)</option>
            <option value="4">Express (+ 4$)</option>
            <option value="8">Next Day (+ 8$)</option>
          </select>

          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            placeholder="Enter your city"
            className="form-input"
            autoComplete="off"
          />

          <label htmlFor="street" className="form-label">
            Street:
          </label>
          <input
            type="text"
            id="street"
            name="street"
            required
            placeholder="Enter your street address"
            className="form-input"
            autoComplete="off"
          />

          <label htmlFor="zip-code" className="form-label">
            ZIP/Postal Code:
          </label>
          <input
            type="text"
            id="zip-code"
            name="zip-code"
            pattern="^\d[0-9]+$"
            required
            placeholder="1010"
            className="form-input"
            autoComplete="off"
          />

          <label htmlFor="phone" className="form-label">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="^\+\d{7,15}$"
            required
            placeholder="+12341234567"
            className="form-input"
            autoComplete="off"
          />

          <label htmlFor="data-m" className="form-label select-none">
            <p>
              I have read and understood the
              <Link to="/order/privacy-policy" target="_blank"> Privacy policy</Link>.
            </p>
          </label>
          <input
            type="checkbox"
            id="data-m"
            name="data-m"
            required
            className="form-checkbox"
            autoComplete="off"
          />

          <label htmlFor="gen-terms" className="form-label select-none">
            <p>
              I have read and acknowledged the{" "}
              <Link to="/order/general-terms-and-conditions" target="_blank">
                General Terms and Conditions
              </Link>.
            </p>
          </label>
          <input
            type="checkbox"
            id="gen-terms"
            name="gen-terms"
            required
            className="form-checkbox"
            autoComplete="off"
          />

          <button type="submit" value="Continue" className="form-submit">
            Continue
          </button>
        </form>
      )}

      {paymentMethodIsVisible && (
        <form className={`payment-info-form ${orderAnimation ? 'active' : 'inactive'}`} onSubmit={handleOrder}>
          <h2>Payment Information</h2>
          <label htmlFor="payment-method" className="form-label">
            Payment Method:
          </label>
          <select
            id="payment-method"
            name="payment-method"
            className="form-select"
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="wire-transfer">Wire Transfer</option>
          </select>
          <p className="amount">
            Total amount:{" "}
            {addedBooks?.reduce((acc, book) => acc + book.price, 0) +
              Number(deliveryFee)}{" "}
            $
          </p>
          <button type="submit" className="form-submit">
            Order
          </button>
        </form>
      )}

      {visibleMessage && <div className="message">{orderMessage}</div>}
    </>
  );
};

export default Order;
