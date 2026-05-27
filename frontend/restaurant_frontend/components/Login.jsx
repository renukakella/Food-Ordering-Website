import { useState } from "react";
import axios from "axios";
import "../css/Login.css";

function Login({ setPage, setUsername }) {
  const [username, setUserNameInput] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    axios.post("http://127.0.0.1:8000/api/login/", {
      username: username,
      password: password,
    })
    .then((res) => {
      if (res.data.message === "Login successful") {
        alert("Login successful");
        setUsername(res.data.username);
        setPage("main");
      } else {
        alert("Invalid username or password");
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Login failed");
    });
  }

  return (
    <section className="login">
      <h2>Login</h2>

      <form className="login-form" onSubmit={handleLogin}>
        <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUserNameInput(e.target.value)} required />

        <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>

      <p>
        New customer?{" "}
        <button className="link-btn" onClick={() => setPage("signup")}>
          Signup
        </button>
      </p>
    </section>
  );
}

export default Login;