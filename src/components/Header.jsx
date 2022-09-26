import { AiOutlineArrowDown } from "react-icons/ai";
import { TEXT } from "./textconsts";
import {
  StyledHeaderContainer,
  SectionTitle,
  SectionParagraph,
  HeaderContainerLeft,
  StyledButton,
} from "../styles/styles";

export default function Header() {
  return (
    <StyledHeaderContainer>
      <HeaderContainerLeft>
        <h1 className="headline">Sondre Førde</h1>
        <SectionTitle>Front-end Utvikler</SectionTitle>
        <hr></hr>
        <SectionParagraph>{TEXT.HEADER_PARAGRAPH}</SectionParagraph>
        <StyledButton>
          Les mer
          <AiOutlineArrowDown className="icon" />
        </StyledButton>
      </HeaderContainerLeft>
      <img src={require("../images/profilbilde.png")} alt="profilbilde" />
    </StyledHeaderContainer>
  );
}
