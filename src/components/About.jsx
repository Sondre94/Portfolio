import { SectionTitleH3, AboutSection } from "../styles/styles";
import { headerparagraph } from "./textconsts";

export default function About() {
  return (
    <>
      <SectionTitleH3>Om meg</SectionTitleH3>
      <AboutSection>
        <p className="about-p">
          {headerparagraph}
          {headerparagraph}
        </p>
        <img src={require("../images/about.png")} className="about-img" />
      </AboutSection>
    </>
  );
}
