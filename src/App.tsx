import React, { useState, useEffect, useMemo } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import History from "./Components/History.tsx";
import Fantasy from "./Components/Fantasy.tsx";
import Thriller from "./Components/Thriller.tsx";
import Romance from "./Components/Romance.tsx";
import ScienceFiction from "./Components/ScienceFiction.tsx";
import HistoricalFiction from "./Components/HistoricalFiction.tsx";
import Horror from "./Components/Horror.tsx";
import Travel from "./Components/Travel.tsx";
import FoodAndDrink from "./Components/FoodAndDrink.tsx";
import Sport from "./Components/Sport.tsx";
import Cart from "./Components/Cart.tsx";
import Order from "./Components/Order.tsx";
import "./App.css";

function App() {
  const books: string = "Books";
  const [isActive, setActive] = useState<boolean>(false);
  const [searchedBook, setSearchedBook] = useState(null);
  const [addedBooks, setAddedBooks] = useState([]);
  const [addToCartAnimation, setAddToCartAnimation] = useState(false);

  const categories: string[] = [
    "All books",
    "history",
    "fantasy",
    "thriller",
    "romance",
    "science fiction",
    "historical fiction",
    "horror",
    "travel",
    "food and drink",
    "sport",
  ];

  const [allBooks, setAllBooks] = useState<Book[]>([]);

  const toggleCategories: Function = () => {
    setActive(!isActive);
  };

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

  useEffect(() => {
    // Get all books
    const getAllBooks = async (): Promise<Book[]> => {
      const url = "http://localhost:8000/library";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Hiba a lekérdezés során: ${response.status}`);
        }
        const getData: { books: Book[] }[] = await response.json();
        const resultBooks: Book[] = getData.flatMap((data) => data.books);
        return setAllBooks(resultBooks);
      } catch {
        console.error("Error fetching books");
        return [];
      }
    };
    getAllBooks();
  }, []);

  // const [allBooks, setAllBooks] = useState<Book[]>([]);

  const historyBooks = useMemo(
    () => allBooks.filter((book: Book) => book.category === "history"),
    [allBooks]
  );
  const fantasyBooks = useMemo(
    () => allBooks.filter((book: Book) => book.category === "fantasy"),
    [allBooks]
  );
  const thrillerBooks = useMemo(
    () => allBooks.filter((book: Book) => book.category === "thriller"),
    [allBooks]
  );
  const romanceBooks = useMemo(
    () => allBooks.filter((book: Book) => book.category === "romance"),
    [allBooks]
  );
  const scienceFictionBooks = useMemo(
    () => allBooks.filter((book: Book) => book.category === "science fiction"),
    [allBooks]
  );
  const historicalFictionBooks = useMemo(
    () =>
      allBooks.filter((book: Book) => book.category === "historical fiction"),
    [allBooks]
  );
  const horrorBooks = useMemo(
    () => allBooks.filter((book: Book) => book.category === "horror"),
    [allBooks]
  );
  const travelBooks = useMemo(
    () => allBooks.filter((book: Book) => book.category === "travel"),
    [allBooks]
  );
  const foodAndDrinkBooks = useMemo(
    () => allBooks.filter((book: Book) => book.category === "food and drink"),
    [allBooks]
  );
  const sportBooks = useMemo(
    () => allBooks.filter((book: Book) => book.category === "sport"),
    [allBooks]
  );

  const searchBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const bookName = formData.get("searchBook") as string;
    const resultBook = allBooks.filter(
      (book: Book) => book.name === bookName || book.author === bookName
    );
    console.log(resultBook);
    return setSearchedBook(resultBook);
  };

  const backFunction: Function = () => {
    setSearchedBook(null);
  };

  const addToCart = (id: number) => {
    const currBook = allBooks.find((book: Book) => book.id === id);
    setAddToCartAnimation(true);
    setTimeout(() => {
      setAddToCartAnimation(false);
    }, 3500);
    if (currBook) {
      setAddedBooks((prevBooks) => [...prevBooks, currBook]);
      console.log("Added books: ", addedBooks);
    }
  };

  return (
    <div className="App">
      <HashRouter>
        <header className="App-header">
          <nav className="header-nav">
            <ul className="header-nav-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li onClick={toggleCategories}>
                {books}{" "}
                {
                  <ul
                    className={`categories-ul ${
                      isActive ? "visible" : "hidden"
                    }`}
                  >
                    <li>
                      <Link to="/">All books</Link>
                    </li>
                    <li>
                      <Link to="/history">History</Link>
                    </li>
                    <li>
                      <Link to="/fantasy">Fantasy</Link>
                    </li>
                    <li>
                      <Link to="/thriller">Thriller</Link>
                    </li>
                    <li>
                      <Link to="/romance">Romance</Link>
                    </li>
                    <li>
                      <Link to="/science%20fiction">Science fiction</Link>
                    </li>
                    <li>
                      <Link to="/historical%20fiction">Historical fiction</Link>
                    </li>
                    <li>
                      <Link to="/horror">Horror</Link>
                    </li>
                    <li>
                      <Link to="/travel">Travel</Link>
                    </li>
                    <li>
                      <Link to="/food%20and%20drink">Food and drink</Link>
                    </li>
                    <li>
                      <Link to="/sport">Sport</Link>
                    </li>
                  </ul>
                }
              </li>
              <form
                action="#"
                method="POST"
                className="search-book-form"
                onSubmit={searchBook}
              >
                <label
                  htmlFor="search-book-id"
                  className="search-book-form_label"
                >
                  <input
                    type="text"
                    name="searchBook"
                    id="search-book-id"
                    placeholder="Search a book"
                    required
                    className="search-book-form_input"
                  />
                </label>
                <button type="submit" className="search-book-form_button">
                  <img
                    src={process.env.PUBLIC_URL + "/search-icon.png"}
                    alt="search icon"
                    className="search-icon"
                  />
                </button>
              </form>

              <li>
                <Link to="/cart" className="flex">
                  <img
                    className="shopping-cart"
                    src={process.env.PUBLIC_URL + "shopping-cart.png"}
                    alt="cart"
                  />
                  {addedBooks.length > 0 && (
                    <span className="item-counter">{addedBooks.length}</span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
          <p className={`message-box ${addToCartAnimation ? "animation" : ""}`}>
            Book added to the cart successfully!
          </p>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              searchedBook === null ? (
                <>
                  <h2 className="main-container_h2">All books</h2>
                  <main className="main-container">
                    <div className="books-container">
                      {allBooks.map((book: Book) => {
                        return (
                          <div className="book-card" key={book.id}>
                            <h3 className="book-card_h4">{book.author}</h3>
                            <h4 className="book-card_h3">{book.name}</h4>
                            <img
                              className="book-card_img"
                              src={book.image}
                              alt="Book front side"
                            />
                            <p className="book-card_p">
                              {book.shortDescription}
                            </p>
                            <p className="book-card_price">
                              Price: {book.price} $
                            </p>
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
                  </main>
                </>
              ) : (
                <main className="main-container">
                  <div className="book-card" key={searchedBook[0].id}>
                    <h3 className="book-card_h4">{searchedBook[0].author}</h3>
                    <h4 className="book-card_h3">{searchedBook[0].name}</h4>
                    <img
                      className="book-card_img"
                      src={searchedBook[0].image}
                      alt="Book front side"
                    />
                    <p className="book-card_p">
                      {searchedBook[0].longDescription}
                    </p>
                    <p className="book-card_p">
                      Price: {searchedBook[0].price} $
                    </p>
                  </div>
                  <button onClick={backFunction}>Back</button>
                  <button onClick={backFunction}>Add to cart</button>
                </main>
              )
            }
          />

          <Route
            path="/cart"
            element={
              <Cart addedBooks={addedBooks} setAddedBooks={setAddedBooks} />
            }
          />
          <Route path="/order" element={<Order />} />
          <Route
            path="/history"
            element={
              <History
                books={historyBooks}
                addToCart={addToCart}
                className="bigger-card"
              />
            }
          />
          <Route
            path="/fantasy"
            element={
              <Fantasy
                books={fantasyBooks}
                addToCart={addToCart}
                className="bigger-card"
              />
            }
          />
          <Route
            path="/thriller"
            element={
              <Thriller
                books={thrillerBooks}
                addToCart={addToCart}
                className="bigger-card"
              />
            }
          />
          <Route
            path="/romance"
            element={
              <Romance
                books={romanceBooks}
                addToCart={addToCart}
                className="bigger-card"
              />
            }
          />
          <Route
            path="/science fiction"
            element={
              <ScienceFiction
                books={scienceFictionBooks}
                addToCart={addToCart}
                className="bigger-card"
              />
            }
          />
          <Route
            path="/historical fiction"
            element={
              <HistoricalFiction
                books={historicalFictionBooks}
                addToCart={addToCart}
                className="bigger-card"
              />
            }
          />
          <Route
            path="/horror"
            element={
              <Horror
                books={horrorBooks}
                addToCart={addToCart}
                className="bigger-card"
              />
            }
          />
          <Route
            path="/travel"
            element={
              <Travel
                books={travelBooks}
                addToCart={addToCart}
                className="bigger-card"
              />
            }
          />
          <Route
            path="/food and drink"
            element={
              <FoodAndDrink
                books={foodAndDrinkBooks}
                addToCart={addToCart}
                className="bigger-card"
              />
            }
          />
          <Route
            path="/sport"
            element={
              <Sport
                books={sportBooks}
                addToCart={addToCart}
                className="bigger-card"
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

/*
  Kész:
  - 1 kis számlálót beépíteni a cart-hoz, hogy mutassa a hozzáadott tételek számát.
  - add to card btn a gyermekkomponenseknek
  - egységesíteni a book-card méreteit (pl heading, leírás stb, hogy ne legyenek egymástól elcsúszva az elemek vízszintesen.)
  - A hosszú leírásnál nembiztos h jól kifogja adni az add to cart. (megoldva);
  - árak kiemelése (bold)

  TODO:
  - addToCart függvény átadása a gyermekkomponeneknek
  - back gomb a gyermekkomponenseknek
  - borítók generálása
  - kereső funkciót lehet kicsit át lehetne alakítani (in time keressen, és jelenítse meg? idk majd kiderül)
  - responsive design
  - scrolltotop button
  - bg img
*/
