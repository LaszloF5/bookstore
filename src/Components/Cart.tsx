import React from "react";
import { useNavigate } from "react-router-dom";
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
  quantity: number;
  pay: number;
}

interface addedBooksProps {
  addedBooks: Book[];
  setAddedBooks: React.Dispatch<React.setStateAction<Book[]>>;
}

const Cart: React.FC<addedBooksProps> = ({ addedBooks, setAddedBooks }) => {
  const navigate = useNavigate();

  const removeBook = (bookToRemove: Book) => {
    const updatedBooks = addedBooks.filter(
      (book: Book) => book.id !== bookToRemove.id
    );
    setAddedBooks(updatedBooks);
  };

  const minusOne = (minusQty: Book) => {
    const updatedBooks = (prevBooks) =>
      prevBooks.map((book) =>
        book.id === minusQty.id
          ? { ...book, quantity: book.quantity - 1, pay: book.pay - book.price }
          : book
      );
    setAddedBooks(updatedBooks);
  };

  const moveToOrder = () => {
    navigate("/order", { state: { addedBooks } });
  };

  const backtoTheBooks = () => {
    navigate('/');
  }

  return (
    <main className="main-container">
      <h2>Shopping Cart</h2>
      <div className="books-container">
        {addedBooks.length === 0 ? (
          <span className="empty-span">Your cart is empty.</span>
        ) : (
          ""
        )}
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
              <p className="book-card_p">
                Quantity: {book.quantity}{" "}
                {book.quantity > 1 ? (
                  <button onClick={() => minusOne(book)}>-1</button>
                ) : (
                  ""
                )}
              </p>
              <button
                className="btn remove-btn"
                onClick={() => removeBook(book)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <div className="buy">
        <h3 className="buy_h3">
          Total amount:{" "}
          {Math.round(
            addedBooks.reduce((acc, book) => acc + book.pay, 0) * 100
          ) / 100}{" "}
          $
        </h3>
        {addedBooks.length === 0 ? (
          ""
        ) : (
          <>
            <button className="btn continue-btn" onClick={moveToOrder}>
              Continue
            </button>
            <button className="btn add-btn margin-btn" onClick={backtoTheBooks}>
            Back to the books
            </button>
          </>
        )}
      </div>
    </main>
  );
};

export default Cart;
