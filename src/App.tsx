import React, { useState, useEffect, useMemo } from "react";
import {
  HashRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Header from "./Components/Header.tsx";
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
  const [isActive, setActive] = useState<boolean>(false);
  const [searchedBook, setSearchedBook] = useState(null);
  const [addedBooks, setAddedBooks] = useState<Book[]>(() => {
    const storedBooks = sessionStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  const [addToCartAnimation, setAddToCartAnimation] = useState(false);

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
    const getAllBooks = async (): Promise<Book[]> => {
      const url = "http://localhost:8000/library";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error while fetching data: ${response.status}`);
        }
        const getData: { books: Book[] }[] = await response.json();
        const resultBooks: Book[] = getData.flatMap((data) => data.books);
        return setAllBooks(resultBooks);
      } catch {
        console.error("Error while fetching data.");
        return [];
      }
    };
    getAllBooks();
  }, []);

  useEffect(() => {
    const storedBooks = sessionStorage.getItem("books");
    setAddedBooks(storedBooks ? JSON.parse(storedBooks) : []);
  }, []);

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
    if (resultBook.length > 0) {
      e.target.searchBook.value = "";
      return setSearchedBook(resultBook);
    } else {
      alert("A keresett könyv nem található.");
      e.target.searchBook.value = "";
    }
  };
  const backFunction: Function = () => {
    setSearchedBook(null);
    setIsCurrentBook(false);
  };

  const addToCart = (id: number) => {
    const currBook = allBooks.find((book: Book) => book.id === id);
    setAddToCartAnimation(true);
    setTimeout(() => {
      setAddToCartAnimation(false);
    }, 3500);
    if (currBook) {
      setAddedBooks((prevBooks) => {
        const existingBook = prevBooks.find((book) => book.id === id);
        if (existingBook) {
          return prevBooks.map((book) =>
            book.id === id
              ? {
                  ...book,
                  quantity: (book.quantity || 1) + 1,
                  pay: (book.pay || book.price) + book.price,
                }
              : book
          );
        } else {
          return [
            ...prevBooks,
            { ...currBook, quantity: 1, pay: currBook.price },
          ];
        }
      });
    }
  };

  useEffect(() => {
    sessionStorage.setItem("books", JSON.stringify(addedBooks));
  }, [addedBooks]);

  const [currentAuthor, setCurrentAuthor] = useState<string>("");
  const [currentId, setCurrentId] = useState<number>(0);
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [currentName, setCurrentName] = useState<string>("");
  const [currentLongDescription, setCurrentLongDescription] =
    useState<string>("");
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [currentImg, setCurrentImg] = useState<string>("");
  const [isCurrentBook, setIsCurrentBook] = useState<boolean>(false);

  const renderOnlyOne = (id: number) => {
    const currentBook = allBooks.find((book: Book) => book.id === id);
    if (currentBook) {
      setCurrentAuthor(currentBook.author);
      setCurrentId(currentBook.id);
      setCurrentCategory(currentBook.category);
      setCurrentName(currentBook.name);
      setCurrentLongDescription(currentBook.longDescription);
      setCurrentPrice(currentBook.price);
      setCurrentImg(currentBook.image);
      setIsCurrentBook(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      alert("something went wrong");
    }
  };

  const isSuccessfulOrder = () => {
    setAddedBooks([]);
  };

  const [isVisibleArrow, setIsVisibleArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisibleArrow(true);
      } else {
        setIsVisibleArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <HashRouter>
      <div className="App">
        <Header
          toggleCategories={toggleCategories}
          isActive={isActive}
          addedBooks={addedBooks}
          searchBook={searchBook}
        />
        {isVisibleArrow && (
          <img
            onClick={scrollToTop}
            className="top-arrow"
            src={process.env.PUBLIC_URL + "blue-top-arrow.png"}
            alt="Top arrow icon"
          />
        )}
        <Link to="/cart">
          <p className={`message-box ${addToCartAnimation ? "animation" : ""}`}>
            Book added to the cart successfully!
          </p>
        </Link>
        <Routes>
          <Route
            path="/"
            element={
              searchedBook === null ? (
                <>
                  {isCurrentBook === false ? (
                    <>
                      <img
                        className="bg-img"
                        src={process.env.PUBLIC_URL + "Bookstore-bg.png"}
                        alt="bookstore"
                      />
                      <img
                        className="small-bg-img"
                        src={process.env.PUBLIC_URL + "mobile-size-bg.png"}
                        alt="bookstore"
                      />
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
                                  onClick={() => renderOnlyOne(book.id)}
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
                      <div
                        className="book-card unique-book"
                        key={currentAuthor}
                      >
                        <h3 className="book-card_h4">{currentAuthor}</h3>
                        <h4 className="book-card_h3">{currentName}</h4>
                        <img
                          className="book-card_img"
                          src={currentImg}
                          alt="Book front side"
                        />
                        <p className="book-card_p">
                          Category: {currentCategory}
                        </p>
                        <p className="book-card_p">{currentLongDescription}</p>
                        <p className="book-card_price">
                          Price: {currentPrice} $
                        </p>
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
                      <h3>May this interest you</h3>
                      <div className="other-books">
                        {allBooks
                          .filter(
                            (book: Book) =>
                              book.category === currentCategory &&
                              book.id !== currentId
                          )
                          .slice(0, 3)
                          .map((book: Book) => {
                            return (
                              <div className="small-book-card" key={book.id}>
                                <h3 className="small-book-card_h4">
                                  {book.author}
                                </h3>
                                <h4 className="small-book-card_h3">
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
                  )}
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
                  <button className="btn back-btn" onClick={backFunction}>
                    Back
                  </button>
                  <button
                    className="btn add-btn"
                    onClick={() => addToCart(searchedBook[0].id)}
                  >
                    Add to cart
                  </button>
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
              addedBooks.length > 0 ? (
                <Order isSuccessfulOrder={isSuccessfulOrder} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
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
      </div>
    </HashRouter>
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
  - addToCart függvény átadása a gyermekkomponeneknek
  - scrolltotop button
  - responsive design
  - kereső funkció átalakítása
  - borítók generálása
  - megrendelési űrlapot reszponzívvá tenni.
  - bg img
  - képre kattintáskor külön megjelenik a könyv részletekkel.
  - csak a book legyen pointer.
  - amikor csak 1 könyv jelenik meg, a részletekkel, akkor alatta ugyanabból a kategóriából még pár megjelenhet, pl író cím kép kombinációval, és az is kattintható lesz.
  - az oldal újratöltésénél kiürül a kosár, erre figyelmeztetés. Nem, --> sessionStorage
  
  TODO:
*/
