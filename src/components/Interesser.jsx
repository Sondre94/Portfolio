import "../styles/interesser.css";
import { InteresserSection } from "../styles/styles";
import { FaHiking, FaGamepad } from "react-icons/fa";
import { useState } from "react";
import {
  interesse1,
  interesse2,
  interesse3,
  interesse4,
  interesse5,
} from "./textconsts";

export default function Interesser() {
  const [showtext1, toggleShowText1] = useState(false);
  const [showtext2, toggleShowText2] = useState(false);
  const [showtext3, toggleShowText3] = useState(false);
  const [showtext4, toggleShowText4] = useState(false);
  const [showtext5, toggleShowText5] = useState(false);

  return (
    <InteresserSection>
      <h3 className="interesseTitle">Interesser</h3>
      <div className="BtnSection">
        <button
          className="IconBtn"
          onClick={() => {
            toggleShowText1(true);
            toggleShowText2(false);
            toggleShowText3(false);
            toggleShowText4(false);
            toggleShowText5(false);
            if (showtext1 === true) {
              toggleShowText1(false);
            }
          }}
        >
          <FaHiking></FaHiking>
        </button>
        <button
          className="IconBtn"
          onClick={() => {
            toggleShowText1(false);
            toggleShowText2(true);
            toggleShowText3(false);
            toggleShowText4(false);
            toggleShowText5(false);
            if (showtext2 === true) {
              toggleShowText2(false);
            }
          }}
        >
          <FaGamepad></FaGamepad>
        </button>{" "}
        <button
          className="IconBtn"
          onClick={() => {
            toggleShowText1(false);
            toggleShowText2(false);
            toggleShowText3(true);
            toggleShowText4(false);
            toggleShowText5(false);
            if (showtext3 === true) {
              toggleShowText3(false);
            }
          }}
        >
          <FaHiking></FaHiking>
        </button>
        <button
          className="IconBtn"
          onClick={() => {
            toggleShowText1(false);
            toggleShowText2(false);
            toggleShowText3(false);
            toggleShowText4(true);
            toggleShowText5(false);
            if (showtext4 === true) {
              toggleShowText4(false);
            }
          }}
        >
          <FaGamepad></FaGamepad>
        </button>
        <button
          className="IconBtn"
          onClick={() => {
            toggleShowText1(false);
            toggleShowText2(false);
            toggleShowText3(false);
            toggleShowText4(false);
            toggleShowText5(true);
            if (showtext5 === true) {
              toggleShowText5(false);
            }
          }}
        >
          <FaHiking></FaHiking>
        </button>
      </div>
      <div className="textContainer">
        {showtext1 && <div className="textBox">{interesse1}</div>}
        {showtext2 && <div className="textBox">{interesse2}</div>}
        {showtext3 && <div className="textBox">{interesse3}</div>}
        {showtext4 && <div className="textBox">{interesse4}</div>}
        {showtext5 && <div className="textBox">{interesse5}</div>}
      </div>
    </InteresserSection>
  );
}
