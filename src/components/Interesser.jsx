import "../styles/interesser.css";

import {
  BtnSection,
  HoverTextRender,
  IconBtn,
  InteresserSection,
  InteresseTitle,
  TextContainer,
} from "../styles/styles";

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
      <InteresseTitle>{TEXT.INTERESSE_TITLE}</InteresseTitle>
      <BtnSection>
        <IconBtn
          onMouseEnter={() => toggleShowText1(true)}
          onMouseLeave={() => toggleShowText1(false)}
        >
          <FaHiking />
        </IconBtn>
        <IconBtn
          onMouseEnter={() => toggleShowText2(true)}
          onMouseLeave={() => toggleShowText2(false)}
        >
          <FaGamepad />
        </IconBtn>
        <IconBtn
          onMouseEnter={() => toggleShowText3(true)}
          onMouseLeave={() => toggleShowText3(false)}
        >
          <MdOutlineSportsMotorsports />
        </IconBtn>
        <IconBtn
          onMouseEnter={() => toggleShowText4(true)}
          onMouseLeave={() => toggleShowText4(false)}
        >
          <FaDog />
        </IconBtn>
        <IconBtn
          onMouseEnter={() => toggleShowText5(true)}
          onMouseLeave={() => toggleShowText5(false)}
        >
          <GoRocket />
        </IconBtn>
      </BtnSection>
      <TextContainer>
        {showtext1 && (
          <HoverTextRender>{TEXT.INTERESSE_BUTTONS.HIKING}</HoverTextRender>
        )}
        {showtext2 && (
          <HoverTextRender>{TEXT.INTERESSE_BUTTONS.GAMING}</HoverTextRender>
        )}
        {showtext3 && (
          <HoverTextRender>{TEXT.INTERESSE_BUTTONS.FORMULA_1}</HoverTextRender>
        )}
        {showtext4 && (
          <HoverTextRender>{TEXT.INTERESSE_BUTTONS.DOGS}</HoverTextRender>
        )}
        {showtext5 && (
          <HoverTextRender>{TEXT.INTERESSE_BUTTONS.SPACE}</HoverTextRender>
        )}
      </TextContainer>
    </InteresserSection>
  );
}
