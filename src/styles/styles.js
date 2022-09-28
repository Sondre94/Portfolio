import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";

const FooterTitle = styled.h3`
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 60px;
`;

const SectionGreenLine = styled.hr`
  margin: 30px 0;
  height: 1px;
  border: none;
  background: -webkit-gradient(
    linear,
    0 0,
    100% 0,
    from(transparent),
    to(transparent),
    color-stop(50%, rgb(0, 247, 230))
  );
`;

const ProfilImg = styled.img``;

const NameHeadline = styled.h1`
  font-weight: 300;
  font-size: 40px;
`;

const UnderText = styled.p`
  color: grey;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;

  & li {
    margin-top: 25px;
    font-size: 12px;
  }

  & strong {
    font-weight: 500;
    margin-right: 15px;
  }
`;

const FooterTextContainer = styled.div`
  width: 65%;
  margin: 0 auto;
  padding-left: 40px;
  padding-top: 50px;
  padding-bottom: 0;
`;

const ArrowDownIcon = styled(AiOutlineArrowDown)`
  vertical-align: middle;
  padding: 10px 0px;
  margin-left: 15px;
`;

const AboutTextContainer = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-right: 50px;
  max-width: 60%;
`;

const AboutImage = styled.img`
  height: 250px;
  padding-left: 50px;
`;

const BodyStyling = styled.body`
  color: white;
  font-family: montserrat;
  letter-spacing: 0.15em;
`;

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

const AboutThickText = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
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
  BodyStyling,
  AboutImage,
  ArrowDownIcon,
  AboutTextContainer,
  FooterTextContainer,
  ContactList,
  UnderText,
  NameHeadline,
  ProfilImg,
  SectionGreenLine,
  AboutThickText,
  FooterTitle,
};
