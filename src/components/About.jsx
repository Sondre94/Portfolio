import {
  SectionTitleH3,
  AboutSection,
  AboutImage,
  UnderText,
  SectionGreenLine,
  AboutTextContainer,
  AboutThickText,
} from "../styles/styles";
import { TEXT } from "./textconsts";
import AboutImg from "../images/about.png";

export default function About() {
  return (
    <>
      <SectionTitleH3 className="no-padding">
        {TEXT.ABOUT_SECTION.ABOUT_TITLE}
      </SectionTitleH3>
      <SectionGreenLine />
      <AboutSection>
        <AboutTextContainer>
          <AboutThickText>{TEXT.ABOUT_SECTION.ABOUT_PARAGRAPH}</AboutThickText>
          <UnderText>
            {TEXT.ABOUT_SECTION.ABOUT_PARAGRAPH}
            {TEXT.ABOUT_SECTION.ABOUT_PARAGRAPH}
          </UnderText>
        </AboutTextContainer>
        <AboutImage src={AboutImg} />
      </AboutSection>
    </>
  );
}
