import React from "react";
import "./styles/Privacy-GTC.css";

export default function PrivacyPolicy() {
  return (
    <section className="privacy-policy-container">
      <h2>1. Data Controller Information</h2>
      <ul>
        <li>
          <strong>Name:</strong> Books4You
        </li>
      </ul>

      <h2>2. Processed Data and Its Purpose</h2>
      <p>During the operation of the Webshop, we process the following data:</p>

      <h3>Cart Content</h3>
      <p>
        The selected products by users are stored in the browser's{" "}
        <code>sessionStorage</code>. These data are not transmitted and are
        deleted when the browser is closed.
      </p>

      <h3>Data Required for Order Placement</h3>
      <p>The following personal data are required for order processing:</p>
      <ul>
        <li>Name</li>
        <li>Shipping address (street, house number, city, postal code)</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Payment method</li>
      </ul>
      <p>
        These data are used solely for order processing and delivery purposes.
      </p>

      <h2>3. Legal Basis for Data Processing</h2>
      <p>
        Data processing is based on the user's consent and the necessity of
        fulfilling the contract.
      </p>

      <h2>4. Data Storage and Protection</h2>
      <ul>
        <li>
          The data required for order fulfillment are stored only for the
          duration of order processing.
        </li>
        <li>
          The Webshop does not store any financial or banking data, as
          prepayment is not possible.
        </li>
        <li>
          Appropriate technical and organizational measures are implemented to
          protect personal data.
        </li>
      </ul>

      <h2>5. Rights of the Data Subjects</h2>
      <p>Users may request at any time:</p>
      <ul>
        <li>Access to their data</li>
        <li>Correction of their data</li>
        <li>Deletion of their data (unless legally restricted)</li>
        <li>Restriction of data processing</li>
      </ul>
      <p>Requests can be submitted via [Contact] details.</p>

      <h2>6. Data Transfer to Third Parties</h2>
      <p>
        The data necessary for order fulfillment are only transferred to the
        courier service responsible for delivery. Data are not shared with third
        parties for advertising or marketing purposes.
      </p>

      <h2>7. Cookies and Other Technologies</h2>
      <p>
        The Webshop only uses cookies necessary for its operation and data
        stored in <code>sessionStorage</code>. These data do not leave the
        user's browser.
      </p>

      <h2>8. Modification of the Privacy Policy</h2>
      <p>
        The Webshop reserves the right to modify this privacy policy. Users will
        be informed of any changes through the Webshop’s website.
      </p>

      <p>
        <strong>Last updated:</strong> 07.02.2025
      </p>
    </section>
  );
}
