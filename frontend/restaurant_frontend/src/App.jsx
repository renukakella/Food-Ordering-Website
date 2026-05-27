import { useState } from "react";
import "./App.css";

import Signup from "../components/signup";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Reservation from "../components/Reservation";

function App() {
  const [page, setPage] = useState("signup");
  const [section, setSection] = useState("menu");
  const [username, setUsername] = useState("");

  return (
    <>
      {page === "signup" && (
        <Signup setPage={setPage} />
      )}

      {page === "login" && (
        <Login
          setPage={setPage}
          setUsername={setUsername}
        />
      )}

      {page === "main" && (
        <>
          <Navbar
            setSection={setSection}
            setPage={setPage}
          />

          {section === "menu" && (
            <Menu username={username} />
          )}

          {section === "reservation" && (
            <Reservation />
          )}
        </>
      )}
    </>
  );
}

export default App;