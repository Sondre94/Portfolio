import {
  SectionTitleH3,
  AboutSection,
  AboutImage,
  UnderText,
  SectionGreenLine,
  AboutTextContainer,
  AboutThickText,
  SocialLinks,
} from "../styles/styles";
import { TEXT } from "./textconsts";
import AboutImg from "../images/about2.0.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function About() {
  const style = { margin: "15px" };
  return (
    <>
      <SectionTitleH3 className="no-padding">
        {TEXT.ABOUT_SECTION.ABOUT_TITLE}
      </SectionTitleH3>
      <SectionGreenLine />
      <AboutSection>
        <AboutTextContainer>
          <AboutThickText>{TEXT.ABOUT_SECTION.ABOUT_PARAGRAPH}</AboutThickText>
          <UnderText>{TEXT.ABOUT_SECTION.ABOUT_PARAGRAPH_FADE}</UnderText>
        </AboutTextContainer>
        <AboutImage src={AboutImg} />
      </AboutSection>
      <SocialLinks>
        <a href="https://github.com/Sondre94" target="_blank">
          <BsGithub style={style} />
        </a>
        <a
          href="https://www.linkedin.com/in/sondre-f%C3%B8rde-414ab1248/"
          target="_blank"
        >
          <BsLinkedin style={style} />
        </a>
      </SocialLinks>
    </>
  );
}
