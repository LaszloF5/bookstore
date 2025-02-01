import React from "react";
import { HashRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

export default function Header ({
    toggleCategories,
    isActive,
    addedBooks,
    searchBook,
})
{
     const navigate = useNavigate();
    return (
        <header className="App-header">
        <nav className="header-nav">
          <ul className="header-nav-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li onClick={toggleCategories} className='header-nav-ul_li'>
              Books
              {
                <ul
                  className={`categories-ul ${
                    isActive ? "visible" : "hidden"
                  }`}
                >
                  <li className="categories-ul-li_link">
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
            <form
              action="#"
              method="POST"
              className="search-book-form"
              onSubmit={searchBook}
            >
                <input
                  type="text"
                  name="searchBook"
                  id="search-book-id"
                  placeholder="Search a book"
                  aria-label="Search a book"
                  required
                  className="search-book-form_input"
                />
              <button type="submit" className="search-book-form_button" aria-label="Search button" onClick={() => navigate('/')}>
                <img
                  src={process.env.PUBLIC_URL + "/search-icon.png"}
                  alt="Search icon"
                  className="search-icon"
                />
              </button>
            </form>
          </ul>
        </nav>
      </header>
    )
}