import "../css/Navbar.css";

function Navbar({ setSection, setPage }) {

  function handleLogout() {
    setPage("login");
  }

  return (
    <nav className="navbar">

      <h1>Restaurant</h1>

      <div className="nav-buttons">

        <button onClick={() => setSection("menu")}>
          Menu
        </button>

        <button onClick={() => setSection("reservation")}>
          Reserve
        </button>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;