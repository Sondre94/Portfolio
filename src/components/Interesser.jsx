import "../styles/interesser.css";
import { InteresserSection } from "../styles/styles";
import { FaHiking, FaGamepad, FaDog } from "react-icons/fa";
import { MdOutlineSportsMotorsports } from "react-icons/md";
import { GoRocket } from "react-icons/go";
import { useState } from "react";
import { TEXT } from "./textconsts";

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
          onMouseEnter={() => toggleShowText1(true)}
          onMouseLeave={() => toggleShowText1(false)}
        >
          <FaHiking />
        </button>
        <button
          className="IconBtn"
          onMouseEnter={() => toggleShowText2(true)}
          onMouseLeave={() => toggleShowText2(false)}
        >
          <FaGamepad />
        </button>{" "}
        <button
          className="IconBtn"
          onMouseEnter={() => toggleShowText3(true)}
          onMouseLeave={() => toggleShowText3(false)}
        >
          <MdOutlineSportsMotorsports />
        </button>
        <button
          className="IconBtn"
          onMouseEnter={() => toggleShowText4(true)}
          onMouseLeave={() => toggleShowText4(false)}
        >
          <FaDog />
        </button>
        <button
          className="IconBtn"
          onMouseEnter={() => toggleShowText5(true)}
          onMouseLeave={() => toggleShowText5(false)}
        >
          <GoRocket />
        </button>
      </div>
      <div className="textContainer">
        {showtext1 && (
          <div className="textBox">{TEXT.INTERESSE_BUTTONS.HIKING}</div>
        )}
        {showtext2 && (
          <div className="textBox">{TEXT.INTERESSE_BUTTONS.GAMING}</div>
        )}
        {showtext3 && (
          <div className="textBox">{TEXT.INTERESSE_BUTTONS.FORMULA_1}</div>
        )}
        {showtext4 && (
          <div className="textBox">{TEXT.INTERESSE_BUTTONS.DOGS}</div>
        )}
        {showtext5 && (
          <div className="textBox">{TEXT.INTERESSE_BUTTONS.SPACE}</div>
        )}
      </div>
    </InteresserSection>
  );
}
