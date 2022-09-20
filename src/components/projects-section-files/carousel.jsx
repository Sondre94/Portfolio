import "./carousel.css";
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
          <label className="card" for="item-1" id="card-1">
            <div className="card-img">
              <img
                src={require("../../images/placeholder-1.png")}
                className="project-img"
              />
            </div>
          </label>
          <label className="card" for="item-2" id="card-2">
            <div className="card-img">
              <img
                src={require("../../images/placeholder-2.png")}
                className="project-img"
              />
            </div>
          </label>
          <label className="card" for="item-3" id="card-3">
            <div className="card-img">
              <img
                src={require("../../images/placeholder-3.png")}
                className="project-img"
              />
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
