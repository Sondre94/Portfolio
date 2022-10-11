import { TEXT } from "./textconsts";
import {
  StyledHeaderContainer,
  SectionTitle,
  SectionParagraph,
  HeaderContainerLeft,
  StyledButton,
  ArrowDownIcon,
  NameHeadline,
  ProfilImg,
} from "../styles/styles";

import ProfilBilde from "../images/profilbilde2.0.png";

export default function Header() {
  return (
    <StyledHeaderContainer>
      <HeaderContainerLeft>
        <NameHeadline>{TEXT.HEADER_SECTION.NAME}</NameHeadline>
        <SectionTitle>{TEXT.HEADER_SECTION.JOB}</SectionTitle>
        <SectionParagraph>
          {TEXT.HEADER_SECTION.HEADER_PARAGRAPH}
        </SectionParagraph>
        <StyledButton>
          <a href="#about--section">
            {TEXT.BUTTON_TEXT.READ_MORE}
            <ArrowDownIcon />
          </a>
        </StyledButton>
      </HeaderContainerLeft>
      <ProfilImg src={ProfilBilde} alt="profilbilde" />
    </StyledHeaderContainer>
  );
}
