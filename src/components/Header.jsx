import { AiOutlineArrowDown } from "react-icons/ai";
import { headerparagraph } from "./textconsts";
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
        <SectionParagraph>{headerparagraph}</SectionParagraph>
        <StyledButton>
          Les mer
          <AiOutlineArrowDown className="icon" />
        </StyledButton>
      </HeaderContainerLeft>
      <img src={require("../images/profilbilde.png")} alt="profilbilde" />
    </StyledHeaderContainer>
  );
}
