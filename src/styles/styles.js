import styled from "styled-components";

// Main container for siden

const MainContent = styled.div`
  background: #131516;
  max-width: 1200px;
  padding-left: 4em;
  padding-right: 4em;
  margin: 0 auto;
`;

// navbar
const StyledNavBar = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
`;

const StyledNavLinks = styled.li`
  box-sizing: border-box;
  margin: 10px 20px;
  font-size: 16px;
  transition: 0.3s ease-in;
  padding: 10px;

  &:hover {
    transition: 0.3s ease-in-out;
    border-width: 0 0 1px 0px;
    border-style: solid;
    border-style: inset;
    border-image: linear-gradient(to left, transparent, aqua, transparent) 1;
  }
`;
// Header
const StyledHeaderContainer = styled.header`
  height: 400px;
  margin: 0 auto;
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 4em;
`;

// Section Titles
const SectionTitle = styled.h2`
  font-weight: 200;
  color: rgba(255, 255, 255, 0.9);
  font-size: 2em;
  padding: 0em 2em 1.4em 0;
  border-width: 0 0 1px 0px;
  border-style: solid;
  border-image: linear-gradient(to left, transparent, aqua, transparent) 1;
`;

const SectionTitleH3 = styled.h3`
  color: rgba(255, 255, 255, 0.9);
  font-size: 2em;
  padding: 1em 0 1em 0;
  font-weight: 200;
  text-align: center;
`;

const HeaderContainerLeft = styled.div`
  width: 80%;
  max-width: 540px;
  min-width: 540px;
  padding-right: 20%;
  font-weight: 200;
`;

// Section paragraph
const SectionParagraph = styled.p`
  margin-top: 3em;
`;

// interesse section
const InteresserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 2em;
  letter-spacing: 0.1em;
  font-weight: 400;
`;

//About section

const AboutSection = styled.div`
  display: flex;
  padding-top: 40px;
  padding-right: 20px;
  padding-bottom: 100px;
`;

//button
const StyledButton = styled.button`
  font-size: 20px;
  padding-bottom: 2px;
  transition: 0.3s ease-in;
  background: transparent;
  border: none;
  color: whitesmoke;
  float: right;

  &:hover {
    transition: 0.3s ease-in-out;
    border-width: 0 0 1px 0px;
    border-style: solid;
    border-image: linear-gradient(to left, transparent, aqua, transparent) 1;
  }
`;

const StyledProjectCardButton = styled.button`
  background: transparent;
  border: none;
  border-width: 0 0 1px 0px;
  border-style: solid;
  border-image: linear-gradient(to left, transparent, aqua, transparent) 1;
  color: rgba(255, 255, 255);
  font-size: 14px;
  padding: 10px 20px;
  margin-top: 1.5rem;
`;

const StyledFooter = styled.footer`
  background: #0d0d0d;
  width: 100%;
  height: 300px;
  margin: 0 auto;
  padding-bottom: 0;
  box-shadow: -1px -5px 25px 0px rgba(0, 0, 0, 0.3);
  border-width: 1px 0 0px 0px;
  border-style: solid;
  border-image: linear-gradient(to left, transparent, aqua, transparent) 1;
`;
export {
  MainContent,
  StyledNavBar,
  StyledNavLinks,
  StyledHeaderContainer,
  SectionTitle,
  SectionParagraph,
  HeaderContainerLeft,
  StyledButton,
  SectionTitleH3,
  StyledProjectCardButton,
  InteresserSection,
  AboutSection,
  StyledFooter,
};
