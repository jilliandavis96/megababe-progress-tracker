// Header displays the app title and navigation buttons
function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="header">
      <h1>🏋️‍♀️ Megababe Progress Tracker</h1>
      {/* Nav buttons switch between Home and About pages using conditional rendering */}
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