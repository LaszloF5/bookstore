import React from "react";
import "./styles/Privacy-GTC.css";

export default function GeneralTermsAndConditions() {
  return (
    <section className="GTC-container">
      <h2>1. Introduction</h2>
      <p>
        These General Terms and Conditions (hereinafter referred to as "Terms")
        apply to all purchases made through <strong>Books4You</strong>{" "}
        (hereinafter referred to as "Webshop"). By using the Webshop, you agree
        to these Terms.
      </p>

      <h2>2. Ordering Process</h2>
      <ul>
        <li>
          Products can be added to the shopping cart and reviewed before
          finalizing the purchase.
        </li>
        <li>No registration is required to place an order.</li>
        <li>
          The order is finalized once the user provides the required details
          (name, shipping address, payment method, etc.) and confirms the
          purchase.
        </li>
      </ul>

      <h2>3. Payment</h2>
      <ul>
        <li>Prepayment is not possible.</li>
        <li>Available payment methods will be displayed during checkout.</li>
      </ul>

      <h2>4. Shipping and Delivery</h2>
      <ul>
        <li>
          Orders are processed and shipped within the estimated time frame
          provided at checkout.
        </li>
        <li>Shipping costs may vary based on location and order size.</li>
      </ul>

      <h2>5. Cancellation and Returns</h2>
      <ul>
        <li>
          Customers have the right to cancel their order before it is shipped.
        </li>
        <li>
          Returns are accepted within the legally allowed period, provided the
          item is in its original condition.
        </li>
        <li>
          Refunds will be processed once the returned product is received and
          inspected.
        </li>
      </ul>

      <h2>6. Liability</h2>
      <p>
        The Webshop is not responsible for delivery delays caused by third-party
        courier services or unforeseen circumstances.
      </p>

      <h2>7. Modifications to the Terms</h2>
      <p>
        The Webshop reserves the right to modify these Terms at any time.
        Updates will be posted on the Webshop’s website.
      </p>

      <p>
        <strong>Last updated:</strong> 07.02.2025
      </p>
    </section>
  );
}
