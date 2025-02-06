import React from "react";
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
  addToCart: Function;
  className: string;
  renderOnlyOne: Function;
  isCurrentBook: Boolean;
  setIsCurrentBook: Boolean;
  currentName: string;
  currentAuthor: string;
  currentImg: string;
  currentCategory: string;
  currentLongDescription: string;
  currentPrice: number;
  currentId: number;
  backFunction: Function;
  allBooks: Book[];
}

const HistoricalFiction: React.FC<BookListProps> = ({
  books,
  addToCart,
  className,
  renderOnlyOne,
  isCurrentBook,
  currentName,
  currentAuthor,
  currentImg,
  currentCategory,
  currentLongDescription,
  currentPrice,
  currentId,
  backFunction,
}) => {
  return (
    <main className="main-container">
      <h2 className="select-none">Historical fiction books</h2>
      {isCurrentBook === true ? (
        <>
          <main className="main-container">
            <div className="book-card unique-book" key={currentAuthor}>
              <h3 className="book-card_h4 select-none">{currentAuthor}</h3>
              <h4 className="book-card_h3 select-none">{currentName}</h4>
              <img
                className="book-card_img"
                src={currentImg}
                alt="Book front side"
              />
              <p className="book-card_p">Category: {currentCategory}</p>
              <p className="book-card_p">{currentLongDescription}</p>
              <p className="book-card_price">Price: {currentPrice} $</p>
              <button className="btn back-btn" onClick={backFunction}>
                Back
              </button>
              <button
                className="btn book-card_btn add-btn"
                onClick={() => addToCart(currentId)}
              >
                Add to cart
              </button>
            </div>
            <h3 className="select-none">May this interest you</h3>
            <div className="other-books">
              {books
                .filter(
                  (book: Book) =>
                    book.category === currentCategory && book.id !== currentId
                )
                .slice(0, 3)
                .map((book: Book) => {
                  return (
                    <div className="small-book-card" key={book.id}>
                      <h3 className="small-book-card_h3 select-none">
                        {book.author}
                      </h3>
                      <h4 className="small-book-card_h4 select-none">
                        {book.name}
                      </h4>
                      <img
                        className="small-book-card_img"
                        src={book.image}
                        alt="Book front side"
                      />
                      <button
                        className="continue-btn btn"
                        onClick={() => renderOnlyOne(book.id)}
                      >
                        Show me!
                      </button>
                    </div>
                  );
                })}
            </div>
          </main>
        </>
      ) : (
        <>
          <div className="books-container">
            {books.map((book: Book) => {
              return (
                <div className={`book-card ${className}`} key={book.id}>
                  <h3 className="book-card_h4 select-none">{book.author}</h3>
                  <h4 className="book-card_h3 select-none">{book.name}</h4>
                  <img
                    className="book-card_img"
                    src={book.image}
                    alt="Book front side"
                  />
                  <p className="book-card_p">{book.longDescription}</p>
                  <p className="book-card_p">Price: {book.price} $</p>
                  <button
                    className="btn book-card_btn add-btn"
                    onClick={() => addToCart(book.id)}
                  >
                    Add to cart
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </main>
  );
};

export default HistoricalFiction;
