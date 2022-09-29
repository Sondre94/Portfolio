import { SectionTitleH3, SectionGreenLine } from "../styles/styles";
import Carousel from "./carousel";
import { TEXT } from "./textconsts";

export default function Projects() {
  return (
    <>
      <SectionTitleH3>{TEXT.PROJECTS_SECTION.PROJECT_TITLE}</SectionTitleH3>
      <SectionGreenLine />
      <Carousel />
    </>
  );
}
