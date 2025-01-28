import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import "./childCompStyle.css";

interface Book {
  id: number;
  name: string;
  author: string;
  date: number;
  shortDescription: string;
  longDescription: string;
  price: number;
  image: string;
  category: string;
}

interface addedBooksProps {
  addedBooks: Book[];
  setAddedBooks: React.Dispatch<React.setStateAction<Book[]>>;
}

const Cart: React.FC<addedBooksProps> = ({ addedBooks, setAddedBooks }) => {

    const navigate= useNavigate();

  const [amount, setAmount] = useState(null);

  const removeBook = (bookToRemove: Book) => {
    const updatedBooks = addedBooks.filter(
      (book: Book) => book.id !== bookToRemove.id
    );
    setAddedBooks(updatedBooks);
  };

  const moveToOrder = () => {
    navigate('/order', { state: { addedBooks } });
  }

  return (
    <main className="main-container">
      <h2>Shopping Cart</h2>
      <div className="books-container">
        <p>{addedBooks.length === 0 && <span>Your cart is empty.</span>}</p>
        {addedBooks.map((book: Book) => {
          return (
            <div className="book-card" key={book.id}>
              <h3 className="book-card_h4">{book.author}</h3>
              <h4 className="book-card_h3">{book.name}</h4>
              <img
                className="book-card_img"
                src={book.image}
                alt="Book front side"
              />
              <p className="book-card_p">Price: {book.price} $</p>
              <button className="btn remove-btn" onClick={() => removeBook(book)}>Remove</button>
            </div>
          );
        })}
      </div>
      <div className="buy">
        <h3 className="buy_h3">
          Total amount: {addedBooks?.reduce((acc, book) => acc + book.price, 0)} $
        </h3>
          {addedBooks.length === 0 ? '' : (<button className="btn continue-btn" onClick={moveToOrder}>Continue</button>)}
      </div>
    </main>
  );
};

export default Cart;
