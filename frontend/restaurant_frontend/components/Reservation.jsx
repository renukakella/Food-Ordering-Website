import { useState } from "react";
import axios from "axios";
import "../css/Reservation.css";

function Reservation() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");
  const [phone, setPhone] = useState("");

  function handleReservation(e) {
    e.preventDefault();

    axios.post("http://127.0.0.1:8000/api/reserve/", {
      name,
      date,
      time,
      people,
      phone,
    })
    .then((res) => {
      alert(res.data.message);
      setName("");
      setDate("");
      setTime("");
      setPeople("");
      setPhone("");
    })
    .catch((err) => {
      console.log(err);
      alert("Reservation failed");
    });
  }

  return (
    <section className="reservation" id="reservation">
      <h2>Table Reservation</h2>

      <form className="reservation-form" onSubmit={handleReservation}>
        <input type="text" placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)} required />

        <input type="date" value={date}
          onChange={(e) => setDate(e.target.value)} required />

        <input type="time" value={time}
          onChange={(e) => setTime(e.target.value)} required />

        <input type="number" placeholder="People" value={people}
          onChange={(e) => setPeople(e.target.value)} required />

        <input type="text" placeholder="Phone" value={phone}
          onChange={(e) => setPhone(e.target.value)} required />

        <button type="submit">Reserve Table</button>
      </form>
    </section>
  );
}

export default Reservation;