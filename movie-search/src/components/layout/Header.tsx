import "../../styles/header.scss";

import { Link } from "react-router-dom";
import SearchForm from "../search/SearchForm";

const Header = () => (
  // src/components/layout/Header.tsx
  <header className="header" role="banner">
    <div className="header-content">
      <Link to="/" className="logo">
        Movie Search
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <SearchForm />
    </div>
  </header>
);

export default Header;
