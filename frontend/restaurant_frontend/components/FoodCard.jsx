import axios from "axios";
import "../css/FoodCard.css";

function FoodCard({ food, username }) {
  function handleOrder() {
    axios
      .post("http://127.0.0.1:8000/api/order/", {
        customer_name: username,
        food_name: food.name,
        quantity: 1,
        price: food.price,
      })
      .then((res) => {
        alert("Order placed successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Order failed");
      });
  }

  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />

      <div className="food-info">
        <h2>{food.name}</h2>
        <h3>₹{food.price}</h3>

        <button onClick={handleOrder}>Order Now</button>
      </div>
    </div>
  );
}

export default FoodCard;