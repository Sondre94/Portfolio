import { AiOutlineArrowDown } from "react-icons/ai";

import {
  StyledHeaderContainer,
  SectionTitle,
  SectionParagraph,
  HeaderContainerLeft,
  StyledButton,
} from "../styles";

export default function Header() {
  return (
    <StyledHeaderContainer>
      <HeaderContainerLeft>
        <SectionTitle>agasgsdfgsfg</SectionTitle>
        <SectionParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula
          metus quam, in laoreet ipsum sollicitudin id.
        </SectionParagraph>
        <StyledButton>
          Les mer
          <AiOutlineArrowDown className="icon" />
        </StyledButton>
      </HeaderContainerLeft>
      <img src={require("../images/profilbilde.png")} alt="profilbilde" />
    </StyledHeaderContainer>
  );
}
