import "../styles/interesser.css";
import { InteresserSection } from "../styles/styles";
import { FaHiking, FaGamepad } from "react-icons/fa";
import { useState } from "react";

export default function Interesser() {
  const [isOpened, setIsOpened] = useState(false);
  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }
  return (
    <InteresserSection>
      <div className="BtnSection">
        <button className="IconBtn" id="interesseBtn" onClick={toggle}>
          <FaHiking></FaHiking>
        </button>
        <button className="IconBtn">
          <FaGamepad></FaGamepad>
        </button>{" "}
        <button className="IconBtn">
          <FaHiking></FaHiking>
        </button>
        <button className="IconBtn">
          <FaGamepad></FaGamepad>
        </button>
        <button className="IconBtn">
          <FaHiking></FaHiking>
        </button>
      </div>
      {isOpened && (
        <div className="textBox">
          <p>test</p>
        </div>
      )}
    </InteresserSection>
  );
}
