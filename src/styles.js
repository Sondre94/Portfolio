import styled from "styled-components";

// Main container for siden

const MainContent = styled.div`
  margin: 0 auto;
  background: #141414;
  max-width: 1080px;
  height: 100vh;
  padding-left: 6em;
  padding-right: 6em;
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
  padding: 30px 30px;
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

const HeaderContainerLeft = styled.div`
  width: 40%;
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
};
