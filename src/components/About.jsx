import { SectionTitleH3, AboutSection } from "../styles/styles";
import { TEXT } from "./textconsts";

export default function About() {
  return (
    <>
      <SectionTitleH3>Om meg</SectionTitleH3>
      <hr></hr>
      <AboutSection>
        <div className="about-p">
          {TEXT.HEADER_PARAGRAPH}
          <p id="undertext">{TEXT.HEADER_PARAGRAPH}</p>
        </div>
        <img src={require("../images/about.png")} className="about-img" />
      </AboutSection>
    </>
  );
}
