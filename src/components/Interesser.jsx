import "../styles/interesser.css";
import { InteresserSection } from "../styles/styles";
import { FaHiking, FaGamepad } from "react-icons/fa";
import { useState } from "react";

export default function Interesser() {
  const [showText, setShowText] = useState(false);
  const click = () => setShowText(true);
  return (
    <InteresserSection>
      <div className="BtnSection">
        <button className="IconBtn" id="interesseBtn">
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
    </InteresserSection>
  );
}
