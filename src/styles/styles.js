import styled from "styled-components";

import { AiOutlineArrowDown } from "react-icons/ai";

// global styling components

const SectionGreenLine = styled.hr`
  margin: 30px 0;
  height: 2px;
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
const MainContent = styled.div`
  background: #131516;
  max-width: 1200px;
  padding-left: 4em;
  padding-right: 4em;
  margin: 0 auto;

  @media (max-width: 800px) {
    max-width: 800px;
    padding: 0;
    margin: 0 auto !important;
  }
`;

//button

const IconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s;
  }
`;

const StyledButton = styled.button`
  font-size: 18px;
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
    transform: scale(1.1);
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

  &:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.1);
  }

  @media (max-width: 800px) {
    font-size: 12px;
    padding-top: 25px;
  }
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

// Header section styling

const StyledHeaderContainer = styled.header`
  height: 400px;
  margin: 0 auto;
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 4em;

  @media (max-width: 800px) {
    flex-direction: column;
    padding-top: 20px;
  }
`;

const HeaderContainerLeft = styled.div`
  width: 80%;
  max-width: 540px;
  min-width: 540px;
  padding-right: 20%;
  font-weight: 200;
  @media (max-width: 800px) {
    width: 100%;
    padding-top: 10%;
    padding-right: 0%;
  }
`;

const ProfilImg = styled.img`
  @media (max-width: 800px) {
    order: -1;
    width: 50%;
  }
`;

const NameHeadline = styled.h1`
  font-weight: 300;
  font-size: 40px;

  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`;
const ArrowDownIcon = styled(AiOutlineArrowDown)`
  vertical-align: middle;
  padding: 10px 0px;
  margin-left: 15px;
`;

// Interesse section styling

const InteresserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 2em;
  letter-spacing: 0.1em;
  font-weight: 400;
`;

const HoverTextRender = styled.div`
  color: rgb(211, 211, 211);
  font-size: 15px;
  margin-top: 30px;
  text-align: center;
  max-width: 600px;
  transition: transform 0.3s;
`;
const TextContainer = styled.div`
  height: 60px;
`;

const BtnSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vh;
  height: 10vh;

  & button {
    margin-left: 25px;
    border: 1px solid aqua;
    background: none;
    border-radius: 100%;
    padding: 14px;
    color: aqua;
    font-size: 25px;
  }
  @media (max-width: 800px) {
    margin-top: 50px;

    width: 30%;
    & button {
      font-size: 15px;
      padding: 15px;
    }
  }
`;

// About section styling

const AboutTextContainer = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-right: 50px;
  max-width: 60%;

  @media (max-width: 800px) {
    padding-bottom: 50px;
  }
`;

const AboutImage = styled.img`
  height: 250px;
  padding-left: 50px;

  @media (max-width: 800px) {
    height: 60vh;
    max-height: 250px;
    margin: 0 auto;
  }
`;

const BodyStyling = styled.body`
  color: white;
  font-family: montserrat;
  letter-spacing: 0.15em;
`;

// typography

const InteresseTitle = styled.h3`
  padding-top: 50px;
  color: whitesmoke;
  font-weight: 200;
  @media (max-width: 800px) {
    padding-top: 150px;
  }
`;
const SectionTitle = styled.h2`
  font-weight: 200;
  color: rgba(255, 255, 255, 0.9);
  font-size: 2em;
  padding: 0em 2em 1.4em 0;
  border-width: 0 0 2px 0px;
  border-style: solid;
  border-image: linear-gradient(to left, transparent, aqua, transparent) 1;
`;

const SectionTitleH3 = styled.h3`
  color: rgba(255, 255, 255, 0.9);
  font-size: 2em;
  padding: 1em 0 1em 0;
  font-weight: 200;
  text-align: center;
  @media (max-width: 800px) {
    margin-top: 400px;
  }
`;

const SectionParagraph = styled.p`
  margin-top: 2em;

  @media (max-width: 800px) {
    order: 2;
  }
`;

//About section

const AboutSection = styled.div`
  display: flex;
  padding-top: 40px;
  padding-right: 20px;
  padding-bottom: 100px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding-right: 0;
  }
`;

const StyledFooter = styled.footer`
  background: #0d0d0d;
  width: 100%;
  height: 100%;
  padding-bottom: 0;
  box-shadow: -1px -5px 25px 0px rgba(0, 0, 0, 0.3);
  border-width: 1px 0 0px 0px;
  border-style: solid;
  border-image: linear-gradient(to left, transparent, aqua, transparent) 1;
`;

const AboutThickText = styled.p`
  font-size: 18px;
  margin-bottom: 5px;

  @media (max-width: 800px) {
    margin-bottom: 10%;
    font-size: 15px;
    width: 130%;
  }
`;

// Footer section styling

const FooterTextContainer = styled.div`
  width: 65%;
  margin: 0 auto;
  padding-left: 40px;
  padding-top: 50px;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
`;

const FooterTitle = styled.h3`
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 60px;
`;

const UnderText = styled.p`
  color: grey;

  @media (max-width: 800px) {
    font-size: 12px;
    width: 130%;
  }
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

const SocialLinks = styled.div`
  color: aqua;
  font-size: 40px;
  display: flex;
  margin-bottom: 25px;
  justify-content: center;
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
  BtnSection,
  IconBtn,
  TextContainer,
  InteresseTitle,
  HoverTextRender,
  SocialLinks,
};
