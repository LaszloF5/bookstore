import React, { useState, useEffect } from "react";
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

  const [allBooks, setAllBooks] = useState<(string | number)[]>([]);
  const [historyBooks, setHistoryBooks] = useState<(string | number)[]>([]);
  const [fantasyBooks, setFantasyBooks] = useState<(string | number)[]>([]);
  const [thrillerBooks, setThrillerBooks] = useState<(string | number)[]>([]);
  const [romanceBooks, setRomanceBooks] = useState<(string | number)[]>([]);
  const [scienceFictionBooks, setScienceFictionBooks] = useState<
    (string | number)[]
  >([]);
  const [historicalFictionBooks, setHistoricalFictionBooks] = useState<
    (string | number)[]
  >([]);
  const [horrorBooks, setHorrorBooks] = useState<(string | number)[]>([]);
  const [travelBooks, setTravelBooks] = useState<(string | number)[]>([]);
  const [foodAndDrinkBooks, setFoodAndDrinkBooks] = useState<
    (string | number)[]
  >([]);
  const [sportBooks, setSportBooks] = useState<(string | number)[]>([]);

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
        setHistoryBooks(
          resultBooks.filter((book) => book.category === "history")
        );
        setFantasyBooks(
          resultBooks.filter((book) => book.category === "fantasy")
        );
        setThrillerBooks(
          resultBooks.filter((book) => book.category === "thriller")
        );
        setRomanceBooks(
          resultBooks.filter((book) => book.category === "romance")
        );
        setScienceFictionBooks(
          resultBooks.filter((book) => book.category === "science fiction")
        );
        setHistoricalFictionBooks(
          resultBooks.filter((book) => book.category === "historical fiction")
        );
        setHorrorBooks(
          resultBooks.filter((book) => book.category === "horror")
        );
        setTravelBooks(
          resultBooks.filter((book) => book.category === "travel")
        );
        setFoodAndDrinkBooks(
          resultBooks.filter((book) => book.category === "food and drink")
        );
        setSportBooks(resultBooks.filter((book) => book.category === "sport"));
        return setAllBooks(resultBooks);
      } catch {
        console.error("Error fetching books");
        return [];
      }
    };
    getAllBooks();
  }, []);

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
      setAddedBooks([...addedBooks, currBook]);
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
                <Link to="/cart">
                  <img
                    className="shopping-cart"
                    src={process.env.PUBLIC_URL + "shopping-cart.png"}
                    alt="cart"
                  />
                </Link>
              </li>
            </ul>
          </nav>
          <p className={`message-box ${addToCartAnimation ? 'animation' : ''}`}>Book added to the cart successfully!</p>
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
                            <p className="book-card_p">Price: {book.price} $</p>
                            <button className="btn add-btn" onClick={() => addToCart(book.id)}>
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
          <Route
            path="/order"
            element={
              <Order />
            }
          />
          <Route path="/history" element={<History books={historyBooks} />} />
          <Route path="/fantasy" element={<Fantasy books={fantasyBooks} />} />
          <Route
            path="/thriller"
            element={<Thriller books={thrillerBooks} />}
          />
          <Route path="/romance" element={<Romance books={romanceBooks} />} />
          <Route
            path="/science fiction"
            element={<ScienceFiction books={scienceFictionBooks} />}
          />
          <Route
            path="/historical fiction"
            element={<HistoricalFiction books={historicalFictionBooks} />}
          />
          <Route path="/horror" element={<Horror books={horrorBooks} />} />
          <Route path="/travel" element={<Travel books={travelBooks} />} />
          <Route
            path="/food and drink"
            element={<FoodAndDrink books={foodAndDrinkBooks} />}
          />
          <Route path="/sport" element={<Sport books={sportBooks} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

/*
  TODO:
  - addToCart függvény átadása a gyermekkomponeneknek
  - add to card btn a gyermekkomponenseknek
  - back gomb a gyermekkomponenseknek
  - borítók generálása
  - kereső funkciót lehet kicsit át lehetne alakítani (in time keressen, és jelenítse meg? idk majd kiderül)
  - responsive design
  - árak kiemelése (bold)
  
*/