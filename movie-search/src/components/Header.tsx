import "../styles/header.scss";

import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">Movie Search</h1>
      <SearchForm />
    </header>
  );
};

export default Header;
