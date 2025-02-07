import React from "react";
import { HashRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

export default function Header ({
    toggleCategories,
    isActive,
    addedBooks,
    searchBook,
    deleteSearchResult,
})
{
     const navigate = useNavigate();
    return (
        <header className="App-header">
        <nav className="header-nav">
          <ul className="header-nav-ul">
            <li>
              <Link to="/" onClick={deleteSearchResult}>Home</Link>
            </li>
            <li onClick={toggleCategories} className='header-nav-ul_li unique-li'>
              {/* <a href="#">Books</a> */}
              Books
              {
                <ul
                  className={`categories-ul ${
                    isActive ? "visible" : "hidden"
                  }`}
                >
                  <li className="categories-ul-li_link">
                    <Link to="/" onClick={deleteSearchResult}>All books</Link>
                  </li>
                  <li>
                    <Link to="/history" onClick={deleteSearchResult}>History</Link>
                  </li>
                  <li>
                    <Link to="/fantasy" onClick={deleteSearchResult}>Fantasy</Link>
                  </li>
                  <li>
                    <Link to="/thriller" onClick={deleteSearchResult}>Thriller</Link>
                  </li>
                  <li>
                    <Link to="/romance" onClick={deleteSearchResult}>Romance</Link>
                  </li>
                  <li>
                    <Link to="/science%20fiction" onClick={deleteSearchResult}>Science fiction</Link>
                  </li>
                  <li>
                    <Link to="/historical%20fiction" onClick={deleteSearchResult}>Historical fiction</Link>
                  </li>
                  <li>
                    <Link to="/horror" onClick={deleteSearchResult}>Horror</Link>
                  </li>
                  <li>
                    <Link to="/travel" onClick={deleteSearchResult}>Travel</Link>
                  </li>
                  <li>
                    <Link to="/food%20and%20drink" onClick={deleteSearchResult}>Food and drink</Link>
                  </li>
                  <li>
                    <Link to="/sport" onClick={deleteSearchResult}>Sport</Link>
                  </li>
                </ul>
              }
            </li>
            <li>
              <Link to="/contact" onClick={deleteSearchResult}>Contact</Link>
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