import React, { useState } from "react";
import "./App.css";

function App() {
  const logo: string = "Logo";
  const books: string = "Books";
  const header3: string = "Basket: items num and value";
  const [isActive, setActive] = useState<boolean>(false);
  const categories: string[] = [
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

  const toggleCategories = () => {
    setActive(!isActive);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="header-nav">
          <ul className="header-nav-ul">
            <li>{logo}</li>
            <li className="posRel" onClick={toggleCategories}>
              {books}{" "}
              {(
               <ul className={`categories-ul ${isActive ? 'visible' : 'hidden'}`}>
               {categories.map((category) => (
                 <li key={category}>{category}</li>
               ))}
             </ul>
             
              )}
            </li>
            <form action="#" className="search-book-form">
              <label
                htmlFor="search-book-id"
                className="search-book-form_label"
              >
                <input
                  type="text"
                  name="search-book"
                  id="search-book-id"
                  placeholder="Search a book"
                  required
                  className="search-book-form_input"
                />
              </label>
              <img
                type="submit"
                src={process.env.PUBLIC_URL + "search-icon.png"}
                alt="search icon"
                className="search-book-form_button"
              />
            </form>
            <li>{header3}</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
