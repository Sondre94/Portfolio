import styled from "styled-components";

// Main container for siden

const MainContent = styled.div`
  background: #141414;
  max-width: 1080px;
  height: 2000px;
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
    border-bottom: 2px solid rgba(67, 239, 210, 0.6);
    transition: 0.3s ease-in-out;
  }
`;
// Header
const StyledHeaderContainer = styled.header`
  height: 400px;
  margin: 0 auto;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`;

// Section Titles
const SectionTitle = styled.h2`
  color: rgba(255, 255, 255, 0.9);
  font-size: 2em;
  padding: 1.3em 2em 1.4em 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
`;

const SectionTitleH3 = styled.h3`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.5em;
  padding: 1.3em 0 1.4em 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  max-width: 540px;
`;

const HeaderContainerLeft = styled.div`
  width: 80%;
`;

// Section paragraph
const SectionParagraph = styled.p`
  margin-top: 3em;
`;

//button
const StyledButton = styled.button`
  background: transparent;
  border: none;
  border-bottom: 2px solid cyan;
  color: rgba(255, 255, 255);
  float: right;
  font-size: 20px;
  padding: 10px 20px;
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
};
