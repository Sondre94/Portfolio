import "../styles/interesser.css";
import { InteresserSection } from "../styles/styles";
import { FaHiking, FaGamepad } from "react-icons/fa";
import { useState } from "react";

export default function Interesser() {
  const [show, toggleShow] = useState(false);
  return (
    <InteresserSection>
      <div className="BtnSection">
        <button className="IconBtn" onClick={() => toggleShow(!show)}>
          <FaHiking></FaHiking>
        </button>
        {show && <div> test</div>}
        <button className="IconBtn" onClick={() => toggleShow(!show)}>
          <FaGamepad></FaGamepad>
        </button>{" "}
        {show && <div> test2</div>}
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
    </InteresserSection>
  );
}
