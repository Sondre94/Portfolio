import "./Projectstyles.css";
import { useState } from "react";

export default function Carousel() {
  const [selected, setSelected] = useState("1");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <>
      <div className="card-container">
        <input
          type="radio"
          name="slider"
          id="item-1"
          value="1"
          checked={selected === "1"}
          onChange={handleChange}
        />
        <input
          type="radio"
          name="slider"
          id="item-2"
          value="2"
          checked={selected === "2"}
          onChange={handleChange}
        />
        <input
          type="radio"
          name="slider"
          id="item-3"
          value="3"
          checked={selected === "3"}
          onChange={handleChange}
        />
        <div className="cards">
          <label className="card" for="item-1" id="song-1">
            <img
              src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
              alt="song"
              className="card-img"
            />
          </label>
          <label className="card" for="item-2" id="song-2">
            <img
              src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
              alt="song"
              className="card-img"
            />
          </label>
          <label className="card" for="item-3" id="song-3">
            <img
              src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="song"
              className="card-img"
            />
          </label>
        </div>
      </div>
    </>
  );
}
