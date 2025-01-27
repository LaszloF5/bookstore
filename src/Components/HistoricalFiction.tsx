import React from 'react';
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

interface BookListProps {
    books: Book[];
}

const HistoricalFiction: React.FC<BookListProps> = ({books}) => {
    return (
        <main className="main-container">
        <h2>Historical fiction books</h2>
        <div className="books-container">
          {books.map((book: Book) => {
            return (
              <div className="book-card" key={book.id}>
                <h3 className="book-card_h4">{book.author}</h3>
                <h4 className="book-card_h3">{book.name}</h4>
                <img
                  className="book-card_img"
                  src={book.image}
                  alt="Book front side"
                />
                <p className="book-card_p">{book.longDescription}</p>
                <p className="book-card_p">Price: {book.price} $</p>
              </div>
            );
          })}
        </div>
      </main>
    );
}

export default HistoricalFiction;