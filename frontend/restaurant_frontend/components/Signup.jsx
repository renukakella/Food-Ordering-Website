import { useState } from "react";
import axios from "axios";
import "../css/signup.css";

function Signup({ setPage }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    console.log("Signup button clicked");

    axios
      .post("http://127.0.0.1:8000/api/signup/", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        alert("Signup successful. Please login now.");
        setPage("login");
      })
      .catch((err) => {
        console.log(err);
        alert("Signup failed. Check backend server.");
      });
  }

  return (
    <section className="signup">
      <h2>Create Account</h2>

      <form className="signup-form" onSubmit={handleSignup}>
        <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} required />

        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Signup</button>
      </form>

      <p>
        Already have account?{" "}
        <button type="button" className="link-btn" onClick={() => setPage("login")}>
          Login
        </button>
      </p>
    </section>
  );
}

export default Signup;