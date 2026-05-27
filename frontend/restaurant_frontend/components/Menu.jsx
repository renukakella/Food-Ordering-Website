import { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "./FoodCard";
import "../css/Menu.css";

function Menu({ username }) {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/foods/")
      .then((res) => setFoods(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="menu" id="menu">
      <h1>Food Menu</h1>
      <h3 className="welcome-text">Welcome, {username}</h3>

      <div className="menu-grid">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} username={username} />
        ))}
      </div>
    </section>
  );
}

export default Menu;