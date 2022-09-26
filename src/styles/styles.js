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
  margin: 15px 20px;
  font-size: 16px;
  transition: 0.3s ease-in;
  padding: 10px;

  &:hover {
    box-shadow: inset 0 -2px 0 aqua;
    transition: 0.3s ease-in-out;
  }
`;
// Header
const StyledHeaderContainer = styled.header`
  height: 400px;
  margin: 0 auto;
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
`;

// Section Titles
const SectionTitle = styled.h2`
  font-weight: 200;
  color: rgba(255, 255, 255, 0.9);
  font-size: 2em;
  padding: 0em 2em 1.4em 0;
`;

const SectionTitleH3 = styled.h3`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.5em;
  padding: 1.3em 0 2em 0;
  max-width: 540px;
  font-weight: 200;
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
    box-shadow: inset 0 -2px 0 aqua;
    transition: 0.3s ease-in-out;
  }
`;

const StyledProjectCardButton = styled.button`
  background: transparent;
  border: none;
  border-bottom: 2px solid cyan;
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
