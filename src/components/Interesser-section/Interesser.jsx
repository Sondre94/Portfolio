import "./interesser.css";
import { InteresserSection } from "../../styles";
import { FaHiking, FaGamepad } from "react-icons/fa";

export default function Interesser() {
  return (
    <InteresserSection>
      <p>test</p>
      <div className="BtnSection">
        <button className="IconBtn">
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
