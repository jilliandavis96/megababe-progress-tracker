function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="header">
      <h1>🏋️‍♀️ Lagree Progress Tracker</h1>
      <nav>
        <button
          onClick={() => setCurrentPage("home")}
          className={currentPage === "home" ? "nav-btn active" : "nav-btn"}
        >
          Home
        </button>
        <button
          onClick={() => setCurrentPage("about")}
          className={currentPage === "about" ? "nav-btn active" : "nav-btn"}
        >
          About
        </button>
      </nav>
    </header>
  );
}

export default Header;